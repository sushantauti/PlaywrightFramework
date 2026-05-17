import { expect, type Page } from '../../fixures/base-test.js';

export  class Playwrightkeywords {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async sendTextToElement(locator: string, text: string): Promise<void> {
    await this.page.fill(locator, text);
  }

    public async clickElement(locator: string): Promise<void> {
    await this.page.click(locator);
  }
}
