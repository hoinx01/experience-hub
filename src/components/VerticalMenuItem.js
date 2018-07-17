import React from 'react';
import {Link} from 'react-router-dom';
import {get} from 'dot-prop-immutable';

class VerticalMenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hovered:false
        };
    }
    hovered(){
        let state = get(this.state);
        state.hovered = true;
        this.setState(state);
    }
    unhovered(){
        let state = get(this.state);
        state.hovered = false;
        this.setState(state);
    }
    render(){
        let style = {
            backgroundColor:'orange'
        }
        if(this.state.hovered)
            style.backgroundColor = 'white';
        
        if(this.props.detail.subItems){
            console.log(this.props)
            let listItemStyle = {
                listStyleType:'none', 
                position:'absolute', 
                width:this.props.detail.style.width,
                top:-20,
                display: 'none'
            }
            
            if(this.state.hovered)
                listItemStyle.display = 'block';

            return (
                <li style={style} onMouseEnter={this.hovered.bind(this)} onMouseLeave={this.unhovered.bind(this)}>
                    <Link to='#'>{this.props.detail.label}</Link>
                    <ul className='menu-item-wrapper' style={listItemStyle}>
                        {
                            this.props.detail.subItems.map(function(subItem, subIndex){
                                return <VerticalMenuItem detail={subItem} key={subIndex} index={subIndex} style={{position:'relative'}}/>
                            })
                        }
                    </ul>
                </li>
            );
        }
        else{
            return (
                <li style={style} onMouseEnter={this.hovered.bind(this)} onMouseLeave={this.unhovered.bind(this)}>
                    <Link to={this.props.detail.link}>{this.props.detail.label}</Link>
                </li>
            );
        }
    }
}

export {VerticalMenuItem};

