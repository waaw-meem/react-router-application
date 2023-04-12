import React from "react";
import {Routes,Route} from "react-router-dom";

import AllMeetups from "./pages/AllMeetups";
import Favourite from "./pages/Favourite";
import SingleMeetup from "./pages/SingleMeetup";

import Layout from "./components/Layout/Layout";

function App(){
    return(
     <div>
      <Layout>
      <Routes>
      <Route path="/" exact={true} element={<AllMeetups/>}>
        </Route>
        <Route path="/fav-page" element={ <Favourite/>}>
        </Route>
        <Route path="/single-meetup" element={ <SingleMeetup/>}>
        </Route>
      </Routes>
      </Layout>
    
     </div>
    )
}

export default App