import { useState } from "react";
import isEmailValid from "../../utils/ValidateEmail";
import Button from "../Button";
import FormGroup from "../FormGroup";
import Input from "../Input";
import Select from "../Select";
import { ButtonContainer, Form } from "./styles";
import useErrors from "../../hooks/useErrors";
import formatPhone from "../../utils/ValidatePhone";

export default function ContactsForm({ buttonLabel }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [category, setCategory] = useState("");
    const { setError, removeError, getErrorMsgByFieldName, errors } =
        useErrors();

    const isFormValid = name && errors.length === 0;

    function handleNameChange(event) {
        setName(event.target.value);

        if (!event.target.value) {
            setError({ field: "name", message: "Nome é obrigatório" });
        } else {
            removeError("name");
        }
    }
    function handlePhoneChange(event) {
        setPhone(formatPhone(event.target.value));
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
                    type="email"
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
                    onChange={handlePhoneChange}
                    maxLength="15"
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
                <Button disabled={!isFormValid} type="submit">
                    {buttonLabel}
                </Button>
            </ButtonContainer>
        </Form>
    );
}
