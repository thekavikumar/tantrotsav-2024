"use client";
import axios from "axios";
import { useState } from "react";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";
import toast, { Toaster } from "react-hot-toast";

export default function Page() {
  const [orderId, setOrderId] = useState();
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("started");

      const response = await axios.post(
        "http://127.0.0.1:3000/ccavRequestHandler",
        `merchant_id=2156706&order_id=${orderId}&currency=INR&amount=${amount}&redirect_url=http%3A%2F%2F127.0.0.1%3A3000%2FccavResponseHandler&cancel_url=http%3A%2F%2F127.0.0.1%3A3000%2FccavResponseHandler&language=EN`
      );
      // const response = await axios.post(
      //   "http://127.0.0.1:3000/ccavRequestHandler",
      //   `merchant_id=2156706&order_id=${orderId}&currency=INR&amount=${amount}&redirect_url=http%3A%2F%2F127.0.0.1%3A3001%2Fapi%2Fhello&cancel_url=http%3A%2F%2F127.0.0.1%3A3001%2Fapi%2Fhello&language=EN`
      // );
      console.log("response from nodejs: ", response.data);
      const newW = window.open("", "_blank");
      newW.document.write(response.data);
      setLoading(true);
      const orderRef = ref(db, "orders/" + orderId);
      onValue(orderRef, (snapshot) => {
        if (snapshot.exists()) {
          // The record exists at the specified path
          const data = snapshot.val();
          // Do something with the data
          console.log("Record exists:", data);
          if (data?.orderStatus == "Success") {
            toast.success(`
              orderId: ${data?.orderId}\n
              trackingId: ${data?.trackingId}\n
              orderStatus: ${data?.orderStatus}\n
              amount: ${data?.amount}`);
          } else if (
            data?.orderStatus == "Aborted" ||
            data?.orderStatus == "Failure"
          ) {
            toast.error("Order Failed!  ");
          }
        } else {
          // The record does not exist at the specified path
          console.log("Record does not exist");
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <Toaster position="top-right" reverseOrder={false} />
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center h-screen flex-col gap-4"
      >
        <input
          type="text"
          name="order_id"
          id="order_id"
          placeholder="order id"
          onChange={(e) => setOrderId(e.target.value)}
        />
        <input
          type="text"
          name="amount"
          id="amount"
          placeholder="amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          type="submit"
          className="border px-6 py-3 hover:border-2 hover:shadow-md rounded-md"
        >
          POST
        </button>
      </form>
    </main>
  );
}
