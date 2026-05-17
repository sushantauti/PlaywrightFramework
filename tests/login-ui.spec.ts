import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { DashboardPage } from '../pages/Dashboardpage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('OrangeHRM Login', () => {
  test('Verify Title', async ({ page }) => {

    await expect(page).toHaveTitle('OrangeHRM');
  });

  test('Validate Login Page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.validateLoginHeader("Login");
    await loginPage.validateUsernamePlaceholder("Username");
    await loginPage.validatePasswordPlaceholder("Password");
    await loginPage.validateLoginTitle("OrangeHRM");
  });

   test('Validate user ia able to Login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillUsername("Admin");
    await loginPage.fillPassword("admin123");
    await loginPage.clickOnLogin();
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.validateDashboardHeader("Dashboard");
  });

 test('Login with invalid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.fillUsername("Admin");
    await loginPage.fillPassword("admin1234");
    await loginPage.clickOnLogin();
    await loginPage.validateInvalidErrorMessage("Invalid credentials");
  });


});