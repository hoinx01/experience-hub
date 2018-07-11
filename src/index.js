import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import {reducers} from './redux/reducers';
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';

const initState = {
    components:{
        left:{
            style:{
                width:200,
                backgroundColor:'red',
                height:'100vh',
                display:'flex',
                flexDirection:'row'
            },
            resizeBar:{
                dragging:false,
                style:{
                    width:10,
                    backgroundColor:'white'
                }
            },
            leftMain:{
                style:{
                    flexGrow:1,
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'space-between'
                }
            }
        },
        right:{
            style:{
                backgroundColor:'green',
                flexGrow:1
            }
        }
    },
    style:{
        height:'100vh',
        display:'flex',
        flexDirection:'row'
    },
    currentLocation:window.location
}
let store = createStore(reducers, initState);
// window.store = createStore(reducers, initState);
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
