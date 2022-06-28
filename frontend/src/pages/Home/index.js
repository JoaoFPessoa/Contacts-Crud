import arrow from "../../assets/images/arrow.svg";
import edit from "../../assets/images/edit.svg";
import dumbster from "../../assets/images/dumbster.svg";
import {
    Container,
    Header,
    InputSearchContainer,
    ListContainer,
    Card,
} from "./style";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal";

export default function Home() {
    return (
        <Container>
            <Modal />
            <InputSearchContainer>
                <input type="text" placeholder="Pesquise pelo nome..." />
            </InputSearchContainer>
            <Header>
                <strong>3 Contatos</strong>
                <Link to="/new">Novo contato</Link>
            </Header>
            <ListContainer>
                <header>
                    <button type="button">
                        <span>Nome</span>
                        <img src={arrow} alt="Arrow" />
                    </button>
                </header>
                <Card>
                    <div className="info">
                        <div className="contact-name">
                            <strong>Matheus Silva</strong>
                            <small>instagram</small>
                        </div>
                        <span>joaoppessoa@uol.com.br</span>
                        <span>11992400586</span>
                    </div>
                    <div className="actions">
                        <Link to="/edit/123">
                            <img src={edit} alt="Edit" />
                        </Link>

                        <button type="button">
                            <img src={dumbster} alt="Delete" />
                        </button>
                    </div>
                </Card>
            </ListContainer>
        </Container>
    );
}
