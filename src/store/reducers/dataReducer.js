import { CampaignTypes, Campaigns } from "./data";
import * as actionTypes from '../actionTypes';

const initialState = {
  allCampaigns: [...Campaigns],
  campaignTypes: [...CampaignTypes],
  campaign_type_selected:CampaignTypes[0],
  campaign_selected:0,
};

const setNavigation=(state,action)=>{
  console.log(action);
  console.log(state.allCampaigns.filter(campaign=>{
    return campaign.campaign_type===action.payload
  }))
  return {...state,campaign_type_selected: action.payload};
}
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NAVIGATION: return setNavigation(state,action);
    default:
      return state;
  }
};

export default reducer;
