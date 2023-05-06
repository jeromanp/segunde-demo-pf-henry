import Layout from "../../../layouts/DashboardLayout";
import Header from "../../../components/dashboard/PageHeader";
import TableHead from "../../../components/dashboard/tables/TableHead";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

const table_head = [
  { idx: "nombre", title: "Nombre", width: "220px" },
  { idx: "review", title: "Comentario", width: "576px" },
  { idx: "stars", title: "Estrellas", width: "220px" },
  { idx: "fecha-review", title: "Fecha del comentario", width: "220px" },
  { idx: "acciones", title: "Acciones", with: "220px" },
];

export default function Dashboard() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("/api/comments")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleStars = (stars) => {
    switch (stars) {
      case stars === 0:
        return "no hay registros";
      case (stars = 1):
        return "⭐";
      case (stars = 2):
        return "⭐⭐";
      case (stars = 3):
        return "⭐⭐⭐";
      case (stars = 4):
        return "⭐⭐⭐⭐";
      case (stars = 5):
        return "⭐⭐⭐⭐⭐";
      default:
        return "";
    }
  };

  const deleteHandler = (e) => {
    
  }

  return (
    <Layout>
      <Header
        title="Reviews"
        breadcrumbs={
          <>
            <li>/</li>
            <li className="text-primary">Reviews</li>
          </>
        }
      >
        <Link
          href="/admin/reviews/create"
          className="inline-flex items-center justify-center rounded-md bg-primary bg-opacity-70 py-1.5 px-4 text-sm text-center font-medium text-white hover:bg-opacity-90"
        >
          Nueva reseña
        </Link>
      </Header>

      <div className="flex flex-col gap-10">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default  sm:px-7.5 xl:pb-1">
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-auto">
              <TableHead data={table_head} />

              <tbody>
                {reviews &&
                  reviews.map((review) => (
                    <tr key={review.id}>
                      <td className="border-b border-[#eee] py-5 px-4 w-[220px]">
                        <h5 className="font-medium text-black">
                          Luke Skywalker
                        </h5>
                        <p className="text-sm">l.skywalker@lucasfilms.com</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 pl-9 xl:pl-11 w-[576px]">
                        <p className="text-black">{review.review}</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 w-[220px]">
                        <p className="text-black">
                          {handleStars(review.stars)}
                        </p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 w-[220px]">
                        <p className="text-black">{review.created_at}</p>
                      </td>
                      <td className="border-b border-[#eee] py-5 px-4 w-[220px]">
                        <div className="flex items-center space-x-3.5">
                          <Link
                            className="hover:text-primary"
                            href={`/admin/reviews/${review.id}`}
                          >
                            <i className="ri-edit-line text-xl leading-none"></i>
                          </Link>
                          <button className="hover:text-primary ri-close-circle-line text-xl leading-none"
                            onClick={deleteHandler}
                            value={review.id}>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
}
