import React from "react";
import "./Navbar.scss";

const Navbar = () => {
	return (
		<div className="container">
			<div className="left">
				<div className="hamburger">
					<div className="hamb"></div>
				</div>
				<h3>ErayTube</h3>
			</div>
			<div className="middle">
				<input type="text" placeholder="Ara" />
				<button className="src">🔍</button>
				<button className="mic">🎙</button>
			</div>
			<div className="right">
				<ul>
					<li>
						<a href="#">📷</a>
					</li>
					<li>
						<a href="#">💠</a>
					</li>
					<li>
						<a href="#">🔔</a>
					</li>
					<li>
						<a className="profile" href="#">
							🔵
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
