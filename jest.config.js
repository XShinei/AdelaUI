module.exports = {
  preset: 'ts-jest',
  globals: {
    // work around: https://github.com/kulshekhar/ts-jest/issues/748#issuecomment-423528659
    'ts-jest': {
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.ts$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest"
  },
  moduleFileExtensions: ['vue', 'json', 'ts', 'tsx', 'js', 'json']
}
