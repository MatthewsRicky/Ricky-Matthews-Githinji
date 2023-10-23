"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown) => {
	if (!value || typeof value !== "string") {
		return;
		false;
	}
	return true;
};

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get("senderEmail");
	const message = formData.get("senderMessage");

	resend.emails.send({
		from: "onboarding@resend.dev",
		to: "matthewsrickypro@gmail.com",
		subject: "Message from contact form",
		reply_to: sendEmail,
		text: message,
	});
};
