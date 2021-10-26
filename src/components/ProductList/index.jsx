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
let newEvent=JSON.parse(localStorage.getItem(`Kenzie:${type}`))||[]
console.log(newEvent)
  return (
    <div>
      <ContainerProduct>
        {openModal ? (
          <Modal openModal={openModal} id={id} setOpenModal={setOpenModal} />
        ) : (
          <div>
            {type === "formatura" && (
              <ul>
                {event.length>0
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
                  : newEvent.map((item,index)=><li key={index}>
                  <img src={item.image_url} alt={item.name} />
                  <p>{item.name}</p>
                  <buttonRmv>
                    <button
                      onClick={() => handleClick(item.id, "formatura")}
                    >
                      Remover
                    </button>
                  </buttonRmv>
                </li>)}
              </ul>
            )}{" "}
            {type === "casamento" && (
              <ul>
                {event.length>0
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
                  :  newEvent.map((item,index)=><li key={index}>
                  <img src={item.image_url} alt={item.name} />
                  <p>{item.name}</p>
                  <buttonRmv>
                    <button
                      onClick={() => handleClick(item.id, "formatura")}
                    >
                      Remover
                    </button>
                  </buttonRmv>
                </li>)}
              </ul>
            )}
            {type === "confraternizacao" && (
              <ul>
                {event.length>0
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
                  :  newEvent.map((item,index)=><li key={index}>
                  <img src={item.image_url} alt={item.name} />
                  <p>{item.name}</p>
                  <buttonRmv>
                    <button
                      onClick={() => handleClick(item.id, "formatura")}
                    >
                      Remover
                    </button>
                  </buttonRmv>
                </li>)}
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
