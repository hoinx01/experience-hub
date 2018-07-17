import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
import {Right1} from './Right1';
import {Right2} from './Right2';
import {Home} from './Home';
import './vertical-menu.css';
import {connect} from 'react-redux';
import {set} from 'dot-prop-immutable';
import {VerticalMenuItem} from './VerticalMenuItem';


const menuTree = {
    type:'vertical',
    items:[
        {
            level:1,
            label:'Khách hàng',
            subItems:[
                {
                    level:2,
                    label:'Thêm khách hàng',
                    link:'/admin/customers/create'
                },
                {
                    level:2,
                    label:'test sublist',
                    subItems:[
                        {
                            level:3,
                            label: '1',
                            link: '/1'
                        },
                        {
                            level:3,
                            label: '2',
                            link: '/1'
                        },
                        {
                            level:3,
                            label: '2',
                            link: '/1'
                        }
                    ]
                },
                {
                    level:2,
                    label:'Danh sách khách hàng',
                    link:'/admin/customers'
                }
                
            ]
        },
        {
            level: 1,
            label:'Đơn hàng',
            subItems:[
                {
                    level: 2,
                    label:'Bán hàng',
                    link:'/admin/orders/pos'
                },
                {
                    level: 2,
                    label:'Đặt hàng',
                    link:'/admin/orders/create'
                },
                {
                    level: 2,
                    label:'Danh sách đơn hàng',
                    link:'/admin/orders'
                }
            ]
        }
    ]
}


class VerticalMenu extends React.Component{
    render(){
        let listItemStyle = {
            listStyleType:'none', 
            position:'absolute', 
            width:this.props.style.width
        }
        return (
            <div style={{position:'relative', backgroundColor:'yellow', flexGrow:1}}>
                <ul style={listItemStyle}>
                    {
                        menuTree.items.map(function(item, index){
                            let itemDetail = set(item,'style', {width:listItemStyle.width});
                            return <VerticalMenuItem detail={itemDetail} key={index} index={index}/>
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        style:{
            width: state.components.left.style.width - state.components.left.resizeBar.style.width
        }
        
    }
}

VerticalMenu = connect(mapStateToProps, null)(VerticalMenu);

export {VerticalMenu};