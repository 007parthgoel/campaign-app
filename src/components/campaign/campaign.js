import React, { Fragment } from "react";
import moment from "moment";
import { GiPriceTag } from "react-icons/gi";
import { FaFileCsv, FaCalendarAlt } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

// {
//   "name": "Test Whatsapp",
//   "region": "US",
//   "createdOn": 20210629,
//   "price": {'week': 20, 'month': 70, 'year': 800},
//   "csv": "Some CSV link for Whatsapp",
//   "report": "Some report link for Whatsapp",
//   "image_url":"https://www.google.com/search?q=image+of+campaign&rlz=1C1VDKB_enIN953IN953&sxsrf=ALeKk01i8c2xqyFE7Rzo8XKR5VDjTH0w5w:1624969367079&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjZz5TP6rzxAhUZxTgGHbo5AY8Q_AUoAXoECAEQAw&biw=1366&bih=625#imgrc=3alK0YTxamJ46M"
// },

const Campaign = ({ name, region, createdOn, price, image_url }) => {
  return (
    <article>
      <div className="campaign_date">
        <h4>{moment(createdOn).format("Do MMM YYYY")}</h4>
        <p>{moment(createdOn, "YYYYMMDD").fromNow()}</p>
      </div>
      <div className="campaign_desc">
        <img src={image_url} alt="icon" />
        <div>
          <p>{name}</p>
          <span>{region}</span>
        </div>
      </div>
      <div className="campaign_price">{price.week}</div>
      <div className="campaign_reports">
        <span>
          <FaFileCsv style={{ color: "green", fontSize: "1.2rem" }} />
        </span>
        <p>CSV</p>
        <span>
          <BsGraphUp style={{ color: "Red", fontSize: "1.2rem" }} />
        </span>
        <p>Report</p>
        <span>
          <FaCalendarAlt style={{ color: "blue", fontSize: "1.2rem" }} />
        </span>
        <p>Schedule Again</p>
      </div>
    </article>
  );
};
export default Campaign;
