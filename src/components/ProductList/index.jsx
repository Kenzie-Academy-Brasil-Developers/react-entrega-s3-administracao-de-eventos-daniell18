import { buttonRmv, ContainerProduct } from "./style";
import { FormaturaContext } from "../../providers/formatura";
import { useContext, useState } from "react";
import Modal from "../Modal";

const ProductList = ({ type, event, remove }) => {
  const { removeFromFormatura } = useContext(FormaturaContext);
  const [id, setId] = useState();
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e, k) => {
    if (k === "home") {
      setId(e);
      setOpenModal(true);
    }
    if (k === "formatura") {
      removeFromFormatura(e);
    }

    if (k === "casamento") {
      remove(e);
    }
    if (k === "confraternizacao") {
      remove(e);
    }
  };
  return (
    <div>
      <ContainerProduct>
        {openModal ? (
          <Modal openModal={openModal} id={id} setOpenModal={setOpenModal} />
        ) : (
          <div>
            {type === "formatura" && (
              <ul>
                {event
                  ? event.map((item, index) => (
                      <li key={index}>
                        <img src={item.image_url} alt={item.name} />
                        <p>{item.name}</p>
                        <buttonRmv>
                          <button
                            onClick={() => handleClick(item.id, "formatura")}
                          >
                            Remover
                          </button>
                        </buttonRmv>
                      </li>
                    ))
                  : null}
              </ul>
            )}{" "}
            {type === "casamento" && (
              <ul>
                {event
                  ? event.map((item, index) => (
                      <li key={index}>
                        <img src={item.image_url} alt={item.name} />
                        <p>{item.name}</p>
                        <button
                          onClick={() => handleClick(item.id, "casamento")}
                        >
                          Remover
                        </button>
                      </li>
                    ))
                  : null}
              </ul>
            )}
            {type === "confraternizacao" && (
              <ul>
                {event
                  ? event.map((item, index) => (
                      <li key={index}>
                        <img src={item.image_url} alt={item.name} />
                        <p>{item.name}</p>
                        <button
                          onClick={() =>
                            handleClick(item.id, "confraternizacao")
                          }
                        >
                          Remover
                        </button>
                      </li>
                    ))
                  : null}
              </ul>
            )}{" "}
            {type === "Home" && (
              <ul>
                {event
                  ? event.map((item, index) => (
                      <li key={index}>
                        <img src={item.image_url} alt={item.name} />
                        <p>{item.name}</p>
                        <button onClick={() => handleClick(item.id, "home")}>
                          Ver mais
                        </button>
                      </li>
                    ))
                  : null}
              </ul>
            )}
          </div>
        )}
      </ContainerProduct>
    </div>
  );
};
export default ProductList;
