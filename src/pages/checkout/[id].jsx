import { useSession } from "@supabase/auth-helpers-react";
import CheckOutForm from "components/CheckOutForm";
import LayoutMain from "layouts/Layout";
import { useRouter } from "next/router";
import Login from "pages/login";
import { supabase } from "utils/supabase";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CheckOut({ room }) {
  const session = useSession();
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [matchingProduct, setMatchingProduct] = useState(null);
  console.log("PRODUCTS", products);
  console.log("SELECT", matchingProduct);

  const mock = {
    price: 19,
    night: 7,
    extra: 20,
  };

  useEffect(() => {
    async function fetchProducts() {
      const response = await axios.get("/api/products");
      const matching = response.data.find(
        (product) => product.name === room.name
      );
      setProducts(response.data);
      setMatchingProduct(matching);
    }
    fetchProducts();
    //La ruta debe ser accedida solo por usuarios logueados
    //No es instantaneo asi q llega a mostrarse la pagina y despues redirige
    //Algo para arreglar despues
  }, []);

  return (
    <>
      {session ? (
        <LayoutMain>
          <div className="flex flex-col md:flex-row p-6 pb-12 items-start">
            <button
              className="flex items-center text-brand-green font-bold pr-4 pl-6"
              onClick={() => window.history.back()}
            >
              <img src="/arrowBack.svg" alt="" className="w-4/5 pt-3.5" />
            </button>
            {matchingProduct && matchingProduct.name === room.name && (
              <CheckOutForm
                name={matchingProduct.name}
                price={matchingProduct.price}
                default_price={matchingProduct.default_price}
                night={mock.night}
                extra={mock.extra}
              />
            )}

            <img
              src="/ilustrationCheck.svg"
              alt=""
              className="w-5/12 mr-16 ml-auto self-center"
            />
          </div>
        </LayoutMain>
      ) : (
        <Login />
      )}
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  const { data: room, error } = await supabase
    .from("rooms")
    .select("*")
    .eq("id", id);
  // .single();

  if (error) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      room: room[0],
    },
  };
}
