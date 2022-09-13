import React, {useEffect, useReducer, useState} from "react";
import "./custom-reducer-table.component.scss";
import {useNavigate} from "react-router-dom";
import {customSimpleFormReducer, initialTableData} from "../../../native-reducers/customSimpleFomReducer";
import {DummyChildComponent} from "../../dummy-child/dummy-child.component";
import {TableDataContext} from "../../../contexts/contexts";


export const CustomReducerTableComponent = () => {
    const [tableData, dispatch] = useReducer(customSimpleFormReducer, initialTableData);
    const [data, setData] = useState([...tableData]);
    const [switchColor, setSwitchColor] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setData([
            ...tableData
        ]);

        setTimeout(() => setSwitchColor(!switchColor), 3000);
    }, [tableData]);

    useEffect(() => {
        console.log("color changed!");
    }, [switchColor]);


    const remove = (person) => {
        dispatch({type: "REMOVE", payload: {...person}})
    }


    return (
        <TableDataContext.Provider value={tableData}>
            <div className={"custom-table"}>
                <p>Custom reducer Table</p>
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
                <DummyChildComponent title={"custom reducer dummy child"}/>
            </div>
        </TableDataContext.Provider>
    )
}
