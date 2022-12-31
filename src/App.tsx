import React from "react";
import Countdown from "react-countdown";

import { AppContainer } from "./styles";

function App() {
  console.log("here: ", process.env.REACT_APP_GROOMZY_API_BASE_URL);
  return (
    <div className="App">
      <AppContainer>
        <img
          src={`${
            process.env.REACT_APP_GROOMZY_API_BASE_URL || ""
          }/common-media-file/media-logo`}
          alt="Groomzy-Logo"
          width={85}
          height={85}
        />
        <p>Groomzy web application is currently under development</p>
        <p>
          But we are happy to share that Groomzy Android application is going
          live in
        </p>
        <Countdown date={"2023-01-30T01:00:00"} />,
      </AppContainer>
    </div>
  );
}

export default App;
