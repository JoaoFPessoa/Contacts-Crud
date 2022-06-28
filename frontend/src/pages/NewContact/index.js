import Select from "../../components/Select";
import Input from "../../components/Input";
import PageHeader from "../../components/PageHeader";
import Button from "../../components/Button";
import ContactsForm from "../../components/ContactsForm";

export default function NewContact() {
    return (
        <>
            <PageHeader title="Novo contato" />

            <ContactsForm buttonLabel="Cadastrar" />
        </>
    );
}
