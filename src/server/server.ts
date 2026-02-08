import "./config.js";
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import type { EmailRequest } from "../common/dataStructures/email.js";

const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client')));

app.post("/api/email", async (req, res) => {
    const { name, email, message }: EmailRequest = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: `Contact Form - ${name} <${email}>`,
        text: message,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send({ success: true, message: "Message sent successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: "Error sending message" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
