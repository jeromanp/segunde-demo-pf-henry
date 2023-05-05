import Layout from '../../../layouts/DashboardLayout'
import Header from '../../../components/dashboard/PageHeader'

export default function Edit()
{
	return (
		<Layout>
			<Header 
				title="Edit review"
				breadcrumbs={(<>
					<li>/</li>
					<li className="text-primary">Edit review</li>
				</>)}>
			</Header>

      <div className="flex justify-center">
        <div class="col-span-5 xl:col-span-3 w-1/2">
          <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="p-7">
              <form action="#">
                <div className="mb-5.5 flex flex-col gap-5.5 sm:flex-row">
                  <div className="w-full sm:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      Nombre
                    </label>

                    <div className="relative">
                      <input
												className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
												type="text" 
												name="UserName" 
												id="UserName" 
												value="User name" />
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                      E-mail
                    </label>

                    <input
											className="w-full rounded border border-stroke bg-gray py-3 px-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
											type="email" 
											name="email" 
											id="email" 
											value="E-mail" />
                  	</div>
                	</div>

                  <div className="flex gap-x-6 items-center my-6">
                    <label className="block text-sm font-medium text-black dark:text-white">
                      Estrellas
                    </label>

                    <div 
                      x-data="{ checkboxToggle: '' }"
                      className="flex gap-x-5">
                      <label 
                        className="flex cursor-pointer select-none items-center"
                        click="checkboxToggle = '1'">
                          <div className="relative">
                            <div 
                              className="mr-1 flex h-5 w-5 items-center justify-center rounded-full border">
                              <span 
                                className="h-2.5 w-2.5 rounded-full bg-transparent">
                              </span>
                            </div>
                          </div>
                        1
                      </label>

                      <label 
                        className="flex cursor-pointer select-none items-center"
                        click="checkboxToggle = '2'">
                        <div className="relative">
                          <div 
                            className="mr-1 flex h-5 w-5 items-center justify-center rounded-full border">
                              <span 
                                className="h-2.5 w-2.5 rounded-full bg-transparent">
                              </span>
                            </div>
                          </div>
                        2
                      </label>

                      <label 
                        className="flex cursor-pointer select-none items-center"
                        click="checkboxToggle = '3'">
                        <div className="relative">
                          <div 
                            className="mr-1 flex h-5 w-5 items-center justify-center rounded-full border">
                              <span 
                                className="h-2.5 w-2.5 rounded-full bg-transparent">
                              </span>
                            </div>
                          </div>
                        3
                      </label>

                      <label 
                        className="flex cursor-pointer select-none items-center"
                        click="checkboxToggle = '4'">
                        <div className="relative">
                          <div 
                            className="mr-1 flex h-5 w-5 items-center justify-center rounded-full border">
                              <span 
                                className="h-2.5 w-2.5 rounded-full bg-transparent">
                              </span>
                            </div>
                          </div>
                        4
                      </label>

                      <label 
                        className="flex cursor-pointer select-none items-center"
                        click="checkboxToggle = '5'">
                        <div className="relative">
                          <div 
                            className="mr-1 flex h-5 w-5 items-center justify-center rounded-full border">
                              <span 
                                className="h-2.5 w-2.5 rounded-full bg-transparent">
                              </span>
                            </div>
                          </div>
                        5
                      </label>

                    </div>
                  </div>

                  <div className="mb-5.5">
                    <label className="mb-3 block text-sm font-medium text-black dark:text-white"
                      for="Username">
											Comentario
										</label>
                    <div className="relative">

                      <textarea
                        className="w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 font-medium text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        name="review" id="review" rows="6" placeholder="Write your review here">
                      </textarea>
                    </div>
                  </div>

                  <div className="flex gap-x-6 items-center">
                    <label 
                      className="block text-sm font-medium text-black dark:text-white">
                      Aprobado
                    </label>

                    <div 
                      x-data="{ checkboxToggle: '' }"
                      className="flex gap-x-5">
                      <label 
                        className="flex cursor-pointer select-none items-center"
                        click="checkboxToggle = 'SI'">
                          <div className="relative">
                            <div 
                              className="mr-1 flex h-5 w-5 items-center justify-center rounded-full border">
                              <span 
                                className="h-2.5 w-2.5 rounded-full bg-transparent">
                              </span>
                            </div>
                          </div>
                        SI
                      </label>

                      <label 
                        className="flex cursor-pointer select-none items-center"
                        click="checkboxToggle = 'NO'">
                        <div className="relative">
                          <div 
                            className="mr-1 flex h-5 w-5 items-center justify-center rounded-full border">
                              <span 
                                className="h-2.5 w-2.5 rounded-full bg-transparent">
                              </span>
                            </div>
                          </div>
                        NO
                    	</label>

                    </div>
                  </div>

                	<div className="flex justify-end gap-4.5">
                  	<button
                    	className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                    	type="submit">
                      	Cancel
                  	</button>
                  	<button
                    	className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-90"
                    	type="submit">
                    		Save
                  	</button>
                	</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
	)
}