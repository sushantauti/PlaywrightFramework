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

    //method to validate title 
    //method to toHaveText
    //method to toHaveAttribute
    //will start at 2 PM IST
}