import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import LeftSide from "./LeftSide";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Navbar />
			<LeftSide />
		</div>
	);
}

export default App;
