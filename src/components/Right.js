import React from 'react'
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {get} from 'dot-prop-immutable';
import {Link, BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import {Right1} from './Right1';
import {CreateCustomer} from './CreateCustomer';
import {Home} from './Home';
import {locationChange} from '../redux/actions';


class Right extends React.Component{
    constructor(props){
        super(props);
        
        this.props.history.listen((location, action) => {
            console.log("on route change");
            console.log(location);
            console.log(action)
            this.props.locationChange(location.pathname);
          });
    }

    render(){
        let style = {};
        console.log('render right')
        console.log(this.props)
        Object.assign(style, this.props.style);
        return (
            
            <div style={style} id='right'>
                {this.props.children}
                
            </div>
            
        );
    }
}

Right.propTypes = {
    style:PropTypes.object.isRequired
}

function getPropsFromState(state){
    return {
        style: state.components.right.style
    }
}
const mapStateToProps = (state) => {
    console.log('map state to props right');
    let right = get(state, 'components.right');
    right.location = state.currentLocation;
    console.log(state.currentLocation);
    return right;
}
const mapDispatchToProps = (dispatch) => {
    return {
        locationChange: (location) => {
            dispatch(locationChange(location));
        }
    }
}
Right = withRouter(connect(mapStateToProps, mapDispatchToProps)(Right));

export {Right};