import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/Dashboardpage.js';
import { invalidLoginData } from '../utils/data-source.js';

test.describe('OrangeHRM Login - Data Driven', () => {
    test('Validate user is able to Login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.fillUsername("Admin");
        await loginPage.fillPassword("admin123");
        await loginPage.clickOnLogin();
        const dashboardPage = new DashboardPage(page);
        await dashboardPage.validateDashboardHeader("Dashboard");
    });

    //invalidLoginData.forEach(({ username, password, errorMessage }) => {
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