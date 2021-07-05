import * as actionTypes from '../actionTypes';

export const setNavigation=(nav_type)=>dispatch=>{
    // console.log(index);
    dispatch({type:actionTypes.SET_NAVIGATION, payload: nav_type})
}