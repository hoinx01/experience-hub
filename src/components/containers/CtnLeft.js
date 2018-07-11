import React from 'react';
import {connect} from 'react-redux';
import {Left} from '../Left';

const mapStateToProps = (state) => {
    console.log(state.components.left)
    return state.components.left;
}
const CtnLeft = connect(mapStateToProps,null)(Left);

export {CtnLeft};