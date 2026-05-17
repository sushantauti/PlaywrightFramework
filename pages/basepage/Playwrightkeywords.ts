import { expect, type Page } from "../../fixures/base-test.js"

export class PlaywrightKeywords {

    protected readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    public async sendTextToElement(locator: string, text: string): Promise<void> {
        await this.page.locator(locator).fill(text);
    }

    public async clickElement(locator: string): Promise<void> {
        await this.page.locator(locator).click();
    }

    public async validateTitle(expectedTitle: string): Promise<void> {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

        public async validateExactInnerText(locator: string, expectedText: string): Promise<void> {
        await expect(this.page.locator(locator)).toHaveText(expectedText);
    }

    public async validateAttributeValue(locator: string, attributeName: string, expectedValue: string): Promise<void> {
        await expect(this.page.locator(locator)).toHaveAttribute(attributeName, expectedValue); 
    }

}