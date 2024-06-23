import "dotenv/config"
import express from "express"
import init from "./init";

const app = express()

init(app).then(() => {
    app.use(express.static('static'));

    app.listen(process.env.PORT || 3000, () => {
        console.log(`dsc is started on ${process.env.PORT || 3000}`)
    })
})

