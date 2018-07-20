import React from 'react';
import {connect} from 'react-redux';
import {ListVerticalMenuItem} from './VerticalMenuItem';


const menuTree = {
    type:'vertical',
    listItem:{
        level: 1,
        items:[
            {
                label:'Khách hàng',
                listItem:{
                    level: 2,
                    items:[
                        {
                            label:'Thêm khách hàng',
                            link:'/admin/customers/create'
                        },
                        {
                            label:'test sublist',
                            listItem:{
                                level: 3,
                                items:[
                                    {
                                        label: '1',
                                        link: '/1'
                                    },
                                    {
                                        label: '2',
                                        link: '/1'
                                    },
                                    {
                                        label: '2',
                                        link: '/1'
                                    }
                                ]
                            }
                        },
                        {
                            label:'Danh sách khách hàng',
                            link:'/admin/customers'
                        }
                    ]
                }
            },
            {
                label: 'Đơn hàng',
                listItem:{
                    level: 2,
                    items:[
                        {
                            label: 'Create',
                            link: '/admin/orders/create'
                        },
                        {
                            label: 'List',
                            link: '/admin/orders/index'
                        }
                    ]
                }
            }
        ]
    }
}


class VerticalMenu extends React.Component{
    render(){
        let listItemStyle = {
            width: this.props.style.width
        }
        return (
            <div style={{position:'relative', backgroundColor:'yellow', flexGrow:1}}>
                <ListVerticalMenuItem 
                    style={listItemStyle}
                    level={1}
                    items={menuTree.listItem.items}
                >
                </ListVerticalMenuItem>
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