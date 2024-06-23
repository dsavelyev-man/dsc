const esbuild = require("esbuild");
const config = require("./esbuild.config");

const watch = async () => {
    let ctx = await esbuild.context(config);
    await ctx.watch();
    console.log('Watching...');
}

watch()
