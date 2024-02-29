import React from "react";
import "./searchResult.css";

export const SearchResultsList = ({ results }) => {
    return (
      <div className="resultsList">
        {results.map((result, id) => {
          return <div key={id}>{result.name}</div>;
        })}
      </div>
    );
  };


