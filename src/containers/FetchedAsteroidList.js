import AsteroidList from '../components/AsteroidList';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        asteroids: state.asteroids
    }
};

const FetchedAsteroidList = connect(
    mapStateToProps
)(AsteroidList);

export default FetchedAsteroidList;