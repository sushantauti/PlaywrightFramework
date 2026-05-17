import {test,expect,type Page} from '@playwright/test';

test.beforeEach(async ({ page }) => {

  await page.goto('/');
  await page.waitForLoadState('networkidle', { timeout: 50000 });
});

export { test, expect,type Page };