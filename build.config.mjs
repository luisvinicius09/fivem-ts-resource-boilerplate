import * as esbuild from 'esbuild';

await esbuild.build({
	entryPoints: [
		{
			in: './src/client/index.ts',
			out: 'client',
		},
		{
			in: './src/server/index.ts',
			out: 'server',
		},
	],
	target: 'es2017',
	bundle: true,
	outdir: './dist',
});

// TODO: clear folder first

// https://esbuild.github.io/api/#alias
