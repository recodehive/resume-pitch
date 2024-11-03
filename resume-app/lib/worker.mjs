'use server'
import { parentPort, threadId } from "worker_threads";
import {uploadImageToS3} from "./uploadImageToS3.mjs"
import { sendMail } from './mailer.mjs'

parentPort.on("message", async (data) => {
    const {fileName, fileData} = data;
    
    const url = await uploadImageToS3(fileName, fileData);
    url && await sendMail(url);

    parentPort.postMessage(
        JSON.stringify({
            url
        })
    );
});

function delay() {
    return new Promise(res => {
        setTimeout(res, 2000)
    })
}