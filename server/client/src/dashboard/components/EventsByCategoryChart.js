import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";


const EventsByCategoryChart = () => {
	const mockData = [
		{name: 'Fatal', systemA: 4000, systemB: 2400},
		{name: 'Critical', systemA: 3000, systemB: 1398},
		{name: 'Important', systemA: 2000, systemB: 9800},
		{name: 'Info', systemA: 2780, systemB: 3908},
	];

	return (
		<div>
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

export default EventsByCategoryChart;