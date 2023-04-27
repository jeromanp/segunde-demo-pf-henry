import Layout from '../layouts/Layout';

export default function Actividades() {
  return (
    <Layout>
      <div className="flex flex-col justify-center items-center text-brand-green">
        <h2 className="text-4xl my-10 font-black">Actividades Turisticas</h2>
        <h4 className="text-xl font-semibold text-center mx-80 mb-10">¿Estás listo para explorar nuevos lugares, conocer gente increíble y crear recuerdos inolvidables? Entonces, ¡tenemos la escapada perfecta para ti!. Descargá el catálogo turistico de Sierra de la Ventana desde aqui.</h4>
          <div className="flex justify-center items-start text-center mx-36 mb-8 gap-20">
            <section className=" w-1/4">
              <img className="w-full h-80 object-fit rounded-lg overflow-hidden" src="https://www.labrujula24.com/wp-content/webp-express/webp-images/uploads/2021/11/sierra.jpg.webp" alt="Actividad 1" />
              <h2 className="text-xl font-bold my-2">Circuito Artesanos Villa Ventana</h2>
              <p className="text-justify text-sm font-medium">Una muy buena opción para recorrer Villa Ventana de la mano de sus artesanas y artesanos, visita sus talleres conoce y disfruta de sus obras y productos. En marcados por la frondosa arboleda de la villa podes encontrar los talleres y locales, conocer los procesos y al mismo tiempo recorrer las hermosas calles del pueblo mas alto de la provincia de Buenos Aires</p>
            </section>
            <section className="w-1/4">
              <img className="w-full h-80 object-fit rounded-lg overflow-hidden" src="https://fotos.perfil.com/2022/11/07/club-hotel-de-villa-ventana-20221107-1449645.jpg" alt="Actividad 2" />
              <h2 className="text-xl font-bold my-2">Club Hotel de la Ventana</h2>
              <p className="text-justify text-sm font-medium">Inaugurado el 11 de noviembre de 1911, fue el primer Hotel Casino de Sudamérica, actualmente en ruinas, constituye uno de los principales atractivos de la localidad de Villa Ventana. Contaba con cancha de golf, de tenis, casino, capilla y un tren de trocha angosta que lo comunicaba con la estación de Sierra de la Ventana. En 1942 refugio prisioneros del Graff Spee y en 1983 un incendio lo dejo en ruinas.</p>
            </section>
            <section className="w-1/4">
              <img className="w-full h-80 object-cover rounded-lg overflow-hidden" src="https://scontent.faep9-2.fna.fbcdn.net/v/t1.18169-9/20638540_669500089926744_6931384296543630296_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=bI8BplyyGHEAX9feXTQ&_nc_ht=scontent.faep9-2.fna&oh=00_AfB2rw0gln--8OEQV7Ow67_nL4ZXaSLA1zmiQmgnGoPpyw&oe=646FF0AE" alt="Actividad 3" />
              <h2 className="text-xl font-bold my-2">Fuente del Bautismo</h2>
              <p className="text-justify text-sm font-medium">Circuito Obra de Salamone Francisco Salamone fue un arquitecto italoargentino, que construyó más de 70 edificios en 18 municipios de la provincia de Buenos Aires entre 1936 y 1940 de manera simultanea. Estos edificios combinan el art decó, futurismo y funcionalismo a escala monumental. Sus obras son cementerios, mataderos y palacios municipales que encarnan el modernismo en diferentes ciudades y pueblos bonaerenses.</p>
            </section>
          </div>
        </div>
    </Layout>
  )
};