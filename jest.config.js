/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
// eslint-disable-next-line no-undef
module.exports = {
  setupFilesAfterEnv: ["./jest.setupAfterEnv.ts"],
  moduleDirectories: ["node_modules", "<rootDir>"],
  preset: "ts-jest",
  testEnvironment: "node",
  roots: ["<rootDir>"],
  moduleNameMapper: {
    "^features/(.*)$": "<rootDir>/src/components/$1",
    "^data/(.*)$": "<rootDir>/src/data/$1",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^store/(.*)$": "<rootDir>/src/store/$1",
    "^test/(.*)$": "<rootDir>/src/test/$1",
    "\\.(css|less)$": "identity-obj-proxy",
  },
  testPathIgnorePatterns: ["index.ts"],
  collectCoverageFrom: [
    "src/components/**/*.ts",
    "src/components/**/*.tsx",
    "src/pages/**/*.ts",
    "src/pages/**/*.tsx",
  ],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "./src/tests/mocks/fileMock.js",
    "\\.(css|less)$": "./src/tests/mocks/styleMock.js",
  },
};
