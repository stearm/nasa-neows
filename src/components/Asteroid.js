import React, {Component} from 'react';

export default class Asteroid extends Component {

    render() {

        const {name, nasa_jpl_url, estimated_diameter, is_potentially_hazardous_asteroid} = this.props;

        return (
                <div className="row asteroid">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">{name}</div>
                    <div className="col-md-2">
                        {estimated_diameter.meters.estimated_diameter_min}
                    </div>
                    <div className="col-md-2">
                        {estimated_diameter.meters.estimated_diameter_max}
                    </div>
                    <div className="col-md-1">
                        {
                            is_potentially_hazardous_asteroid ? "Yes" : "No"
                        }
                    </div>
                    <div className="col-md-1">
                        <a href={nasa_jpl_url} target="_blank">Go!</a>
                    </div>
                </div>
        )
    }

}

