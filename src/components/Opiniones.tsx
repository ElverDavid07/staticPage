import { opiniones } from "../utils/opiniones";

const Opiniones = () => {
  return (
    <div className="mt-28 lg:mx-28 md:mx-16 mx-0">
      <h2 className="text-3xl text-indigo-700 uppercase font-obuntu tracking-tighter pt-28 pb-10">
        Algunas Opiniones Y Testimonios...
      </h2>
      <section className=" flex gap-y-10 flex-col">
        {opiniones.map(({ comentario, nombre }, i) => (
          <h2
            key={i}
            className="flex-col flex gap-y-2 border rounded border-gray-300 px-2 py-5 bg-white"
          >
            {nombre}{" "}
            <span className="font-openSans text-gray-800">{comentario} </span>
          </h2>
        ))}
      </section>
    </div>
  );
};

export default Opiniones;
