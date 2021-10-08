import { Card, CardContent, ContainerModal, ContentModal } from "./style";
import { CatalogueContext } from "../../providers/catologue";
import { useContext, useState } from "react";
import { FormaturaContext } from "../../providers/formatura";
import { CasamentoContext } from "../../providers/casamento";
import { ConfraternizacaoContext } from "../../providers/confraternizacao";

const Modal = ({ setOpenModal, openModal, id }) => {
  const { addToFormatura } = useContext(FormaturaContext);
  const { addToCasamento } = useContext(CasamentoContext);
  const { addToConfraternizacao } = useContext(ConfraternizacaoContext);
  const [teste, setTeste] = useState();
  const { catalogue } = useContext(CatalogueContext);
  const handleClick = (e, item) => {
    if (e === "Formatura") {
      addToFormatura(item);
    }
    if (e === "Casamento") {
      addToCasamento(item);
    }
    if (e === "Confraternização") {
      addToConfraternizacao(item);
    }
    setOpenModal(false);
  };
  const Modal = (e) => {
    if (e.target.id === "Modal") {
      setOpenModal(false);
    }
  };

  return (
    <div>
      <div onClick={(e) => Modal(e)}>
        {openModal ? (
          <ContainerModal id="Modal">
            <ContentModal>
              {catalogue.map((item, index) =>
                item.id === id ? (
                  <Card key={index}>
                    <img src={item.image_url} alt={item.name} />
                    <CardContent>
                      <h5>Nome: {item.name}</h5>
                      <h5>Data: {item.first_brewed}</h5>
                      <h5>Quantidade:{item.volume.value}</h5>
                      <p>Descrição: {item.description}</p>
                      <div>
                        <label for="Eventos">Escolha o Evento:</label>
                        <select
                          id="Eventos"
                          name="Eventos"
                          onChange={(e) => setTeste(e.target.value)}
                        >
                          <option value="#">Eventos</option>
                          <option value="Formatura">Formatura</option>
                          <option value="Casamento">Casamento</option>
                          <option value="Confraternização">
                            Confraternização
                          </option>
                        </select>
                        <input
                          type="submit"
                          value="Submit"
                          onClick={() => handleClick(teste, item)}
                        />
                      </div>
                    </CardContent>
                  </Card>
                ) : null
              )}
            </ContentModal>
          </ContainerModal>
        ) : null}
      </div>
    </div>
  );
};
export default Modal;
