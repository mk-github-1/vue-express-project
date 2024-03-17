// ■ 追加: 検討中
module.exports = {
  // exportの制限
  plugins: ['import'],
  rules: {
    'import/no-named-default': 'error'
    // "import/no-anonymous-default-export": "error",
    // "import/no-multiple-default-export": "error",
  }
}
