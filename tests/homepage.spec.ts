import { test, expect } from '@playwright/test';

test.describe('Sungsim Care Homepage Verification', () => {
    test.beforeEach(async ({ page }) => {
        // We'll assume the dev server is running or we'll run it
        await page.goto('http://localhost:3000');
    });

    test('should have correct SEO metadata', async ({ page }) => {
        await expect(page).toHaveTitle(/주식회사 안녕 - 병원동행 서비스/);
        const description = await page.getAttribute('meta[name="description"]', 'content');
        expect(description).toContain('다시 안녕을 묻다');
    });

    test('should display key sections', async ({ page }) => {
        await expect(page.locator('h1')).toHaveText('다시 안녕을 묻다.');
        await expect(page.locator('text=누적된 행복한 동행')).toBeVisible();
        await expect(page.locator('text=전문가 양성 과정')).toBeVisible();
    });

    test('should have a working hamburger menu on mobile', async ({ page }) => {
        await page.setViewportSize({ width: 375, height: 812 });
        const hamburger = page.locator('button[aria-label="Toggle menu"]');
        await expect(hamburger).toBeVisible();
        await hamburger.click();
        await expect(page.locator('nav')).toBeVisible();
    });

    test('should be optimized for wide mobile (Opened Fold)', async ({ page }) => {
        // Samsung Fold 7 inner screen approx 1768 x 2208 (or similar aspect ratio)
        await page.setViewportSize({ width: 1024, height: 1024 });
        const container = page.locator('.container').first();
        await expect(container).toHaveCSS('padding-left', '40px');
        await expect(container).toHaveCSS('padding-right', '40px');
    });
});
