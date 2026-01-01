// Vendors
import express from 'express'
import mongoose from 'mongoose'
import fileUpload from "express-fileupload"
import 'dotenv/config'
import cors from "cors"
import cookieParser from "cookie-parser"
import * as https from "https"
import * as fs from "fs"

// Variables
const router = require("./src/routes/index.routes.ts")
import { STATIC_FOLDER_NAME } from "./src/config/config"


const app = express()
app.use(
  cors({
    // origin needed because front and back works on different ports (only local develop)
    origin: `http://localhost:8080`,
    credentials: true, //access-control-allow-credentials: true
    // TODO: fix this
    // @ts-ignore
    optionSuccessStatus: 200,
  }),
)
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(STATIC_FOLDER_NAME))
app.use(fileUpload({}))
app.use(router) // http://localhost:5000/api/

const options = {
  key: fs.readFileSync('privkey.pem'),
  cert: fs.readFileSync('cert.pem'),
};

async function startApp() {
  try {
    await mongoose.connect(process.env.DB)
    https.createServer(options, app).listen(process.env.PORT);
  } catch (e) {
    console.log(e)
  }
}

startApp()