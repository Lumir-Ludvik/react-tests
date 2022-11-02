import {useContext, useRef, useState} from "react";
import {KindergartenContext} from "../../context/kindergarten-context";

export const DummyChildWithProps = (props) => {
    const {friend, setFriend} = useContext(KindergartenContext);
    const [triggerRender,setTriggerRender] = useState(true);
    const renderCounter  = useRef(0);

    renderCounter.current = renderCounter.current + 1;

    return (
        <div style={{border: `2px solid ${props.color}`, borderRadius: "10px", margin: "1rem"}}>
            <div>I have been rendered {renderCounter.current} of times</div>
            <button onClick={() => setTriggerRender(!triggerRender)}>render!</button>
            <div style={{color: "red"}}>Context value: {friend}</div>
            <button onClick={() => setFriend(friend + renderCounter.current)}>set CONTEXT!</button>
            <div style={{height: "80px", display: "flex", alignItems: "center", justifyContent: "center"}}>Yay!!! I have
                finally found a my one and only friend: {props.myProp} :D
            </div>
            {props.children}
        </div>
    )
}
