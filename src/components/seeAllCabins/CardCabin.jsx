export default function CardCabin({ cabin }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row h-[400px]">
      <div className="relative w-72 h-48 flex-shrink-0">
        <img
          src="https://via.placeholder.com/500x500.png?text=Image+Not+Found"
          alt="Cabin image"
          layout="fill"
          objectFit="cover"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2">{cabin.name}</h2>
        <div className="text-lg mb-2">
          <span className="font-semibold">
            Cabaña de {cabin.rooms} habitaciones para {cabin.capacity} personas
          </span>
        </div>
        {cabin.services &&
          cabin.services.servicios &&
          cabin.services.servicios.wifi && (
            <div className="text-lg mb-2">
              <span className="font-semibold">Wi-Fi</span>
            </div>
          )}
        {cabin.services &&
          cabin.services.servicios &&
          cabin.services.servicios.aire_acondicionado && (
            <div className="text-lg mb-2">
              <span className="font-semibold">Aire acondicionado</span>
            </div>
          )}
        {cabin.services &&
          cabin.services.servicios &&
          cabin.services.servicios.cochera_cubierta && (
            <div className="text-lg mb-2">
              <span className="font-semibold">Cochera</span>
            </div>
          )}
      </div>
    </div>
  );
}
