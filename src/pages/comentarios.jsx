import Header from "components/Header";

export default function Comentario() {
  return (
    <>
      <Header />
      <section class="px-4 py-8">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-brand-green text-4xl font-bold mb-6 mt-8">
            Nuestros huespedes!
          </h2>
          <p class="text-black font-medium text-xl mb-14 pr-8">
            Nuestros huéspedes son nuestra prioridad, ofrecemos una experiencia
            acogedora, cálida y auténtica para cada uno de nuestros visitantes.
            Queremos que te sientas como en casa!
          </p>
          <div class="flex flex-wrap -mx-2">
            <div class="w-full md:w-1/3 px-8 mb-8">
              <div class="bg-white p-4 rounded-lg">
                <p class="text-brand-green font-semibold text-2xl mb-4">
                  German S.
                </p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-brand-yellow mr-4"
                    ></i>
                  ))}
                </div>
                <p class="text-black font-normal mt-4">
                  Excelente atención, nos facilitaron todo desde antes de
                  alquilar. Hermosas cabañas, muy equipadas y ubicadas en una zona
                  muy tranquila de la siempre linda Villa La Arcadia. Estuvieron a
                  disposición siempre para todo loque necesitamos. Agendado para
                  volver.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-8 mb-8">
              <div class="bg-white p-4 rounded-lg">
                <p class="text-brand-green font-semibold text-2xl mb-4">
                  Eduardo O.
                </p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-brand-yellow mr-4"
                    ></i>
                  ))}
                </div>
                <p class="text-black font-normal mt-4">
                  Muy lindo lugar. Las habitaciones perfectas, buen servicio y
                  atención... La Ubicación excelente para descansar, sin ruidos a
                  pocos metros del arroyo.
                </p>
              </div>
            </div>
            <div class="w-full md:w-1/3 px-8 mb-8">
              <div class="bg-white p-4 rounded-lg">
                <p class="text-brand-green font-semibold text-2xl mb-4">
                  Walter A.
                </p>
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className="ri-star-fill text-brand-yellow mr-4"
                    ></i>
                  ))}
                </div>
                <p class="text-black font-normal mt-4">
                  Lindo lugar! Las cabañas excelentes, limpias confortables y con
                  detalles de excelencia, buena calefacción y tiene aire
                  acondicionado
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
