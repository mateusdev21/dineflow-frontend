import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getRandomColor } from "../../utils";
import { updateTable } from "../../redux/slices/customerSlice";

const TableCard = ({ key, name, status, initial, seats }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = (name) => {
    if (status === "Booked") return;
    return () => {
      dispatch(updateTable({ tableNo: name }));
      navigate("/menu");
    };
  };

  return (
    <div
      onClick={handleClick(name)}
      key={key}
      className="w-[350px] bg-[#262626] hover:bg-[#1f1f1f] p-4 rounded-lg cursor-pointer"
    >
      <div className="flex items-center justify-between px-1">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p
          className={`${
            status === "Available"
              ? "text-green-600 bg-[#2e4a40]"
              : "text-[#ff6347] bg-orange-300"
          } px-2 py-1 rounded-lg`}
        >
          {status}
        </p>
      </div>
      <div className="flex items-center justify-center mt-5 mb-8">
        <h1
          className="text-white rounded-full p-5 text-xl"
          style={{
            backgroundColor: getRandomColor(),
          }}
        >
          {initial}
        </h1>
      </div>
      <p className="text-[#ababab] text-xs">
        Seats: <span className="text-[#f5f5f5]">{seats}</span>
      </p>
    </div>
  );
};

export default TableCard;
