import {useContext} from "react";
import "./dummy-page.component.scss";
import {TableDataContext} from "../../contexts/contexts";

export const DummyChildComponent = ({title}) => {
    const tableData = useContext(TableDataContext);

    return (
        <>
            <p>{title}</p>
            {tableData.map((d, i) => {
                return (
                    <div key={i} className={"dummy-page-container"}>
                        <div>{d.name}</div>
                        <div>{d.email}</div>
                    </div>
                )
            })}
        </>
    )
}
