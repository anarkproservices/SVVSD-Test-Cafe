/** @description A class represnting the controller that handles configs */
export default class ConfigurationManager {
	serverUrl: string;

	homePage: string;

	createUserPage: string;

	groupCreationPage: string;

	activityCreationPage: string;

	// eslint-disable-next-line global-require
	config = require('./config.json')

	defaultEndDate = '10/22/3000 12:00:00 AM'

	defaultJavaScriptEndDate = new Date('3000-12-17T5:12')

	defaultEditedEndDate = '10/22/3000 12:00:00 AM'

	defaultEditedStartDate = '10/22/2500 12:00:00 AM'

	constructor() {
	  this.serverUrl = 'https://svvsd.cloud-staging.anark.com';
	  this.homePage = `${this.serverUrl}/feed`;
	  this.createUserPage = `${this.serverUrl}/manage/user`;
	  this.groupCreationPage = `${this.serverUrl}/manage/group?tab=User`;
	  this.activityCreationPage = `${this.serverUrl}/activity?tab=Content`;
	}
}
