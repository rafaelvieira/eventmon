import React, { Component } from "react";
import { BarChart, Bar, LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Line } from "recharts";

const Header = () => {
	return (
		<header class="section">
			Eventmon - Monitor your events
		</header>
	);
}

const Footer = () => {
	return (
		<footer class="section">
			Footer
		</footer>
	);
}

const EventsByCategoryChart = () => {
	const mockData = [
		{name: 'Fatal', systemA: 4000, systemB: 2400},
		{name: 'Critical', systemA: 3000, systemB: 1398},
		{name: 'Important', systemA: 2000, systemB: 9800},
		{name: 'Info', systemA: 2780, systemB: 3908},
	];

	return (
		<div className="chart-left">
			Events by category
			<BarChart width={400} height={300} data={mockData}
					margin={{top: 5, right: 30, left: 20, bottom: 5}}>
				<CartesianGrid strokeDasharray="3 3"/>
				<XAxis dataKey="name"/>
				<YAxis/>
				<Tooltip/>
				<Legend />
				<Bar dataKey="systemB" fill="#8884d8" />
				<Bar dataKey="systemA" fill="#82ca9d" />
			</BarChart>
		</div>
	);
}

const CriticalEventsByTimeChart = () => {
	
	const mockData = [
		{name: 'Jan 2018', systemA: 4000, systemB: 2400},
		{name: 'Feb 2018', systemA: 3000, systemB: 1398},
		{name: 'Mar 2018', systemA: 2000, systemB: 9800},
		{name: 'Apr 2018', systemA: 2780, systemB: 3908},
		{name: 'Mai 2018', systemA: 1890, systemB: 4800},
		{name: 'Jun 2018', systemA: 2390, systemB: 3800},
	];

	return (
		<div className="chart-right">
			Critical events by time
			<LineChart width={550} height={300} data={mockData}
					margin={{top: 5, right: 30, left: 20, bottom: 5}}>
				<XAxis dataKey="name"/>
				<YAxis/>
				<CartesianGrid strokeDasharray="3 3"/>
				<Tooltip/>
				<Legend />
				<Line type="monotone" dataKey="systemB" stroke="#8884d8" activeDot={{r: 8}}/>
				<Line type="monotone" dataKey="systemA" stroke="#82ca9d" />
			</LineChart>
		</div>
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
	componentDidMount() {
		// this.props.fetchEventsBy({
		// 	days: 30
		// });
	}

	render() {
		return (
			<div className="container">
				<Header />
				<div class="divider"></div>
				<section class="section row">
					<div class="col s5">
						<EventsByCategoryChart />
					</div>
					<div class="col s7">
						<CriticalEventsByTimeChart />
					</div>
				</section>
				<div class="divider"></div>
				<section class="section">
					<EventsList />
				</section>
				<Footer />
			</div>
		);
	}
}

export default App;