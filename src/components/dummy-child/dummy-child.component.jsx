import {memo, useContext, useMemo, useState} from "react";
import "./dummy-page.component.scss";
import {TableDataContext} from "../../contexts/contexts";

const DummyChildComponent = ({title, theNothingFunction}) => {
    const tableData = useContext(TableDataContext);
    const [count, setCount] = useState(0);
    const [dummyTrigger, setDummyTrigger] = useState(0);

    const expensiveCalculation = (num, memo = false) => {
        console.log(`calculating... ${memo && "memo" || ""}`);
        for (let i = 0; i < 1_000_000_000; i++) {
            num += 1;
        }
        return num;
    };

    const countMemo = useMemo(() => expensiveCalculation(count, true), [count]);
    const count1 = expensiveCalculation(count);

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
            <p>Wait for it...</p>
            <div>{count1}</div>
            <div>{countMemo}</div>
            <button onClick={() => setDummyTrigger(dummyTrigger + 1)}>Increment dummyTrigger</button>
            <button onClick={theNothingFunction}>Trigger the nothing function</button>
        </>
    )
}
// prevent re-render if nothing changes. Does not work if passing functions from parent component which can re-render (new reference to function)
export default memo(DummyChildComponent);
