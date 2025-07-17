import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { removeItems } from "../../redux/slices/cartSlice";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { FaNotesMedical } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils";

const CartInfo = () => {
  const cartData = useSelector((state) => state.cart);
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [cartData]);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItems(id));
  };

  return (
    <div className="px-4 py-2">
      <h1 className="text-[#e4e4e4] text-lg font-semibold tracking-wide">
        Order Details
      </h1>
      <div className="mt-4 overflow-y-scroll h-[230px] hide-scrollbar" ref={scrollRef}>
        {cartData.length === 0 ? (
          <p className="text-[#ababab] text-sm flex justify-center items-center h-[230px]">
            Your Cart Is Empty. Let's pick some items!
          </p>
        ) : (
          cartData.map((item) => {
            return (
              <div className="bg-[#1f1f1f] rounded-lg p-4 mb-2">
                <div className="flex items-start justify-between">
                  <h1 className="text-[#ababab] text-md font-semibold tracking-wide">
                    {item.name}
                  </h1>
                  <p className="text-[#ababab] text-md font-semibold tracking-wide">
                    x{item.quantity}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3">
                    <RiDeleteBin2Fill
                      onClick={() => handleRemove(item.id)}
                      className="text-[#ababab] cursor-pointer"
                      size={20}
                    />
                    <FaNotesMedical
                      className="text-[#ababab] cursor-pointer"
                      size={20}
                    />
                  </div>
                  <p className="text-[#f5f5f5] text-md font-semibold">
                    {formatCurrency(item.price)}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CartInfo;
