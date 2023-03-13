import React, { useEffect, useState } from "react";
import "./slider.css";
import { Slide } from "react-slideshow-image";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "500px",
};

export default function Slider({ data }) {
  const [africa, setAfrica] = useState([]);
  useEffect(() => {
    const aff = data.filter((country) => country.region === "Africa");
    setAfrica(aff);
  }, [data]);

  return (
    <div className="slide-container">
      <div></div>
      <Slide>
        {africa.map(
          (country, index) =>
            country.region === "Africa" && (
              <div key={index}>
                <div
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${country.flags.png})`,
                  }}
                >
                  <span style={spanStyle}>{country.name.common}</span>

                </div>
              </div>
            )
        )}
      </Slide>
      {/* <p>{JSON.stringify(africa)}</p> */}
    </div>
  );
}
