import React from 'react'
import {LeftMain} from './LeftMain';
import {LeftResizeBar} from './LeftResizeBar';
import {connect} from 'react-redux';

class Left extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let style = {};
        
        Object.assign(style, this.props.style);
        console.log(style);
        return (
            <div id='left' style={style}>
                <LeftMain/>
                <LeftResizeBar/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state.components.left;
}

Left = connect(mapStateToProps, null)(Left);

export {Left};