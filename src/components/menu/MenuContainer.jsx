import React, { useState } from "react";
import { menus } from "../../constants";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";
import { formatCurrency } from "../../utils";
import { GrRadialSelected } from "react-icons/gr";
import { FaShoppingCart } from "react-icons/fa";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);

  // State to manage item count
  const [itemsId, setItemsId] = useState();
  const [itemCount, setItemCount] = useState(0);

  const dispatch = useDispatch();

  // Functions to increment and decrement item count
  const increment = (id) => {
    setItemsId(id);
    setItemCount((prevCount) => (prevCount < 4 ? prevCount + 1 : prevCount));
  };
  const decrement = (id) => {
    setItemsId(id);
    setItemCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // Function to handle adding item to cart
  const handleAddToCart = (item) => {
    if (itemCount === 0) {
      alert("Please select the quantity before adding to cart.");
      return;
    }
    const { name, price } = item;
    const newObj = {
      id: new Date(),
      name,
      pricePerQty: price,
      quantity: itemCount,
      price: price * itemCount,
    };
    dispatch(addItems(newObj));
    setItemCount(0);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%]">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{
                backgroundColor: menu.color,
              }}
              onClick={() => {
                setSelected(menu);
                setItemsId(0);
                setItemCount(0);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wider">
                  {menu.icon} {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <GrRadialSelected className="text-white" size={20} />
                )}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>
      <hr className="border-[#2a2a2a] border-t-2 mt-4" />
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] overflow-y-scroll h-[320px] hide-scrollbar">
        {selected?.items.map((item) => {
          return (
            <div
              key={item.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer bg-[#1a1a1a] hover:bg-[#2a2a2a]"
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wider">
                  {item.name}
                </h1>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="text-green-600 bg-[#2e4a40] p-2 rounded-lg"
                >
                  <FaShoppingCart size={20} />
                </button>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-[#f5f5f5] text-lg font-bold">
                  {formatCurrency(item.price)}
                </p>
                <div className="flex items-center justify-between rounded-lg py-3 px-4 bg-[#1f1f1f] gap-6 w-[50%]">
                  <button
                    onClick={() => decrement(item.id)}
                    className="text-orange-500 text-2xl"
                  >
                    &minus;
                  </button>
                  <span className="text-white">
                    {item.id === itemsId ? itemCount : 0}
                  </span>
                  <button
                    onClick={() => increment(item.id)}
                    className="text-orange-500 text-2xl"
                  >
                    &#43;
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MenuContainer;
