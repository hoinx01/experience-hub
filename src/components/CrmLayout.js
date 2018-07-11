import React from 'react';
import {Left} from './Left';
import {Right} from './Right';
import { connect } from 'react-redux';
import {doMouseUp, resizingLeft} from '../redux/actions'
// import {CtnLeft} from './containers/CtnLeft';
import {Link, BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import {Right1} from './Right1';
import {Right2} from './Right2';
import {Home} from './Home';


class CrmLayout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div style={this.props.style} onMouseUp={this.props.onMouseUp} onMouseMove={(event) => {this.props.onMouseMove(event)}}>
                    <Left/>
                    {/* <CtnLeft/> */}
                    <Right>
                        <Route path="/right2" component={Right2} />
                        <Route exact path="/" component={Home} />
                        <Route path="/right1" component={Right1} />
                        
                    </Right>
                </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state;
}
const mapDispatchToProps = dispatch =>{
    return {
        onMouseUp: () => {dispatch(doMouseUp())},
        onMouseMove: (event) => {
            event.preventDefault();
            dispatch(resizingLeft(event.clientX))
        }
    }
};
CrmLayout = connect(mapStateToProps, mapDispatchToProps)(CrmLayout);

export {CrmLayout};