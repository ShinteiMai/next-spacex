// jest.config.js
module.exports = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  modulePathIgnorePatterns: ["cypress"],
  moduleNameMapper: {
    "@components/(.*)$": "<rootDir>/components/$1",
    "@utils/(.*)$": "<rootDir>/utils/$1",
    "@data/(.*)$": "<rootDir>/data/$1",
    "@api/(.*)$": "<rootDir>/api/$1",
  },
};
