import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";
import terser from "@rollup/plugin-terser";
import postcss from 'rollup-plugin-postcss';
import postcssAttributeCaseInsensitive from "postcss-attribute-case-insensitive";
import copyAssets from 'rollup-plugin-copy-assets';
const jsConfig = {
    input: "src/js/global.js",
    output: {
        file: "dist/js/expack.min.js",
        format: "iife",
        name: "ExPack",
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
          exclude: "node_modules/**",
          presets: ["@babel/preset-env"],
          babelHelpers: "bundled",
        }),
        postcss({
          extract: true,
          modules: false,
          minimize: true, // Minify only in the minified output
          sourceMap: false, // No source maps for minified output
        }),
    ],
}
const cssConfig = {
    input: "src/sass/icons.scss",
    output: {
        file: "dist/css/icons.min.css",
        format: "iife",
        name: "ExPack",
        sourcemap: true,
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
          exclude: "node_modules/**",
          presets: ["@babel/preset-env"],
          babelHelpers: "bundled",
        }),
        postcss({
          extract: true,
          modules: false,
          minimize: true, // Minify only in the minified output
          sourceMap: false, // No source maps for minified output
        }),
        terser(),
    ],
}
export default [
  {
    ...jsConfig,
  },
  {
    ...cssConfig,
  },
];
