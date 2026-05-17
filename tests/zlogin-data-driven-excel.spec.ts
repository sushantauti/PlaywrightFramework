import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/Dashboardpage.js';
import { ExcelUtils } from '../utils/excel-utils.js';



test.describe('OrangeHRM Login - Data Driven Excel', () => {
    const validLoginData = ExcelUtils.readExcelData('validLoginData');
    for (const { username, password, errorMessage } of validLoginData) {
    test(`Validate user is able to Login :${username} / ${password}`, async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.fillUsername(username);
        await loginPage.fillPassword(password);
        await loginPage.clickOnLogin();
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.validateDashboardHeader(errorMessage);
    });
};


    const invalidLoginData = ExcelUtils.readExcelData('invalidLoginData');
    for (const { username, password, expectedError } of invalidLoginData) {
        test(`Login with invalid credentials: ${username} / ${password}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.fillUsername(username);
            await loginPage.fillPassword(password);
            await loginPage.clickOnLogin();
            console.log("Validating error message...as " + expectedError);
            await loginPage.validateInvalidErrorMessage(expectedError);
        });
    }; 
})