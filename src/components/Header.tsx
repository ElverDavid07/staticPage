const Header = () => {
  return (
    <>
      <div className="mt-20 lg:w-2/3 w-full">
        <h1 className="text-4xl font-extrabold uppercase tracking-tighter  text-indigo-700">
          Cómo Crear Abundancia Y Alcanzar La Libertad Financiera
        </h1>
        <h2 className="text-gray-700 font-openSans pt-2">
          El entrenamiento estratégico que te enseñará a ganar más dinero y a
          liberarte de los problemas financieros.
        </h2>
      </div>
      <div className=" flex justify-center mt-10">
        <iframe
          className="aspect-video w-full"
          width="1000"
          height="415"
          src="https://www.youtube.com/embed/sOXW0ZnJxbQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Header;
