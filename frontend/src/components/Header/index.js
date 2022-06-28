import Logo from "../../assets/images/logoSvg.svg";
import { Container } from "./styles";
export default function Header() {
    return (
        <Container>
            <img src={Logo} alt="Logo" width="201" />
        </Container>
    );
}
