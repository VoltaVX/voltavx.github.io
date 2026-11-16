import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/browser',
  fullyParallel: true,
  workers: process.env.CI ? 2 : 4,
  retries: process.env.CI ? 1 : 0,
  reporter: 'list',
  use: { baseURL: 'http://127.0.0.1:4321', trace: 'retain-on-failure' },
  webServer: {
    command: 'npm run build && npm run preview -- --ignore-lock --host 127.0.0.1 --port 4321',
    url: `http://127.0.0.1:4321${process.env.BASE_PATH || '/'}`,
    reuseExistingServer: false,
    timeout: 120_000
  },
  projects: [
    { name: 'chromium-desktop', use: { browserName: 'chromium', viewport: { width: 1440, height: 1000 }, launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH } } },
    { name: 'chromium-mobile', use: { browserName: 'chromium', viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH } } },
    { name: 'firefox', use: { browserName: 'firefox', viewport: { width: 1280, height: 900 } } },
    { name: 'webkit', use: { browserName: 'webkit', viewport: { width: 1280, height: 900 } } }
  ]
});
