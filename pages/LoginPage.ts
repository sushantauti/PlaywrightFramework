import { test, expect, type Page } from "../fixures/base-test.js"
class LoginPage {
    private readonly page:Page;
    constructor(page:Page) {
        this.page = page;
    }


    async fillUserName(username: string):Promise<void> {
        await this.page.locator("xpath=//input[@name='username']").fill(username);
    }

    async fillPassword(password: string):Promise<void> {
    await this.page.locator("xpath=//input[@name='password']").fill(password);
    }

    async clickLogin():Promise<void> {
    await this.page.locator("xpath=//button[@type='submit']").click();
    }

    async verifyDashboard():Promise<void> {
    await expect(this.page.locator("xpath=//h6")).toHaveText('Dashboard');
    }

    async verifyInvalidLogin():Promise<void> {
    await expect(this.page.locator("xpath=//div[@class='orangehrm-login-form']//p[contains(@class,'oxd-alert-content-text')]"))
      .toHaveText('Invalid credentials');
    }

    async verifySucessfullLogin():Promise<void> {
    await expect(this.page.locator("xpath=//h5[text()='Login']")).toHaveText('Login');
    }

} 
