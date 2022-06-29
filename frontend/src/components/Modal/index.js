import { Container, Footer, Overlay } from "./styles";
import Button from "../Button";
import ReactDOM from "react-dom";

export default function Modal({ danger }) {
    return ReactDOM.createPortal(
        <Overlay>
            <Container danger={danger}>
                <h1>Titulo do modal</h1>
                <p>Corpo do modal</p>

                <Footer>
                    <button type="button" className="cancel-button">
                        Cancelar
                    </button>
                    <Button type="button" danger={danger}>
                        Deletar
                    </Button>
                </Footer>
            </Container>
        </Overlay>,
        document.getElementById("modal-root")
    );
}
