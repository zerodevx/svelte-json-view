/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  use: {
    baseURL: 'http://localhost:5173'
  },
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true
  },
  testDir: 'tests',
  testMatch: /(.+\.)?(test|spec)\.[jt]s/
}

export default config
