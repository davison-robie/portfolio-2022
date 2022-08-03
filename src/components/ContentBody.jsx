import { React } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import FrontPage from "./FrontPage";
import AdairStaging from "./Samples/AdairStaging";
import MaxAllenMusic from "./Samples/MaxAllenMusic";
import HCFA from "./Samples/HCFA";
import NiceBoyVice from "./Samples/NiceBoyVice";
import UIE from "./Samples/UIE";
import FireLogger from "./Samples/FireLogger";

function ContentBody() {
  const location = useLocation();

  return (
    <div className={"content-body"}>
      <Routes location={location}>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/adair-staging"} element={<AdairStaging />} />
        <Route path={"/max-allen-music"} element={<MaxAllenMusic />} />
        <Route path={"/HCFA"} element={<HCFA />} />
        <Route path={"/nice-boy-vice"} element={<NiceBoyVice />} />
        <Route path={"/uie"} element={<UIE />} />
        <Route path={"/firelogger"} element={<FireLogger />} />
      </Routes>
    </div>
  );
}

export default ContentBody;
