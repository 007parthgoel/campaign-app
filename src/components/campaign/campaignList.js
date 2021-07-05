import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import Campaign from "./campaign";
// import {CampaignTypes, Campaigns} from '../../context/data';

function CampaignList() {

  const {allCampaigns,campaign_type_selected}= useSelector(state=>({
    allCampaigns: state.data.allCampaigns,
    campaign_type_selected: state.data.campaign_type_selected,
  }))

  const filtered_campaign= useMemo(()=>{
    return allCampaigns.filter(campaign=>{
      return campaign.campaign_type===campaign_type_selected;
    })
  },[allCampaigns,campaign_type_selected])

  return (
    <div className="campaign_table">
      <div className="campaign_table_header">
        <h4>Date</h4>
        <h4>Campaign</h4>
        <h4>View</h4>
        <h4>Action</h4>
      </div>
      <div className="campaign_table_content">
        {filtered_campaign.map((campaign,index)=>{
          console.log(campaign)
          return <Campaign key={index} {...campaign}/>
        })}
      </div>
    </div>
  );
}

export default CampaignList;
