export default function Contact() {
  return (
    <section class="px-4 py-8">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-brand-green text-4xl font-bold mb-6 mt-4">
          Contactanos!
        </h2>
        <div className="flex mt-6">
          {/* Aqui iria el Formulario, reemplazarlo por este div */}
          <div className="w-1/2 border h-40 border-gray-300"></div>
          {/* Aqui iria el Formulario, reemplazarlo por este div  */}
          <img src="/contact.svg" alt="contact.icon" className="w-1/2 h-auto mr-4"/>
        </div>
      </div>
    </section>
  );
}
