module.exports = {
  verbose: true,
  globals: {
    ZAFClient: {
      init: () => {}
    }
  },
  collectCoverageFrom: [
    "src/**/*.{js,jsx}"
  ],
  setupFiles: [
    "<rootDir>/spec/polyfills/polyfills.js"
  ],
  testPathIgnorePatterns: [
    "<rootDir>[/\\\\](build|docs|node_modules)[/\\\\]"
  ],
  testEnvironment: "node",
  testURL: "http://localhost",
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
  ],
  moduleNameMapper: {
    "^react-native$": "react-native-web"
  }
}
