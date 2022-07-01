import { useState } from "react";

export default function useErrors() {
    const [errors, setErrors] = useState([]);

    function setError({ field, message }) {
        const errorAlreadyExiste = errors.find(
            (error) => error.field === field
        );
        if (errorAlreadyExiste) {
            return;
        }
        setErrors((prevState) => [...prevState, { field, message }]);
    }
    function removeError(fieldName) {
        setErrors((prevState) =>
            prevState.filter((error) => error.field !== fieldName)
        );
    }
    function getErrorMsgByFieldName(fieldName) {
        return errors.find((error) => error.field === fieldName)?.message;
    }

    return { setError, removeError, getErrorMsgByFieldName, errors };
}
