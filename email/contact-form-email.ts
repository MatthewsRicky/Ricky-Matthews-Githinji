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

type ContactFormEmailProps = {
	message: string;
};

export default function ContactFormEmail({ message }: ContactFormEmailProps) {
	return;

	<Html>
		<Head />
		<Preview> New Message from your Portfolio</Preview>
		<Tailwind>
			<Body>
				<Container>
					<Section></Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>;
}
