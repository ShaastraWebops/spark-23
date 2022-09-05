import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './Components/About.js';
import Rules from "./Components/Rules.js"
import Home from './Components/Home.js';
import Structure from "./Components/structure.js";
import Schedule from "./Components/schedule.js";
import Register from "./Components/register.js";
import Contact from "./Components/contact.js";


function App() {
  return (
    <div className="App">
      <div>
				<header>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Spark 2022 | Shaastra 2023</title>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
					/>
					<link rel="stylesheet" href="/static/styles/styles.css" />
					<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" />
				</header>
				<Home />
				<About />
				<Rules />
				<Structure />
				<Schedule />
				{/* <Register /> */}
				<Contact />
	</div>

    </div>
  );
}

export default App;
