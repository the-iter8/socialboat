import React from "react";
import "./Loading.css";
function LoadingScreen() {
  return (
    <div className='loading-screen'>
      <h2>Loading...</h2>
      <p>Please wait while we fetch the data.</p>
    </div>
  );
}

export default LoadingScreen;
