import CheckOutForm from "components/CheckOutForm";
import LayoutMain from "layouts/Layout";

export default function CheckOut() {
  const mock = {
    price: 19,
    night: 7,
    extra: 20,
  };
  return (
    <>
      <LayoutMain>
        <div className="flex flex-col md:flex-row p-6 pb-12 items-start">
          <button
            className="flex items-center text-brand-green font-bold pr-4 pl-6"
            onClick={() => window.history.back()}
          >
            <img src="/arrowBack.svg" alt="" className="w-4/5 pt-3.5" />
          </button>
          <CheckOutForm
            price={mock.price}
            night={mock.night}
            extra={mock.extra}
          />
          <img src="/ilustrationCheck.svg" alt="" className="w-5/12 mr-16 ml-auto self-center" />
        </div>
      </LayoutMain>
    </>
  );
}
