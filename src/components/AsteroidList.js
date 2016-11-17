import React, {Component} from 'react';
import Asteroid from './Asteroid';

export default class AsteroidList extends Component {

    render() {

        const {asteroids} = this.props;

        return (
            <div className="container asteroid-list">
                <div className="row header">
                    <div className="col-md-2"></div>
                    <div className="col-md-2">Name</div>
                    <div className="col-md-2">Estimated diameter m (min)</div>
                    <div className="col-md-2">Estimated diameter m (max)</div>
                    <div className="col-md-2">Hazard</div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-12 content">
                        {
                            asteroids && asteroids.length ?
                                asteroids.map(asteroid => <Asteroid
                                        id={asteroid.id}
                                        {...asteroid}
                                    />
                                ) : <div className="row center-md spinner">No asteroids</div>

                        }
                    </div>
                </div>
            </div>
        )

    }
}