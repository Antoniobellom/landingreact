import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";
//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />

				<div className="row text-center">
					<div className="col-lg-3 col-md-6 mb-4">
						<Cards />
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<Cards />
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<Cards />
					</div>
					<div className="col-lg-3 col-md-6 mb-4">
						<Cards />
					</div>
				</div>
			</div>
		</div>
	);
}
