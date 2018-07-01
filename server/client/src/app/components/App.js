import React, { Component } from "react";
import Dashboard from "../../dashboard/components/Dashboard";

const Header = () => {
	return (
		<header className="section">
			Eventmon - Monitor your events
		</header>
	);
}

const Footer = () => {
	return (
		<footer className="section">
			Footer
		</footer>
	);
}

const EventsList = () => {
	return (
		<div className="events-list">
			<input type="text" placeholder="Type something" />
			<ul>
				<li>Event 1</li>
				<li>Event 2</li>
				<li>Event 3</li>
				<li>Event 4</li>
				<li>Event 4</li>
				<li>Event 5</li>
			</ul>
		</div>
	);
}

class App extends Component {

	render() {
		return (
			<div className="container">
				<Header />
				<Dashboard />
				<section className="card">
					<EventsList />
				</section>
				<Footer />
			</div>
		);
	}
}

export default App;