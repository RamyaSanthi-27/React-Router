import React from "react";
import CardTop from "./CardTop";
import Card from "./Card";
import img from "./data.jpeg";

const DataScience = ({ data }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <img
          style={{
            width: "100%",
            boxShadow: "0px -1px 5px rgba(0, 0, 0, 0.5)",
          }}
          className="responsive-image d-sm-none d-md-block"
          src={img}
          alt=""
        />
        <CardTop/>
        {data.map((item, index) => {
          if (item.id === "Data Science")
            return <Card key={index} item={item} />;
          return null;
        })}
      </div>
    </div>
  );
};

export default DataScience;
