import { useState } from "react";
import isEmailValid from "../../utils/ValidateEmail";
import Button from "../Button";
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import { ButtonContainer, Form } from "./styles";
import useErrors from "../../hooks/useErrors";

export default function ContactsForm({ buttonLabel }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");
    const [errors, setErrors] = useState([]);
    const { setError, removeError, getErrorMsgByFieldName } = useErrors();

    function handleNameChange(event) {
        setName(event.target.value);

        if (!event.target.value) {
            setError({ field: "name", message: "Nome é obrigatório" });
        } else {
            removeError("name");
        }
    }

    function validateEmail(event) {
        if (event.target.value && !isEmailValid(event.target.value)) {
            setError({ field: "email", message: "E-mail inválido" });
        } else {
            removeError("email");
        }
    }
    function handleSubmit(event) {
        event.preventDefault();
        console.log({
            name,
            email,
            phone,
            category,
        });
    }

    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup error={getErrorMsgByFieldName("name")}>
                <Input
                    placeholder="Nome"
                    value={name}
                    onChange={handleNameChange}
                />
            </FormGroup>

            <FormGroup error={getErrorMsgByFieldName("email")}>
                <Input
                    error={getErrorMsgByFieldName("email")}
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    onBlur={validateEmail}
                />
            </FormGroup>

            <FormGroup>
                <Input
                    placeholder="Telefone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
            </FormGroup>

            <FormGroup>
                <Select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="">Categorias</option>
                    <option value="discord">Discord</option>
                    <option value="instagram">Instagram</option>
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type="submit">{buttonLabel}</Button>
            </ButtonContainer>
        </Form>
    );
}
