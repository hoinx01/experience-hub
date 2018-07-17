import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {startResizeLeft} from '../redux/actions';

class LeftResizeBar extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
    }
    render(){
        let style = Object.assign({}, this.props.style);
        return (
            <div style={style} onMouseDown={(event) => {this.props.start()}}>

            </div>
        );
    }
}

LeftResizeBar.propsTypes = {
    style: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return state.components.left.resizeBar;
}
const mapDispatchToProps = dispatch => {
    return {
        start: () => {
            // event.preventDefault();
            dispatch(startResizeLeft())
        }
    }
}

LeftResizeBar = connect(
    mapStateToProps, 
    mapDispatchToProps
)(LeftResizeBar);

export {LeftResizeBar};