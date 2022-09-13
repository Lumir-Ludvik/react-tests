import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setPerson} from "../../../redux/simple-form/simpleFormSlice";
import "./simple-form.component.scss";
import {useNavigate} from "react-router-dom";

export const SimpleFormComponent = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log("user stopped typing or maybe not idk I just guessed")
        }, 500);

        return () => {
            console.log("remove every other timeout");
            clearTimeout(timeout);
        }
    }, [name]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addPerson = (event) => {
        event.preventDefault();
        dispatch(setPerson({name, email}));
    }

    return (
        <div class={"simple-form"}>
            <p>Simple form page</p>
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
