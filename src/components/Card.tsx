import { card } from "../utils/profile";
import { FiCheckCircle } from "react-icons/fi";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";
const Card1 = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  lg:gap-x-5 md:gap-5 gap-y-5 mt-24">
      {card.map(
        (
          {
            curso,
            descripcion,
            guia,
            modulo,
            paquete,
            precio,
            soporte,
            imagen,
          },
          i
        ) => (
          <Card key={i} color="blue" variant="gradient">
            <CardHeader
              className="py-5 text-white"
              floated={false}
              shadow={false}
              color="transparent"
            >
              <h2 className="font-bold text-center text-3xl capitalize">
                {paquete}{" "}
              </h2>
              <h2 className="flex justify-center py-5">
                <span className="text-2xl font-openSans">$</span>
                <span className="text-5xl">{precio}</span>
                <span className="self-end text-2xl font-openSans">
                  /Dolares
                </span>
              </h2>
            </CardHeader>
            <CardBody>
              <img src={imagen} alt={descripcion} width={"310"} height={"168"} />
              <h2 className="font-semibold text-center py-8 text-white text-xl">
                {descripcion}{" "}
              </h2>
              <div className=" flex flex-col">
                <span className="flex items-center gap-1">
                  <FiCheckCircle /> <span>{curso} </span>
                </span>
                <span className="flex items-center gap-1">
                  <FiCheckCircle /> <span>{modulo} </span>
                </span>
                <span className="flex items-center gap-1">
                  <FiCheckCircle /> <span>{guia} </span>
                </span>
                <span className="flex items-center gap-1">
                  <FiCheckCircle /> <span>{soporte} </span>
                </span>
              </div>
            </CardBody>

            <CardFooter>
              <Button fullWidth ripple={false} color="white" className="text-blue-500 hover:scale-[1.02] active:scale-100 duration-100 " >Comprar ahora</Button>
            </CardFooter>
          </Card>
        )
      )}
    </div>
  );
};

export default Card1;
