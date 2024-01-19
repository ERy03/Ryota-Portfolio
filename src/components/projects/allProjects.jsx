import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = (props) => {
	const { isHomePage } = props;
	const projects = isHomePage ? INFO.projects.slice(0, 4) : INFO.projects;
	return (
		<div className="all-projects-container">
			{projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
						preview={project.preview}
						privateRepository={project.privateRepository}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
