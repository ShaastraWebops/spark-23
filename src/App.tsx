import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from '../src/Components/About';
import Rules from "../src/Components/Rules"
import Home from '../src/Components/Home';
import Structure from "../src/Components/structure";
import Schedule from "../src/Components/schedule";
import Register from "../src/Components/register";
import Contact from "../src/Components/contact";


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
				<Register />
				<Contact />
	</div>

    </div>
  );
}

export default App;
