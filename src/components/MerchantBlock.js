import React from 'react';
import {connect} from 'react-redux';

class MerchantBlock extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let style = this.props.style;
        let imageWidth = this.props.style.width/3;
        if(imageWidth < 20)
            style.display = 'none';
        return (
            <div style={style}>
                <img src='https://hinhanhdephd.com/wp-content/uploads/2017/06/anh-girl-xinh-de-thuong-nhat-nam-2017-10.jpg' width={imageWidth} height={imageWidth} alt='merchant-avatar'/>
                <span>Nguyễn Xuân Hồi</span>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        style:{
            width:state.components.left.style.width - state.components.left.resizeBar.style.width
            
        }
    }
}

MerchantBlock = connect(mapStateToProps)(MerchantBlock);

export {MerchantBlock};