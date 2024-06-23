const esbuild = require("esbuild");
const config = require("./esbuild.config.js");

esbuild.build(config).catch(() => {
    console.error(`Build error: ${error}`)
    process.exit(1)
})