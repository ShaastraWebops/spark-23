import Structure from "./Components/structure";
import Schedule from "./Components/schedule";
import Register from "./Components/register";
import Contact from "./Components/contact";
import './App.css';

function App() {
  return (
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

  );
}

export default App;
