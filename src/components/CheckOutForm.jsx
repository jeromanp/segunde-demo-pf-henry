import Datepicker from "./form/Datepicker";
import GuestsSelector from "./form/GuestsSelector";
import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/router";

loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function CheckOutForm({
  productId,
  price,
  night,
  extra,
  default_price,
}) {
  // Este estado solo lo copie y pegue, para que no me de error el GuestSelector
  const [filters, setFilters] = useState({
    guests: 0,
    checkin: null,
    checkout: null,
  });

  const router = useRouter();
  const { success, canceled } = router.query;

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    // const query = new URLSearchParams(window.location.search);
    if (success !== undefined || canceled !== undefined) {
      if (success) {
        console.log("Order placed! You will receive an email confirmation.");
      }

      if (canceled) {
        console.log(
          "Order canceled -- continue to shop around and checkout when you’re ready."
        );
      }
    }
  }, [success, canceled]);

  return (
    <form
      className="w-1/3"
      action={`/api/checkout_sessions?price_id=${productId}&night=${night}&subscription=true`}
      method="POST"
    >
      <select className="text-brand-green font-bold text-4xl">
        <option>Cabaña I</option>
      </select>
      <div className="pt-4">
        <div className="border-2 rounded-3xl border-brand-light-green shadow-lg p-6">
          <h2 className="text-brand-green font-bold text-3xl pt-2">
            ${price} USD{" "}
            <span className="text-green font-light text-2xl">por noche</span>
          </h2>
          <div className="flex justify-between pt-6">
            <div>
              <p className="text-sm font-base pb-0.5">Check-In</p>
              <div className="border-2 rounded-xl border-brand-light-green pl-6 pr-6">
                <Datepicker />
              </div>
            </div>

            <div>
              <p className="text-sm font-base pb-0.5">Check-Out</p>
              <div className="border-2 rounded-xl border-brand-light-green pl-6 pr-6">
                <Datepicker />
              </div>
            </div>
          </div>

          <div className="pt-4 pb-4 w-full">
            <p className="text-sm font-base pb-0.5">Cant. personas</p>
            <div className="border-2 rounded-xl border-brand-light-green p-1">
              <GuestsSelector
                bottom="10"
                filterSetter={setFilters}
                filters={filters}
              />
            </div>
          </div>

          <div className="bg-brand-light-green border rounded-xl text-center w-full">
            <button
              className="text-white text-xl font-medium p-2"
              type="submit"
              role="link"
            >
              Reservar
            </button>
          </div>

          <section className="pt-8">
            <div className="flex justify-between text-base font-base">
              <p className="pb-2">
                ${price} USD por {night} noches
              </p>
              <p className="pb-2">${price * night} USD</p>
            </div>

            <div className="flex justify-between text-base font-base">
              <p className="pb-2">Ejemplo Extra </p>
              <p className="pb-6">${extra} USD</p>
            </div>

            <div className="border-2 border-brand-cream rounded-full"></div>
            <div className="flex justify-between text-2xl font-semibold pt-6 pb-10">
              <h2>Total</h2>
              <p>${price*night+extra} USD</p>
            </div>
          </section>
        </div>
      </div>
    </form>
  );
}
