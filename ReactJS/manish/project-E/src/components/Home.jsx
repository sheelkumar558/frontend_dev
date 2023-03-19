import React from "react";
import data from "../utils/inspiration.json";
export const Home = () => {
  return (
    <>
      <div>
        <div>
          <h1>Inspiration for your first order</h1>
        </div>
        <div>
          {data?.insp?.map((d, i) => (
            <div key={i}>
              <div>
                <img src={d.img} alt={d.title} />
              </div>
              <div>
                <p>{d.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </>
  );
};
