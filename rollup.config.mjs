import typescript from '@rollup/plugin-typescript';

export default [
	{
		input: 'src/client.ts',
		output: {
			file: 'dist/client.js',
			format: 'cjs',
		},
		plugins: [typescript()],
	},
	{
		input: 'src/server.ts',
		output: {
			file: 'dist/server.js',
			format: 'cjs',
		},
		plugins: [typescript()],
	},
];
