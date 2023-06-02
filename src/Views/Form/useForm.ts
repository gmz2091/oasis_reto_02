import { useState } from "react";
import { apiRequest } from "../../api/apiRequest";


const useForm = () => {
    const [values, setValues] = useState<any>({
        text: "",
    });

    const [result, setResult] = useState<any>();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted", values);
        apiRequest(values.text).then((res) => {
            setResult(res);
        });
    }

    return { handleChange, handleSubmit, values, result };

}

export default useForm;