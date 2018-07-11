import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import {Right1} from './Right1';
import {Right2} from './Right2';
import {Home} from './Home';

class VerticalMenu extends React.Component{
    render(){
        return (
            <div style={{flexGrow:1, backgroundColor:'yellow'}}>
                    <ul>
                    
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/right1">Right1</Link>
                        </li>
                        <li>
                        <Link to="/right2">Right2</Link>
                        </li>
                    </ul>
                    {this.props.children}
            </div>
        );
    }
}

export {VerticalMenu};