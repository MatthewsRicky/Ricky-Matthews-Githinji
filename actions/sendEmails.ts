"use server";

import { Resend } from "resend";

import { validateString, getErrorMeessage } from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

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

	try {
		await resend.emails.send({
			from: "Contact from <onboarding@resend.dev>",
			to: "matthewsrickypro@gmail.com",
			subject: "Message from contact form",
			reply_to: senderEmail as string,
			text: message as string,
		});
	} catch (error: unknown) {
		return {
			error: getErrorMeessage(error),
		};
	}
};
