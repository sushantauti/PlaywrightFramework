import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/Dashboardpage.js';
import { JsonUtil } from '../utils/json-util.js';


const validLoginData = JsonUtil.readJsonFile('validLoginData');
    for (const { username, password, errorMessage } of validLoginData) {
test.describe('OrangeHRM Login - Data Driven', () => {
    test('Validate user is able to Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.fillUsername(username);
        await loginPage.fillPassword(password);
        await loginPage.clickOnLogin();
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.validateDashboardHeader(errorMessage);
    });

    const invalidLoginData = JsonUtil.readJsonFile('invalidLoginData');
    for (const { username, password, errorMessage } of invalidLoginData) {
        test(`Login with invalid credentials: ${username} / ${password}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.fillUsername(username);
            await loginPage.fillPassword(password);
            await loginPage.clickOnLogin();
            await loginPage.validateInvalidErrorMessage(errorMessage);
        });
    }; 
});