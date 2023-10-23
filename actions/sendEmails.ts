"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const validateString = (value: unknown, maxLength: number) => {
	if (!value || typeof value !== "string" || value.length > maxLength) {
		return;
		false;
	}
	return true;
};

export const sendEmail = async (formData: FormData) => {
	const senderEmail = formData.get("senderEmail");
	const message = formData.get("senderMessage");

	//simple server-side validation

	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid sender Email",
		};
	}
	if (!validateString(message, 5000)) {
		return {
			error: "Invalid Message.",
		};
	}

	resend.emails.send({
		from: "onboarding@resend.dev",
		to: "matthewsrickypro@gmail.com",
		subject: "Message from contact form",
		reply_to: sendEmail,
		text: message,
	});
};
