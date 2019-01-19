import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-env'],
      plugins: ['babel-plugin-transform-class-properties']
    })
  ],
  sourcemap: true,
  external: ['@uppy/core', 'babel-polyfill']
};
