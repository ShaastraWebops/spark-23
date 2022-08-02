import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './Components/About';
import Rules from "./Components/Rules"
import Home from './Components/Home';
import Structure from "./Components/structure";
import Schedule from "./Components/schedule";
import Register from "./Components/register";
import Contact from "./Components/contact";


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
