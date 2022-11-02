import {useEffect, useState} from "react";
import "./simple-table.component.scss";
import * as PropTypes from "prop-types";

function NewComponent(props) {
    return <table className={`table ${props.switchColor && "red-header"}`}>
        <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {
            props.data.map(props.callbackfn)
        }
        </tbody>
    </table>;
}

NewComponent.propTypes = {
    switchColor: PropTypes.bool,
    data: PropTypes.arrayOf(PropTypes.any),
    callbackfn: PropTypes.func
};
export const SimpleTableComponent = () => {
    const [data, setData] = useState([]);
    const [ switchColor, setSwitchColor ] = useState(false);

    useEffect(() => {
        setData([
            {
                name: "Tomas Krcmar",
                email: "tomas.krcmar@email.cz"
            },
            {
                name: "Žerald z Vivije",
                email: "zerald.vivije@email.cz"
            }
        ]);

        setTimeout(() => setSwitchColor(!switchColor), 3000);
    }, []);

    useEffect(() => {
        console.log("color changed!");
    }, [switchColor]);

    const deletePerson = (person) => {
        setData([...data.filter(d => d.name !== person.name)]);
    }

    return (
        <>
            <p>Simple Table</p>
            {
              data.length > 0 &&
                <NewComponent switchColor={switchColor} data={data} callbackfn={(d, i) => {
                    return (
                        <tr key={i}>

                            <td>{d.name}</td>
                            <td>{d.email}</td>
                            <td>
                                <button onClick={deletePerson.bind(this, d)}>delete</button>
                            </td>
                        </tr>
                    )
                }}/>
            }
        </>
    )
}