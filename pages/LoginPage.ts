import test from "node:test"
import { expect, type Page } from "../fixures/base-test.js"
import { PlaywrightKeywords } from "../pages/basepage/Playwrightkeywords.js"
import { text } from "node:stream/consumers"

const USERNAME_LOCATOR = "xpath=//input[@name='username']"
const PASSWORD_LOCATOR = "xpath=//input[@name='password']"
const LOGIN_LOCATOR = "xpath=//button[normalize-space()='Login']"
const ERROR_LOCATOR = "xpath=//p[contains(normalize-space(),'Invalid')]"
const LOGIN_HEADER = "xpath=//h5[text()='Login']"

export class LoginPage extends PlaywrightKeywords {

    constructor(page: Page) {
        super(page)
    }

    public async fillUsername(username: string): Promise<void> {
        // await this.page.locator(USERNAME_LOCATOR).fill(username);
        await this.sendTextToElement(USERNAME_LOCATOR,username);
    }

    public async fillPassword(password: string): Promise<void> {
        // await this.page.locator(PASSWORD_LOCATOR).fill(password);
         await this.sendTextToElement(PASSWORD_LOCATOR,password);
    }

    public async clickOnLogin(): Promise<void> {
        // await this.page.locator(LOGIN_LOCATOR).click();
        await this.clickElement(LOGIN_LOCATOR);
    }

    public async validateInvalidErrorMessage(expectedText: string): Promise<void> {
        await expect(this.page.locator(ERROR_LOCATOR)).toHaveText(expectedText);
    }

    public async validateLoginTitle(expectedTitle: string): Promise<void> {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    public async validateLoginHeader(expectedHeader: string): Promise<void> {
        await expect(this.page.locator(LOGIN_HEADER)).toHaveText(expectedHeader)
    }

    public async validateUsernamePlaceholder(expectedUsenamePlaceholder: string): Promise<void> {
        await expect(this.page.locator(USERNAME_LOCATOR)).toHaveAttribute("placeholder", expectedUsenamePlaceholder)
    }

    public async validatePlaceholderPlaceholder(expectedPasswordPlaceholder: string): Promise<void> {
        await expect(this.page.locator(PASSWORD_LOCATOR)).toHaveAttribute("placeholder", expectedPasswordPlaceholder)
    }
}