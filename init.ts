import {Express} from "express";
import {globStream} from "glob";

const init = async (app: Express) => {
    const stream = globStream("plugins/**/*.dsc.json")
    const plugins: {
        [key: string]: any
    } = {

    }

    stream.on("data", async (data) => {
        const config = (await import((`./${data}`))).default
        const path = data.replace("config.dsc.json", "")
        const entry = (await import((`./${path + config.entry}`))).default

        const up = async (app: Express, plugins?: {
            [key: string]: any
        }) => {
            return await entry(app, plugins)
        }

        if(Array.isArray(config.dependencies)) {

            const interval = setInterval(async () => {
                let allow = true

                for(const dependency of config.dependencies) { {
                    if(!plugins[dependency]) {
                        allow = false
                    }
                }}

                if(allow) {
                    const data = await up(app, plugins)
                    plugins[config.name] = data

                    clearInterval(interval)
                }

            }, 100)
        } else {
            const data = await up(app)
            plugins[config.name] = data
        }
    })

}

export default init