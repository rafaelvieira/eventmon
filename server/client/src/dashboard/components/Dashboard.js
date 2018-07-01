import React, { Component } from "react";
import EventsByCategoryChart from "./EventsByCategoryChart";
import CriticalEventsByTimeChart from "./CriticalEventsByTimeChart";

class Dashboard extends Component {

	componentDidMount() {

		// this.props.fetchEventsBy({
		// 	days: 30
		// });
	}

	onStatsButtonClicked() {
		document.getElementById("#stats_charts").style = "display:none";
	}

	render() {
		return (
			<section className="card">
				<div className="card-content">
					<div className="card-title">
						<button className="btn-flat gray" style={{ "padding-left": "0"}}
							onClick={this.onStatsButtonClicked}>
							<i className="material-icons">assessment</i>
						</button>Statistics
					</div>
					<div id="stats_charts" className="row">
						<div className="chart-left col m12 l12 xl5">
							<EventsByCategoryChart />
						</div>
						<div className="chart-right col m12 l12 xl6">
							<CriticalEventsByTimeChart />
						</div>
					</div>
				</div>
				{/*
				<div className="card-action">	
				</div>*/}
			</section>
		);
	}
}

export default Dashboard;