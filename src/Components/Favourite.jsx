import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/todoReducer";
const Favourite = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.npm.favourites);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div
        style={{
          border: "2px solid blue",
          height: "80%",
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        {selector &&
          selector.map((ele, ind) => {
            return (
              <div
                key={ind}
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  width: "fit-content",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                {ele}
                <button
                  onClick={() => {
                    dispatch(removeItem({ ind: ind }));
                  }}
                >
                  ❌
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Favourite;