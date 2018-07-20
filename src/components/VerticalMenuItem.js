import React from 'react';
import {Link} from 'react-router-dom';
import {get,set} from 'dot-prop-immutable';

class VerticalMenuItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hovered:false
        };
    }
    hovered(){
        let state = set(this.state,'hovered', true);
        this.setState(state);
    }
    unhovered(){
        let state = set(this.state,'hovered', false);
        this.setState(state);
    }
    render(){
        let style = {
            width: this.props.style.width,
            backgroundColor:'orange'
        }
        if(this.state.hovered)
            style.backgroundColor = 'white';
        
        if(this.props.data.listItem){
            let listItemStyle = {
                width:this.props.style.width,
                display:'none'
            }
            
            if(this.state.hovered)
                listItemStyle.display = 'block';

            return (
                <li style={style} onMouseEnter={this.hovered.bind(this)} onMouseLeave={this.unhovered.bind(this)}>
                    <Link to='#'>{this.props.data.label}</Link>
                    <ListVerticalMenuItem 
                        style={listItemStyle} 
                        level={this.props.data.listItem.level} 
                        items={this.props.data.listItem.items}
                    >
                    </ListVerticalMenuItem>
                </li>
            );
        }
        else{
            return (
                <li style={style} onMouseEnter={this.hovered.bind(this)} onMouseLeave={this.unhovered.bind(this)}>
                    <Link to={this.props.data.link}>{this.props.data.label}</Link>
                </li>
            );
        }
    }
}


class ListVerticalMenuItem extends React.Component{
    render(){
        let style = {
            width: this.props.style.width,
            listStyleType:'none',
            display : 'block',
            position : 'relative',
            paddingLeft: 0
        }
        if(this.props.level > 1){
            style.display = this.props.style.display;
            style.position = 'absolute';
            style.top = -20;
            style.left = this.props.style.width
        }
        return (
            <ul style={style}>
                {
                    this.props.items.map(function(item, index){
                        let itemStyle = {width: style.width};
                        return (
                            <VerticalMenuItem
                                key={index}
                                data = {item}
                                style = {itemStyle}
                            >
                            </VerticalMenuItem>
                        );    
                    })
                }
            </ul>
        );
    }
}

export {ListVerticalMenuItem};

