import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const {
		preview,
		logo,
		title,
		description,
		linkText,
		link,
		privateRepository,
	} = props;

	return (
		<React.Fragment>
			{privateRepository ? (
				<div className="project">
					<div className="project-container">
						<div className="project-preview">
							<img src={preview} alt="project" />
						</div>
						<div className="project-heading">
							<div className="project-logo">
								<img src={logo} alt="logo" />
							</div>
							<div className="project-title">{title}</div>
						</div>
						<div className="project-description">{description}</div>
						<div className="project-link-private">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faGithub} />
							</div>
							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</div>
			) : (
				<div className="project">
					<Link to={link} target="blank">
						<div className="project-container">
							<div className="project-preview">
								<img src={preview} alt="project" />
							</div>
							<div className="project-heading">
								<div className="project-logo">
									<img src={logo} alt="logo" />
								</div>
								<div className="project-title">{title}</div>
							</div>
							<div className="project-description">
								{description}
							</div>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faGithub} />
								</div>

								<div className="project-link-text">
									{linkText}
								</div>
							</div>
						</div>
					</Link>
				</div>
			)}
		</React.Fragment>
	);
};

export default Project;
