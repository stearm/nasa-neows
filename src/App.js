import React, {Component} from "react";
import FetchedAsteroidList from "./containers/FetchedAsteroidList";
import TriggerFetchDatepickerWrapper from "./containers/TriggerFetchDatepickerWrapper";

class App extends Component {

    render() {
        return (
            <div>
                <div className="main-container">
                    <div className="row center-md title">
                        <h1>NeoWs (Near Earth Object Web Service) client</h1>
                    </div>
                    <div id="stars"></div>
                    <TriggerFetchDatepickerWrapper/>
                    <FetchedAsteroidList/>
                </div>
            </div>
        );
    }
}

export default App;
