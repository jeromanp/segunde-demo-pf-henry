import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'
import TableHead from '../../../components/dashboard/tables/TableHead'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'
import swalAction from 'components/dashboard/swalAction'
import dayjs from 'dayjs'



const table_head = [
  { idx: 'nombre', title: 'Nombre', width: 'min-w-[100px]' },
  { idx: 'comment', title: 'Comentario', width: 'min-w-[200px]' },
  { idx: 'review', title: 'Valoración', width: 'min-w-[100px]' },
  { idx: 'date', title: 'Fecha', width: 'min-w-[150px]' },
  { idx: 'actions', title: 'Acciones', with: 'min-w-[100px]' }
];



export default function Dashboard() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get('/api/comments')
      .then((response) => {
        setReviews(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  const deleteHandler = (e) => {
    swalAction(
      'comentario',
      e.target.value,
      setReviews,
      reviews
    )
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
                  reviews.map((review, i) => (
                    <tr key={review.id}>

                      <td 
												className={
													`border-[#eee] py-5 px-4 ${i < reviews.length -1 ? 'border-b' : ''}`
												}>
                        <h5 className="text-black text-sm font-semibold">
                          { review.profile.name }
                        </h5>
                        <p className="text-xs">
													{ review.profile.email }
												</p>
                      </td>
                      
											<td 
												className={
													`border-[#eee] py-5 px-4 pl-5 ${i < reviews.length -1 ? 'border-b' : ''}`
												}>
                        <div className="text-xs">{review.review}</div>
                      </td>
                      
											<td 
												className={
													`border-[#eee] py-5 px-4 ${i < reviews.length -1 ? 'border-b' : ''}`
												}>
                        <div className="flex gap-x-1">
													{ review.stars ? (<i className="ri-star-fill text-yellow"></i>) : null }
													{ review.stars > 1 ? (<i className="ri-star-fill text-yellow"></i>) : null }
													{ review.stars > 2 ? (<i className="ri-star-fill text-yellow"></i>) : null }
													{ review.stars > 3 ? (<i className="ri-star-fill text-yellow"></i>) : null }
													{ review.stars > 4 ? (<i className="ri-star-fill text-yellow"></i>) : null }
												</div>
                      </td>
                      
											<td 
												className={
													`border-[#eee] py-5 px-4 ${i < reviews.length -1 ? 'border-b' : ''}`
												}>
                        <p className="text-sm">
													{ dayjs(review.created_at).format('DD MMM, YYYY') }
												</p>
                      </td>
                      
											<td 
												className={
													`border-[#eee] py-5 px-4 ${i < reviews.length -1 ? 'border-b' : ''}`
												}>
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
