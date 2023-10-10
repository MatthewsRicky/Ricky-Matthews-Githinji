"use client";

import React from "react";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
	const { ref } = useSectionInView("Experience", 0.5);
	return (
		<section
			ref={ref}
			id="experience"
		>
			<SectionHeading>My Experience</SectionHeading>;
			<VerticalTimeline>
				{experiencesData.map((item, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							contentStyle={{
								background: "#f3f4f6",
								boxShadow: "none",
								border: "1px solid rbga(0, 0, 0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
						>
							<h3>{item.title}</h3>
							<p>{item.location}</p>
							<p>{item.description}</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
