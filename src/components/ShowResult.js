import React from "react";
import { useParams } from "react-router-dom";

const ShowResult = () => {
  const { message } = useParams();

  return (
    <div>
      <h2>Show Result</h2>
      <p>{message}</p>
    </div>
  );
};

export default ShowResult;
