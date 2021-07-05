import { Fragment } from "react";
import "./App.scss";

import Toolbar from "./components/Toolbar";
import Navbar from "./components/Navbar";
import CampaignList from './components/campaign/campaignList';

function App() {
  return (
    <Fragment>
      <Toolbar />
      <Navbar />
      <main>
        <CampaignList/>
      </main>
    </Fragment>
  );
}

export default App;
