module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'next/core-web-vitals', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.tsx', '*.js'],
    },
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'require-jsdoc': 0,
    'linebreak-style': 0,
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { code: 140, ignoreUrls: true }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'no-unused-vars': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'max-len': ['error', { code: 200 }],
    'quote-props': 'off',
    'operator-linebreak': 'off',
    'new-cap': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react-hooks/rules-of-hooks': 'off',
    indent: 'off',
    'react/no-unescaped-entities': 'off',
    'comma-dangle': 'off',
  },
  plugins: ['react', '@typescript-eslint', 'eslint-plugin-tailwindcss'],
};
