import React, {useEffect, useState} from "react";
import "./simple-table.component.scss";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deletePerson} from "../../../redux/simple-form/simpleFormSlice";

export const SimpleTableComponent = () => {
    const tableData = useSelector(state => state.simpleForm);
    const [data, setData] = useState([...tableData]);
    const [switchColor, setSwitchColor] = useState(false);

    useEffect(() => {
        setData([
            ...tableData
        ]);

        setTimeout(() => setSwitchColor(!switchColor), 3000);
    }, [tableData]);

    useEffect(() => {
        console.log("color changed!");
    }, [switchColor]);

    const dispatch = useDispatch();

    const remove = (person) => {
        dispatch(deletePerson(person))
    }

    const navigate = useNavigate();

    return (
        <div className={"simple-table"}>
            <p>Simple Table</p>
            <button onClick={() => navigate("/")}>Back</button>
            {
                data.length > 0 &&
                <table className={`table ${switchColor && "red-header"}`}>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((d, i) => {
                            return (
                                <tr key={i}>

                                    <td>{d.name}</td>
                                    <td>{d.email}</td>
                                    <td>
                                        <button onClick={remove.bind(this, d)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            }
        </div>
    )
}
