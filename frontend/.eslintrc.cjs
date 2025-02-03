module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    amd: true
  },
  ignorePatterns: ['node_modules/', 'dist/', 'build/'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y'],
  rules: {
    'react/prop-types': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/anchor-is-valid': 'warn',
    '@typescript-eslint/no-unused-expressions': ['error', { allowTernary: true }]
  },
  globals: {
    define: 'readonly'
  }
};
