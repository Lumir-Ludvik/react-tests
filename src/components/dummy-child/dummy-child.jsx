import {useContext, useRef, useState} from "react";
import {KindergartenContext} from "../../context/kindergarten-context";

export const DummyChild = () => {
    const {friend, setFriend} = useContext(KindergartenContext);
    const [triggerRender,setTriggerRender] = useState(true);
    const renderCounter  = useRef(0);

    renderCounter.current = renderCounter.current + 1;

    return (
        <div style={{border: `2px solid violet`, borderRadius: "10px", margin: "1rem"}}>
            <div>I have been rendered {renderCounter.current} of times</div>
            <div style={{color: "red"}}>Context value: {friend}</div>
            <button onClick={() => setFriend(friend + renderCounter.current)}>set CONTEXT!</button>
            <button onClick={() => setTriggerRender(!triggerRender)}>render!</button>
            <div style={{height: "80px", display: "flex", alignItems: "center", justifyContent: "center"}}>I am lonely
                'cause I have no props which is sad. :(
            </div>
        </div>
    )
}
