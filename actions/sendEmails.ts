"use server";

import React from "react";

import { Resend } from "resend";

import { validateString, getErrorMeessage } from "@/lib/utils";

import ContactFormEmail from "@/email/contact-form-email";

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

	let data;
	try {
		data = await resend.emails.send({
			from: "Contact from <onboarding@resend.dev>",
			to: "matthewsrickypro@gmail.com",
			subject: "Message from portfolio contact form",
			reply_to: senderEmail as string,
			react: React.createElement(ContactFormEmail, {
				message: message as string,
				senderEmail: senderEmail as string,
			}),
		});
	} catch (error: unknown) {
		return {
			error: getErrorMeessage(error),
		};
	}
	return {
		data,
	};
};
