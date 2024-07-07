import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../../pageobjects/iOS/login-page.js';
import ProductsPage from '../../pageobjects/iOS/products-page.js';
import {LOGIN_USERS} from '../../helper/constants.js';
import {MESSAGE} from '../../helper/constants.js';

Given(/^I am on the login page$/, async() => {
	await expect(LoginPage.inputPassword).toBeExisting();
    await expect(LoginPage.inputUsername).toBeExisting();
    await expect(LoginPage.btnLogin).toBeExisting();
});

When(/^I login with valid username and password$/, async() => {
	await LoginPage.login(LOGIN_USERS.STANDARD.username,LOGIN_USERS.STANDARD.password);
});

Then(/^I should redirect to products page$$/, async() => {
	const element=LoginPage.getXPath(MESSAGE.STANDARD.message);
	console.log(element);
	await expect($(element)).toBeExisting();
    await expect($(element)).toHaveAttribute('label',MESSAGE.STANDARD.message)
});


When(/^I login with invalid username and password$/, async() => {
	await LoginPage.login(LOGIN_USERS.NO_MATCH.username,LOGIN_USERS.NO_MATCH.password);
});

Then(/^I should get error message for invalid creditials$/, async() => {
	const element=LoginPage.getXPath(MESSAGE.NO_MATCH.message);
	console.log(element);
	await expect($(element)).toBeExisting();
    await expect($(element)).toHaveAttribute('label',MESSAGE.NO_MATCH.message)
});


When(/^I login with locked username and password$/, async() => {
	await LoginPage.login(LOGIN_USERS.LOCKED.username,LOGIN_USERS.LOCKED.password);
});

Then(/^I should get error message for locked creditials$/, async() => {
	const element=LoginPage.getXPath(MESSAGE.LOCKED.message);
	console.log(element);
	await expect($(element)).toBeExisting();
    await expect($(element)).toHaveAttribute('label',MESSAGE.LOCKED.message)
});

When(/^I login with valid username and without password$/, async() => {
	await LoginPage.login(LOGIN_USERS.NO_PASSWORD.username,LOGIN_USERS.NO_PASSWORD.password);
});

Then(/^I should get error message for no password$/, async() => {
	const element=LoginPage.getXPath(MESSAGE.NO_PASSWORD.message);
	console.log(element);
	await expect($(element)).toBeExisting();
    await expect($(element)).toHaveAttribute('label',MESSAGE.NO_PASSWORD.message)
});


When(/^I login without username and password$/, async() => {
	await LoginPage.login(LOGIN_USERS.NO_USER_DETAILS.username,LOGIN_USERS.NO_USER_DETAILS.password);
});

Then(/^I should get error message for no username$/, async() => {
	const element=LoginPage.getXPath(MESSAGE.NO_USER_DETAILS.message);
	console.log(element);
	await expect($(element)).toBeExisting();
    await expect($(element)).toHaveAttribute('label',MESSAGE.NO_USER_DETAILS.message)
});


