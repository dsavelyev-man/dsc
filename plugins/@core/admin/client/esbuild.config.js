const postCssPlugin = require('esbuild-style-plugin')
const esbuild = require("esbuild")

module.exports = {
    entryPoints: ['src/app.tsx', 'src/css/style.css'],
    outdir: '../../../../static/core/admin',
    bundle: true,
    minify: true,
    plugins: [
        postCssPlugin({
            postcss: {
                plugins: [require('tailwindcss'), require('autoprefixer')],
            },
        }),
    ],
}