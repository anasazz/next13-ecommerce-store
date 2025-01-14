import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Button from "@/components/ui/button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";

const Summary = () => {
  const searchParams = useSearchParams();
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);

  // State to capture user info
  const [userInfo, setUserInfo] = useState({
    fullName: "",
    city: "",
    address: "",
    num: "",
    email: "",
  });

  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success('Payment completed.');
      removeAll();
    }

    if (searchParams.get('canceled')) {
      toast.error('Something went wrong.');
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price)
  }, 0);

  const onCheckout = async () => {
    // Include user info in the request
    const response = await axios.post(`https://octopus-app-594h8.ondigitalocean.app/api/c208efd7-54fa-44a3-b5bc-6fd23bae1737/checkout`, {
      productIds: items.map((item) => item.id),
      userInfo: userInfo, // Pass the user info here
    });

    window.location = response.data.url;
  }

  const handleUserInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  }

  return ( 
    <div
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 className="text-lg font-medium text-gray-900">
        Commande
      </h2>
      {/* User Info Input Fields */}
      <div className="mt-6 space-y-4">
      <input
          type="email"
          name="email"
          value={userInfo.email}
          onChange={handleUserInfoChange}
          placeholder="Email (optional)"
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="text"
          name="fullName"
          value={userInfo.fullName}
          onChange={handleUserInfoChange}
          placeholder="Nom et Prénom"
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="text"
          name="city"
          value={userInfo.city}
          onChange={handleUserInfoChange}
          placeholder="Ville"
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="text"
          name="address"
          value={userInfo.address}
          onChange={handleUserInfoChange}
          placeholder="Address"
          className="w-full border rounded-md px-3 py-2"
        />
        <input
          type="text"
          name="num"
          value={userInfo.num}
          onChange={handleUserInfoChange}
          placeholder="Téléphone"
          className="w-full border rounded-md px-3 py-2"
        />
        
      </div>
      <div className="flex items-center justify-between border-t border-gray-200 pt-4">
        <div className="text-base font-medium text-gray-900">Total</div>
        <Currency value={totalPrice} />
      </div>
      <Button onClick={onCheckout} disabled={items.length === 0} className="w-full mt-6">
        Finaliser
      </Button>
    </div>
  );
}

export default Summary;
