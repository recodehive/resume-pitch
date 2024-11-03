import {
    S3Client,
    PutObjectCommand,
    GetObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const client = {
    credentials: {
        accessKeyId: process.env.S3_ACCESS_KEY_ID,
        secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: process.env.S3_BUCKET_REGION
};

const s3Client = new S3Client(client);

export async function uploadImageToS3(fileName, fileData) {
    try {
        let params = {
            Bucket: "resumes123",
            Key: fileName,
            Body: await fileData.arrayBuffer()
        };
        const command = new PutObjectCommand(params);
        await s3Client.send(command);

        delete params.Body;
        const getCommand = new GetObjectCommand(params);
        const signedUrl = await getSignedUrl(s3Client, getCommand, { expiresIn: 3600 });

        return signedUrl;
    } catch (err) {
        console.error('error occurred while uploading', err)
        throw new Error(err);
    }
}
