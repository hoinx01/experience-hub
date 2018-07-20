import React from 'react';
import {connect} from 'react-redux';
import {clickLeftMain} from '../redux/actions';
import {get} from 'dot-prop-immutable';
import {MerchantBlock} from './MerchantBlock';
import {UserBlock} from './UserBlock';
import {VerticalMenu} from './VerticalMenu';
import {Right1} from './Right1';
import {CreateCustomer} from './CreateCustomer';
import {Home} from './Home';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';

class LeftMain extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        let style = Object.assign({}, this.props.style);
        return (
            <div style = {style}>
                <MerchantBlock/>
                <VerticalMenu>                   
                </VerticalMenu>
                <UserBlock/>
            </div>
        );
        
    }
}

const mapStateToProps = state => {
    // return Object.assign({}, state.components.left.leftMain);
    return get(state, 'components.left.leftMain')
}
const mapDispatchToProps = dispatch => {
    return {
        
    }
}
LeftMain = connect(mapStateToProps, mapDispatchToProps)(LeftMain);

export {LeftMain};