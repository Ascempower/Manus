import { expect, test } from '@playwright/test';

test.describe('Regression Tests - UI Components', () => {
  test.describe('Service Dropdown Navigation', () => {
    test('should properly position dropdown menu below Services trigger', async ({ page }) => {
      await page.goto('/');

      // Wait for page to load
      await page.waitForLoadState('networkidle');

      // Find the Services navigation item
      const servicesButton = page.locator('[data-state]').filter({ hasText: 'Services' }).first();
      await expect(servicesButton).toBeVisible();

      // Get the services button position
      const servicesButtonBox = await servicesButton.boundingBox();
      expect(servicesButtonBox).not.toBeNull();

      // Hover over the Services button to open dropdown
      await servicesButton.hover();

      // Wait for dropdown to appear
      const dropdown = page
        .locator('[role="menu"]')
        .or(page.locator('.absolute.left-0.top-full'))
        .first();
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Get dropdown position
      const dropdownBox = await dropdown.boundingBox();
      expect(dropdownBox).not.toBeNull();

      // Verify dropdown is positioned correctly:
      // 1. It should be below the services button
      expect(dropdownBox!.y).toBeGreaterThan(servicesButtonBox!.y + servicesButtonBox!.height);

      // 2. It should be aligned with the services button (left edge approximately aligned)
      expect(Math.abs(dropdownBox!.x - servicesButtonBox!.x)).toBeLessThan(50);

      // 3. It should not be floating across the page (should be contained within viewport)
      const viewportSize = page.viewportSize()!;
      expect(dropdownBox!.x).toBeGreaterThanOrEqual(0);
      expect(dropdownBox!.x + dropdownBox!.width).toBeLessThanOrEqual(viewportSize.width);

      // 4. Verify it doesn't overflow vertically beyond reasonable bounds
      expect(dropdownBox!.y + dropdownBox!.height).toBeLessThanOrEqual(viewportSize.height + 100);
    });

    test('should display all service links in dropdown', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Hover over Services to open dropdown
      const servicesButton = page.locator('[data-state]').filter({ hasText: 'Services' }).first();
      await servicesButton.hover();

      // Wait for dropdown to be visible
      const dropdown = page
        .locator('[role="menu"]')
        .or(page.locator('.absolute.left-0.top-full'))
        .first();
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Check for expected service links
      const expectedServices = [
        'All Services',
        'Health Insurance',
        'Life Insurance',
        'Medicare Advantage',
        'Medicare Supplement',
        'Final Expense',
        'Annuities',
      ];

      for (const service of expectedServices) {
        const serviceLink = dropdown.locator(`text="${service}"`).first();
        await expect(serviceLink).toBeVisible();
      }
    });

    test('should navigate correctly when service links are clicked', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Hover over Services to open dropdown
      const servicesButton = page.locator('[data-state]').filter({ hasText: 'Services' }).first();
      await servicesButton.hover();

      // Wait for dropdown and click "All Services"
      const dropdown = page
        .locator('[role="menu"]')
        .or(page.locator('.absolute.left-0.top-full'))
        .first();
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      const allServicesLink = dropdown.locator('text="All Services"').first();
      await allServicesLink.click();

      // Verify navigation to services page
      await expect(page).toHaveURL(/.*\/services/);
      await expect(page.locator('h1')).toContainText(['Services', 'Insurance', 'Coverage']);
    });
  });

  test.describe('Calendly Widget', () => {
    test('should display Calendly widget on contact page', async ({ page }) => {
      await page.goto('/contact');
      await page.waitForLoadState('networkidle');

      // Wait for Calendly widget to load
      const calendlyWidget = page
        .locator('.calendly-widget-container')
        .or(page.locator('[data-testid="calendly-widget"]'))
        .or(page.locator('div').filter({ hasText: 'Schedule Your Free Consultation' }));

      await expect(calendlyWidget).toBeVisible({ timeout: 10000 });

      // Verify Calendly-specific elements
      const scheduleHeading = page.locator('text="Schedule Your Free Consultation"');
      await expect(scheduleHeading).toBeVisible();

      // Check for Calendly iframe or embedded content
      const calendlyContent = page
        .locator('iframe[src*="calendly"]')
        .or(page.locator('.calendly-inline-widget'))
        .or(page.locator('[data-url*="calendly"]'));

      // Give Calendly time to load
      await page.waitForTimeout(5000);

      // If iframe is present, verify it's loaded
      const iframe = page.locator('iframe[src*="calendly"]').first();
      if (await iframe.isVisible()) {
        await expect(iframe).toHaveAttribute('src', /calendly/);
      } else {
        // If no iframe, check for loading state or error message
        const loadingIndicator = page.locator('text="Loading booking calendar"');
        const errorMessage = page.locator('text="Unable to load booking calendar"');

        // Either loading or error should be visible, not both missing
        const hasLoadingOrError =
          (await loadingIndicator.isVisible()) || (await errorMessage.isVisible());
        if (!hasLoadingOrError) {
          // If neither loading nor error, the widget should be fully loaded
          await expect(calendlyWidget).toBeVisible();
        }
      }
    });

    test('should show fallback options if Calendly fails to load', async ({ page }) => {
      await page.goto('/contact');
      await page.waitForLoadState('networkidle');

      // Wait for potential error state
      await page.waitForTimeout(8000);

      const errorMessage = page.locator('text="Unable to load booking calendar"');

      // If error is shown, verify fallback options are available
      if (await errorMessage.isVisible()) {
        const directLink = page.locator('a[href*="calendly.com"]');
        await expect(directLink).toBeVisible();

        const phoneLink = page.locator('a[href="tel:8774142319"]');
        await expect(phoneLink).toBeVisible();
      }
    });
  });

  test.describe('Blog Images', () => {
    test('should display hero image on life insurance blog post', async ({ page }) => {
      await page.goto('/blog/posts/april-2025-understanding-life-insurance');
      await page.waitForLoadState('networkidle');

      // Look for hero image
      const heroImage = page.locator('img').first();
      await expect(heroImage).toBeVisible({ timeout: 10000 });

      // Verify image has loaded (not showing broken image)
      const imageNaturalWidth = await heroImage.evaluate(
        (img: HTMLImageElement) => img.naturalWidth
      );
      expect(imageNaturalWidth).toBeGreaterThan(0);

      // Verify it has appropriate alt text
      const altText = await heroImage.getAttribute('alt');
      expect(altText).toBeTruthy();
      expect(altText).toMatch(/family|life insurance|advisor/i);
    });

    test('should display inline images in blog content', async ({ page }) => {
      await page.goto('/blog/posts/april-2025-understanding-life-insurance');
      await page.waitForLoadState('networkidle');

      // Look for inline images in the blog content
      const blogContent = page.locator('article').or(page.locator('main'));
      const inlineImages = blogContent.locator('img').nth(1); // Second image (first is hero)

      if (await inlineImages.isVisible()) {
        // Verify image has loaded
        const imageNaturalWidth = await inlineImages.evaluate(
          (img: HTMLImageElement) => img.naturalWidth
        );
        expect(imageNaturalWidth).toBeGreaterThan(0);

        // Verify it has alt text
        const altText = await inlineImages.getAttribute('alt');
        expect(altText).toBeTruthy();
      }
    });

    test('should handle missing images with fallback', async ({ page }) => {
      await page.goto('/blog/posts/april-2025-understanding-life-insurance');
      await page.waitForLoadState('networkidle');

      // Check all images on the page
      const images = page.locator('img');
      const imageCount = await images.count();

      for (let i = 0; i < imageCount; i++) {
        const image = images.nth(i);
        await expect(image).toBeVisible();

        // Verify no broken images (naturalWidth > 0 indicates successful load)
        const isLoaded = await image.evaluate((img: HTMLImageElement) => {
          return img.complete && img.naturalWidth > 0;
        });

        if (!isLoaded) {
          // If image failed to load, check if it's using fallback
          const src = await image.getAttribute('src');
          console.log(`Image ${i} may be using fallback: ${src}`);

          // Fallback images should still have naturalWidth > 0
          await page.waitForTimeout(2000); // Give time for fallback to load
          const fallbackLoaded = await image.evaluate((img: HTMLImageElement) => {
            return img.complete && img.naturalWidth > 0;
          });
          expect(fallbackLoaded).toBeTruthy();
        }
      }
    });

    test('should display images across different blog posts', async ({ page }) => {
      const blogPosts = [
        '/blog/posts/april-2025-understanding-life-insurance',
        '/blog/posts/march-2025-medicare-advantage-vs-supplement',
        '/blog/posts/may-2025-health-insurance-changes',
      ];

      for (const postUrl of blogPosts) {
        await page.goto(postUrl);
        await page.waitForLoadState('networkidle');

        // Should have at least one image (hero image)
        const firstImage = page.locator('img').first();
        await expect(firstImage).toBeVisible({ timeout: 10000 });

        // Verify image loaded successfully
        const imageLoaded = await firstImage.evaluate((img: HTMLImageElement) => {
          return img.complete && img.naturalWidth > 0;
        });
        expect(imageLoaded).toBeTruthy();
      }
    });
  });

  test.describe('Cross-Component Integration', () => {
    test('should maintain navigation functionality while images load', async ({ page }) => {
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Test navigation dropdown while page is loading
      const servicesButton = page.locator('[data-state]').filter({ hasText: 'Services' }).first();
      await servicesButton.hover();

      const dropdown = page
        .locator('[role="menu"]')
        .or(page.locator('.absolute.left-0.top-full'))
        .first();
      await expect(dropdown).toBeVisible({ timeout: 3000 });

      // Navigate to contact page
      await page.goto('/contact');
      await page.waitForLoadState('networkidle');

      // Verify both navigation and Calendly can coexist
      await expect(servicesButton).toBeVisible();

      const calendlyWidget = page
        .locator('.calendly-widget-container')
        .or(page.locator('div').filter({ hasText: 'Schedule Your Free Consultation' }));
      await expect(calendlyWidget).toBeVisible({ timeout: 10000 });
    });

    test('should maintain responsive behavior across components', async ({ page }) => {
      // Test mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // Mobile navigation should work
      const mobileMenuButton = page
        .locator('button[aria-label*="menu"]')
        .or(page.locator('[data-testid="mobile-menu-trigger"]'))
        .or(page.locator('button').filter({ hasText: 'Toggle navigation menu' }));

      if (await mobileMenuButton.isVisible()) {
        await mobileMenuButton.click();

        // Mobile menu should appear
        const mobileMenu = page.locator('[role="dialog"]').or(page.locator('.sheet-content'));
        await expect(mobileMenu).toBeVisible({ timeout: 3000 });
      }

      // Test desktop viewport
      await page.setViewportSize({ width: 1200, height: 800 });
      await page.goto('/contact');
      await page.waitForLoadState('networkidle');

      // Desktop elements should be visible
      const desktopNav = page.locator('nav').first();
      await expect(desktopNav).toBeVisible();

      const calendlyWidget = page.locator('.calendly-widget-container');
      await expect(calendlyWidget).toBeVisible({ timeout: 10000 });
    });
  });
});
