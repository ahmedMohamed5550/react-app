import {useState} from "react";

function Form() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");

    const parameterHandler = (setter) => (event) => {
        setter(event.target.value);
    }

    return (
        <form className="react-form" onSubmit = {(e) => {
            e.preventDefault()
            console.log([
                "Name: ", name,
                "Password: ", password,
                "Gender: ", gender
            ])
        } }>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                onChange={parameterHandler(setName)}
            />

            <br /><br />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={parameterHandler(setPassword)}
            />

            <br /><br />

            <label>Gender:</label>
            <label>
                <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={parameterHandler(setGender)}
                />
                Male
            </label>

            <label>
                <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={parameterHandler(setGender)}
                />
                Female
            </label>

            <br /><br />

            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;