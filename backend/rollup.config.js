import { nodeResolve } from '@rollup/plugin-node-resolve';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from '@rollup/plugin-typescript';



export default {
  input: 'src/start.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
      strict: false,
  },
  plugins: [
                    commonjs({
                      strictRequires: true,
                  transformMixedEsModules: true,
                  ignore: ['yaml', 'yamlparser'],
  dynamicRequireTargets: [
    // include using a glob pattern (either a string or an array of strings)
    'node_modules/@nestjs/**',
    '**'
  ],
                  esmExternals:  [
                    'is-docker',
                    'got'
                  ]
                }),
    nodeResolve(),
                nodePolyfills( /* options */ ),
                json(),
                typescript()

]
};
