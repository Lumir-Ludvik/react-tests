import React, {useEffect, useReducer, useState} from "react";
import "./custom-reducer-form.component.scss";
import {useNavigate} from "react-router-dom";
import {customSimpleFormReducer, initialTableData} from "../../../native-reducers/customSimpleFomReducer";

export const CustomReducerFormComponent = () => {
    const [tableData, dispatch] = useReducer(customSimpleFormReducer, initialTableData);
    const [name, setName] = useState(tableData.name);
    const [email, setEmail] = useState(tableData.email);

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log("user stopped typing or maybe not idk I just guessed")
        }, 500);

        return () => {
            console.log("remove every other timeout");
            clearTimeout(timeout);
        }
    }, [name]);

    const navigate = useNavigate();
    const addPerson = (event) => {
        event.preventDefault();
        dispatch({type: "ADD", payload: {name, email}});
    }

    return (
        <div class={"custom-reducer-form"}>
            <p>Custom reducer form page</p>
            <button onClick={() => navigate("/")}>Back</button>
            <form onSubmit={addPerson.bind(this)}>
                <div className={"container"}>
                    <label htmlFor={"name"}>Name:</label>
                    <input id="name" value={name} onChange={(v) => setName(v.target.value)}/>
                    <label htmlFor="email">Email:</label>
                    <input id="email" value={email} onChange={(v) => setEmail(v.target.value)}/>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
