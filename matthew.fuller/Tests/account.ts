import { Selector, t } from 'testcafe';
import ConfigurationManager from '../Configuration/configuration';
import AccountPage from '../PageObjects/acount-page';
import { mattUser } from '../Utilities/roles';
import Util from '../Utilities/util';

const configManager = new ConfigurationManager();

fixture`acounts`.page(configManager.homePage).beforeEach(async () => {
  t.ctx.user = mattUser;
  await t
    .setNativeDialogHandler(() => true)
    .useRole(t.ctx.user.role);
});
test('check slider value', async () => {
  const accountPage = new AccountPage();
  await accountPage.navigateFromHomeToAccountPage();
  console.log(await accountPage.getSwitchBool());
  await t.click(accountPage.emailNotificationSwitch);
  console.log(await accountPage.getSwitchBool());
});

test('check improper email error msg displays', async () => {
  const util = new Util();
  const accountPage = new AccountPage();
  await accountPage.navigateFromHomeToAccountPage();
  await util.CtlADelete(Selector('#formHorizontalEmail'));
  const errorSelector = Selector('span.error.formHorizontalEmail.active');
  await t.expect(errorSelector.exists).eql(true)
    .expect(await (await errorSelector.innerText).includes('email')).eql(true);
});
