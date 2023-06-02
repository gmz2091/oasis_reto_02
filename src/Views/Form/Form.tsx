import { useEffect } from "react";
import useForm from "./useForm";

const Form = (): JSX.Element => {
    const { handleChange, handleSubmit, values, result } = useForm();

    useEffect(() => {
        console.log("result", result)
    }, [result])

  return (
    <div>
        <h1>Form</h1>
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter a text" name="text" value={values.text} onChange={handleChange} />
                <button>Submit</button>
            </form>
        </div>
        {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </div>

  )
}

export default Form