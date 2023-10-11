"use client";

import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { Product } from "@/types";
import useCart from "@/hooks/use-cart";
import { useState } from "react";
import { ShoppingCart, X } from "lucide-react";
import CartItem from "../app/(routes)/cart/components/cart-item"
// ... (other imports)

interface InfoProps {
  data: Product;
}

const Info: React.FC<InfoProps> = ({ data }) => {
  const cart = useCart();
  const [isCartOpen, setCartOpen] = useState(false);

  const onAddToCart = () => {
    cart.addItem(data);
    setCartOpen(true);
  };

  const openCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
      <h1 className="text-sm font-bold text-gray-500">{data?.short_description}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data?.price} />
          {data?.old_price && (
            <span className="text-base text-gray-500 line-through ml-2">
              <Currency value={data.old_price} />
            </span>
          )}
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div className="h-6 w-6 rounded-full border border-gray-600" style={{ backgroundColor: data?.color?.value }} />
        </div>
      </div>
      <div className="mt-10">
        <Button onClick={onAddToCart} className="w-full flex items-center justify-center gap-x-2">
          Ajouter au panier
          <Currency value={data.price} />
          {data.old_price && (
            <span className="text-base text-gray-500 line-through ml-2">
              <Currency value={data.old_price} />
            </span>
          )}
          <ShoppingCart size={20} />
        </Button>
      </div>

   




      {/* Cart Drawer */}
      {isCartOpen && (
  <div className="fixed inset-y-0 right-0 w-1/3 bg-white p-4 border-l border-gray-300 z-10 overflow-y-auto">
    <h2 className="text-lg font-semibold mb-4 flex items-center justify-between">
      Votre panier
      <button onClick={closeCart}>
        <X size={20} />
      </button>
    </h2>
    <hr className="my-4" />
    <div className="">
      <ul>
        {cart.items.map((item) => (
          <CartItem key={item.id} data={item}  />
        ))}
      </ul>
    </div>
  </div>
)}

<div className="sm:hidden fixed bottom-0 left-0 w-full bg-black py-2 text-white px-5 md:bottom-10 z-190">
  <div className="flex items-center justify-between">
    <p className="text-lg font-semibold">
      {data.name}
      <Currency value={data.price} />
    </p>
    <Button
      onClick={onAddToCart}
      className="w-20 h-20 flex items-center justify-center rounded-full bg-white text-white focus:ring focus:ring-indigo-300 transition duration-300"
    >
      <ShoppingCart size={50} color={'black'} />
    </Button>
  </div>
</div>


    </div>
  );
};

export default Info;


