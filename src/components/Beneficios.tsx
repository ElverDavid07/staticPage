import { FcOk } from "react-icons/fc/index.js";
import { beneficios, parrafos } from "src/utils/profile";
const Beneficios = () => {
  return (
    <>
      <h2 className="text-center mt-44 text-indigo-700 text-3xl tracking-tighter font-bold uppercase font-obuntu">
        Beneficios que el entrenamiento tiene para ti
      </h2>
      <div className="grid lg:grid-cols-2 gap-5 pt-10">
        {beneficios.map(({ description }, i) => (
          <div
            key={i}
            className="flex items-center bg-white rounded-lg border py-5 col-span-2 lg:col-span-1"
          >
            <h3 className="flex items-center gap-x-2 text-gray-700 px-2 font-openSans">
              <FcOk className="w-10 h-10" />
              {description}
            </h3>
          </div>
        ))}
      </div>
      <section>
        <h2 className="text-center pt-32 text-3xl text-indigo-700 font-bold tracking-tighter uppercase font-obuntu">
          Y Por Supuesto, La Guía Completa Para Crear Ingresos Pasivos
        </h2>
        <div className="pt-16 flex lg:flex-row flex-col gap-x-8">
          <img
            width={450}
            height={400}
            src="libro.png"
            alt="libro para crear ingresos pasivos"
            className=""
          />
          <article>
            {parrafos.map(({ descripcion }, i) => (
              <p key={i} className="py-6 text-lg font-openSans text-gray-700">
                {descripcion}{" "}
              </p>
            ))}
          </article>
        </div>
      </section>

      <h2 className="mt-36 tracking-tighter text-3xl font-obuntu text-indigo-700 uppercase text-center">
        Escoge A Continuación El Paquete Perfecto Para Ti
      </h2>
    </>
  );
};

export default Beneficios;
