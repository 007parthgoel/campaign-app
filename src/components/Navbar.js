import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import * as actionTypes from '../store/actionTypes';
import {setNavigation} from '../store/actions/dataActions';

const Navbar = () => {
  const { campaignTypes } = useSelector((state) => ({
    campaignTypes: state.data.campaignTypes,
  }));

  const dispatch = useDispatch();

  const [selectedNav, setSelectedNav] = useState(campaignTypes[0]);

  useEffect(()=>{
    dispatch(setNavigation(selectedNav))
  },[selectedNav,dispatch]);

  const navigationSelectHandler=(val)=>{
    setSelectedNav(val);
    // console.log(val);
  }
  
  return (
    <div className="navbar">
      <h1>Manage Campaign</h1>
      <nav>
        {campaignTypes.map((campaign_type) => {
          return (
            <h3
              key={campaign_type}
              className={`${selectedNav === campaign_type && "selectednav"}`}
              onClick={()=>navigationSelectHandler(campaign_type)}
            >
              {campaign_type} Campaign
            </h3>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
