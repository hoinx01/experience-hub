export const startResizeLeft = (event)=> {
    return {
        type: "start_resize_left"
    }
}
export const doMouseUp = () => {
    return {
        type: "do_mouse_up"
    }
}
export const resizingLeft = (clientX) => {
    
    return {
        type: "resizing_left",
        payload:{width:clientX}
    }
}
export const locationChange = (location) =>  {
    return {
        type: 'location_change',
        payload:{location:location}
    }
}