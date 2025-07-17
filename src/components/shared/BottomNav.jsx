import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder, MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import { setCustomer } from "../../redux/slices/customerSlice";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  // State to manage guest count
  const [guestCount, setGuestCount] = useState(0);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Functions to increment and decrement guest count
  const increment = () =>
    setGuestCount((prevCount) => (prevCount < 6 ? prevCount + 1 : prevCount));
  const decrement = () => {
    setGuestCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Function to open and close the modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Function to check if the current path is active
  const isActive = (path) => location.pathname === path;

  const handleCreateOrder = () => {
    dispatch(setCustomer({ name, phone, pax: guestCount }));
    navigate("/tables");
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around">
      <button
        onClick={() => navigate("/")}
        className={`${
          isActive("/") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"
        } flex items-center justify-center font-bold w-[200px] rounded-[20px]`}
      >
        <FaHome className="inline mr-2" size={20} />
        <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className={`${
          isActive("/orders") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"
        } flex items-center justify-center font-bold w-[200px] rounded-[20px]`}
      >
        <MdOutlineReorder className="inline mr-2" size={20} />
        <p>Orders</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className={`${
          isActive("/tables") ? "text-[#f5f5f5] bg-[#343434]" : "text-[#ababab]"
        } flex items-center justify-center font-bold w-[200px] rounded-[20px]`}
      >
        <MdTableBar className="inline mr-2" size={20} />
        <p>Tables</p>
      </button>
      <button
        onClick={() => navigate("/more")}
        className="flex items-center justify-center text-[#ababab] w-[200px]"
      >
        <CiCircleMore className="inline mr-2" size={20} />
        <p>More</p>
      </button>

      <button
        disabled={isActive("/tables") || isActive("/menu")}
        onClick={openModal}
        className="absolute bottom-6 bg-[#ff6347] text-[#f5f5f5] rounded-full p-3 items-center align-center"
      >
        <BiSolidDish className="inline mt-[-2px]" size={30} />
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="Enter customer name"
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
            Customer Phone
          </label>
          <div className="flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="number"
              name=""
              id=""
              placeholder="+62 XXX-XXXX-XXXX"
              className="bg-transparent flex-1 text-white focus:outline-none hide-range"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
            Guest
          </label>
          <div className="flex items-center justify-between rounded-lg p-3 px-4 bg-[#1f1f1f]">
            <button
              onClick={() => decrement()}
              className="text-orange-500 text-2xl"
            >
              &minus;
            </button>
            <span className="text-white">{guestCount} Persons</span>
            <button
              onClick={() => increment()}
              className="text-orange-500 text-2xl"
            >
              &#43;
            </button>
          </div>
        </div>
        <button
          onClick={() => handleCreateOrder()}
          className="w-full bg-[#ff6347] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-[#e5533d] transition-colors duration-200"
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
