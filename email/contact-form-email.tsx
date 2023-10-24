import React from "react";
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Container,
	Preview,
	Section,
	Text,
	ContainerProps,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";
import { sendEmail } from "@/actions/sendEmails";

type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};

export default function ContactFormEmail({
	message,
	senderEmail,
}: ContactFormEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New Message from your Portfolio</Preview>
			<Tailwind>
				<Body>
					<Container>
						<Section>
							<Heading>
								You receeived thhe following meessage from the portfolio contact
								form
							</Heading>
							<Text>{message}</Text>
							<Hr />
							<Text>The sender`&apos;`s email is {senderEmail}</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
}
