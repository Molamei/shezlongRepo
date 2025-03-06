module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts", "<rootDir>/jest-setup.ts"], // Add jest-setup.ts
  testEnvironment: "jsdom",
  testMatch: ["**/*.spec.ts"],
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$)'],
};
