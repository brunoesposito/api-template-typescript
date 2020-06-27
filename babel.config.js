module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@configs': './src/Configs',
          '@models': './src/Models',
          '@controllers': './src/Controllers',
          '@views': './src/Views',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts'],
};
