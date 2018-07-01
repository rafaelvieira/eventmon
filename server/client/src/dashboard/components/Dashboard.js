import React, { Component } from "react";
import EventsByCategoryChart from "./EventsByCategoryChart";
import CriticalEventsByTimeChart from "./CriticalEventsByTimeChart";
import Collapse from "../../common/components/Collapse";

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { showStats: true };
        this.onStatsButtonClicked = this.onStatsButtonClicked.bind(this);
    }
    
    onStatsButtonClicked() {
        this.setState({ showStats: !this.state.showStats });
    }

	render() {
		return (
			<section className="card">
				<div className="card-content">
					<div className="card-title">
						<button className="btn-flat gray" style={{ paddingLeft: "0"}}
							onClick={this.onStatsButtonClicked}>
							<i className="material-icons">assessment</i>
						</button>Statistics
					</div>
                    <Collapse isOpened={this.state.showStats}>
                        <div id="stats_charts" className="row">
                            <div className="chart-left col m12 l12 xl5">
                                <EventsByCategoryChart />
                            </div>
                            <div className="chart-right col m12 l12 xl6">
                                <CriticalEventsByTimeChart />
                            </div>
                        </div>
                    </Collapse>
				</div>
				{/*
				<div className="card-action">	
				</div>*/}
			</section>
		);
	}
}

export default Dashboard;