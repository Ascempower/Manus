import { expect, test } from '@playwright/test';

test.describe('Basic Smoke Tests', () => {
  test('should load homepage', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Choice Insurance/);
    await expect(page.locator('header')).toBeVisible();
  });

  test('should load contact page', async ({ page }) => {
    await page.goto('/contact');
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should load blog post', async ({ page }) => {
    await page.goto('/blog/posts/april-2025-understanding-life-insurance');
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('article')).toBeVisible();
  });
});
