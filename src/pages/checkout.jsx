import { useSession } from "@supabase/auth-helpers-react";
import CheckOutForm from "components/CheckOutForm";
import LayoutMain from "layouts/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CheckOut() {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [nights, setNights] = useState(1);

  const session = useSession(undefined);
  const router = useRouter();

  //Para controlar si la pagina no termino de cargar
  const [isLoading, setIsLoading] = useState(true);

  const [bookingForm, setBookingForm] = useState({});

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    }
    fetchProducts();
    //La ruta debe ser accedida solo por usuarios logueados
    //No es instantaneo asi q llega a mostrarse la pagina y despues redirige
    //Algo para arreglar despues
  }, []);

  const selectedProductObject = products.find(
    (product) => product.name === selectedProduct
  );

  const selectedProductPrice = selectedProductObject
    ? selectedProductObject.price
    : 0;

  const selectedProductStripeId = selectedProductObject
    ? selectedProductObject.id
    : "";

  const selectedProductDefaultPrice = selectedProductObject
    ? selectedProductObject.default_price
    : "";

  const mock = {
    price: 19,
    night: 7,
    extra: 20,
  };
  return (
    <>
      <LayoutMain>
        <select
          value={selectedProduct}
          onChange={(event) => setSelectedProduct(event.target.value)}
        >
          {products.map((product) => (
            <option key={product.id} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
        <div>
          <label for="">Noches</label>
          <input
            type="number"
            defaultValue={1}
            value={nights}
            onChange={(e) => {
              setNights(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col md:flex-row p-6 pb-12 items-start">
          <button
            className="flex items-center text-brand-green font-bold pr-4 pl-6"
            onClick={() => window.history.back()}
          >
            <img src="/arrowBack.svg" alt="" className="w-4/5 pt-3.5" />
          </button>
          <CheckOutForm
            productId={selectedProductDefaultPrice}
            default_price={selectedProductDefaultPrice}
            price={selectedProductPrice}
            night={nights}
            extra={mock.extra}
          />
          <img
            src="/ilustrationCheck.svg"
            alt=""
            className="w-5/12 mr-16 ml-auto self-center"
          />
        </div>
      </LayoutMain>
    </>
  );
}
