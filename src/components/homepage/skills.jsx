import React from "react";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import INFO from "../../data/user";

import "./styles/skills.css";

const Skills = () => {
	return (
		<div className="skills">
			<Card
				icon={faLaptopCode}
				title="Skills"
				body={
					<div className="skills-body">
						<div className="skills-logo">
							{INFO.skills.map((skill) => (
								<img
									src={skill.image}
									alt={skill.tech}
									key={skill.tech}
								/>
							))}
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Skills;
