import Structure from "./components/structure";
import Schedule from "./components/schedule";
import Register from "./components/register";
import Contact from "./components/contact";
import './App.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';
import About from './components/About';
import Rules from './components/Rules';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
		<Home />
      <About />
      <Rules />
		<div>
				<header>
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<title>Spark 2019 | Shaastra 2020</title>
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
					/>
					<link rel="stylesheet" href="/static/styles/styles.css" />
					<script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" />
				</header>
				<Structure />
				<Schedule />
				<Register />
				<Contact />
		</div>
	</div>

  );
}

export default App;
