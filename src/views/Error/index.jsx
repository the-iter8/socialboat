import React from "react";
import "./Error.css";

function ErrorScreen({ results }) {
  console.log(results, "asd");
  return (
    <div className='error-screen'>
      <h2>Oops, something went wrong!</h2>
      <p>We encountered an error while fetching data.</p>
      <p>Error message - {results.data[0]?.message}</p>
      <button className='refresh-button' onClick={() => window.location.reload()}>
        Click here to refresh
      </button>
    </div>
  );
}

export default ErrorScreen;
