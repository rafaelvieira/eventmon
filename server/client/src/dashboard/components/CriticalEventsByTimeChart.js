import React from "react";
import { LineChart, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Line } from "recharts";

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
		<div>
			Critical events by time
			<LineChart width={450} height={300} data={mockData}
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

export default CriticalEventsByTimeChart;