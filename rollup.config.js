import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'cjs',
        name: 'MyBundle',
    },
    plugins: [nodeResolve()]
};
