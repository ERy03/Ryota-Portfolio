import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./lewagon.png"
								alt="le wagon"
								className="work-image"
							/>
							<div className="work-title">Le Wagon</div>
							<div className="work-subtitle">
								Teacher Assistant
							</div>
							<div className="work-duration">
								Feb 2024 - Jun 2024
							</div>
						</div>

						<div className="work">
							<img
								src="./dreamly-logo.png"
								alt="dreamly"
								className="work-image"
							/>
							<div className="work-title">Dreamly</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">
								May 2022 - Jun 2023
							</div>
						</div>

						<div className="work">
							<img
								src="./earth-technology-logo.png"
								alt="earth technology"
								className="work-image"
							/>
							<div className="work-title">Earth Technology</div>
							<div className="work-subtitle">
								System Integration
							</div>
							<div className="work-duration">
								Apr 2021 - Sep 2021
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
