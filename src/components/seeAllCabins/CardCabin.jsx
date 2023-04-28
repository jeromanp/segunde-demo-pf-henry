export default function CardCabin({ cabin }) {
  return (
    <div className="border rounded-2xl border-2 overflow-hidden shadow-md flex flex-col md:flex-row m-1">
      <div className="relative w-80 h-56 flex-shrink-0 p-4">
        <img
          src="https://via.placeholder.com/500x500.png?text=Image+Not+Found"
          alt="Cabin image"
          layout="fill"
          objectFit="cover"
          className="border rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="pl-8 pt-6">
        <h2 className="text-brand-green text-2xl font-semibold mb-4">
          {cabin.name}
        </h2>
        <div className="text-lg mb-0.5">
          <i class="ri-user-3-fill text-gray-500 mr-2"></i>
          <span className="text-gray-800 font-normal">
            Cabaña de {cabin.rooms} habitaciones para {cabin.capacity} personas
          </span>
        </div>
        {cabin.services &&
          cabin.services.servicios &&
          cabin.services.servicios.wifi && (
            <div className="text-lg mb-0.5">
              <i class="ri-wifi-line text-gray-500 mr-2"></i>
              <span className="text-gray-800 font-normal">Wi-Fi</span>
            </div>
          )}
        {cabin.services &&
          cabin.services.servicios &&
          cabin.services.servicios.aire_acondicionado && (
            <div className="text-lg mb-0.5">
              <i class="ri-windy-line text-gray-500 mr-2"></i>
              <span className="text-gray-800 font-normal">Aire acondicionado</span>
            </div>
          )}
        {cabin.services &&
          cabin.services.servicios &&
          cabin.services.servicios.cochera_cubierta && (
            <div className="text-lg">
              <i class="ri-car-fill text-gray-500 mr-2"></i>
              <span className="text-gray-800 font-normal">Cochera</span>
            </div>
          )}
      </div>
    </div>
  );
}
