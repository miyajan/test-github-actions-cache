module.exports = {
  extends: "@cybozu/eslint-config/presets/node-prettier",
  overrides: [
    {
      files: ["test/**/*.js"],
      env: {
        mocha: true
      }
    }
  ]
};
