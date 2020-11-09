import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
    fetchFishSpecies,
    fetchRivers,
    fetchRiverSections,
} from '../redux/actions';
import DrawerNav from '../components/DrawerNav';
import Home from '../Home';
import AddCatch from '../AddCatch'
import Axios from 'axios';


class Main extends React.Component {


    fetchFish = () => {
        console.log('fetching fish')
        Axios.get('http://localhost:5000/fish')
        .then( (response) => {
            console.log(response);

        }).catch((error) => console.log(error))
        
    }

    componentDidMount = () => {
        
    this.props.fetchFishSpecies();
    this.props.fetchRivers();
    this.props.fetchRiverSections();
    this.fetchFish();
    // console.log(this.props.state);
    }

    render = () => {
        return(
            <div>
                {/* <DrawerNav/> */}
                <React.Fragment>
                    
                    <Switch>
                <Route path='/home' component={Home} />
                <Route path='/add' component={AddCatch} />
            
                <Redirect to='/home' />
                </Switch>
                </React.Fragment>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
    species : state.species,
    rivers: state.rivers,
    riverSections: state.riverSections,
    catches: state.catches,
    test : state.catchReducer
    };
}

const mapDispatchToProps = {
    fetchFishSpecies: () => fetchFishSpecies(),
    fetchRivers: () => fetchRivers(),
    fetchRiverSections: () => fetchRiverSections(),

};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))