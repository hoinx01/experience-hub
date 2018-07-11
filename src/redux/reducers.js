import {set} from 'dot-prop-immutable';

export const reducers = (state, action) => {
    switch (action.type){
        case("start_resize_left"):{
            if(!state.components.left.resizeBar.dragging){
                // let newState = Object.assign({}, state);
                // newState.components.left.resizeBar.dragging = true;
                // return newState;
                let newState = set(state, 'components.left.resizeBar.dragging', true);
                return newState;
            }
            return state;
        }

            
        case("do_mouse_up"):{
            if(state.components.left.resizeBar.dragging){
                // let newState = Object.assign({}, state);
                // newState.components.left.resizeBar.dragging = false;
                // return newState;

                let newState = set(state, 'components.left.resizeBar.dragging', false);
                return newState;
            }
            return state;
        }
            
        case("resizing_left"):{
            if(state.components.left.resizeBar.dragging){
                // let newState = {};
                // Object.assign(newState, state);
                // newState.components.left.style.width = action.payload.width;
                // return newState;
                console.log(action.payload.width)
                let newState = set(state, 'components.left.style.width', action.payload.width);
                return newState;
            }
            return state;
        }
        case('location_change'):{
            console.log(action.payload.location);
            let newState = set(state,'currentLocation', action.payload.location);
            return newState;
        }
        default:
            return state;
    }
}