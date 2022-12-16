/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  webServer: {
    command: 'npm run dev',
    port: 5173,
    reuseExistingServer: true
  },
  testDir: 'tests'
}

export default config
