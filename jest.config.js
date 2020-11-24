module.exports = {
  globals: {
    window: {},
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "js", "tsx", "jsx"],
  moduleNameMapper: {
    // 절대 경로
    "^src/(.*)": "<rootDir>/src/$1",
  },
  transformIgnorePatterns: ["./node_modules/"],
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}"],
  testEnvironment: "jsdom",
};
