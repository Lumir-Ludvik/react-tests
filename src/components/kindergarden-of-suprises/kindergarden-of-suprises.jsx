import {DummyChildWithProps} from "../dummy-child-with-props/dummy-child-with-props";
import {DummyChild} from "../dummy-child/dummy-child";
import {useRef, useState} from "react";
import {MemoChildWithProps} from "../memo-child/memo-child";
import {UseMemoChild} from "../use-memo-child/use-memo-child";
import {UseMemoAndMemo} from "../use-memo-child/use-memo-with-memo-child";
import {KindergartenContext} from "../../context/kindergarten-context";

export const KindergardenOfSuprises = () => {
    const [triggerRender, setTriggerRender] = useState(true);
    const [friend, setFriend] = useState("Karl")
    const [otherProp, setOtherProp] = useState("a")
    const renderCounter = useRef(0);

    renderCounter.current = renderCounter.current + 1;

    return (
        <div style={{border: `2px solid black`, borderRadius: "10px", margin: "1rem"}}>
            <KindergartenContext.Provider value={{friend, setFriend}}>
                <div>I have been rendered {renderCounter.current} of times</div>
                <button onClick={() => setTriggerRender(!triggerRender)}>render!</button>
                <button onClick={() => setFriend(friend + renderCounter.current)}>change friend!</button>
                <DummyChildWithProps color={"blue"}>
                    <DummyChild/>
                </DummyChildWithProps>
                <h1>
                    <strong>Smart Kids</strong>
                </h1>
                <MemoChildWithProps myProp={friend}/>
                <button onClick={() => setOtherProp(otherProp + renderCounter.current)}>change not memorized prop!
                </button>
                <UseMemoChild myProp={friend} propNotInUseMemo={otherProp}/>
                <UseMemoAndMemo myProp={friend} propNotInUseMemo={otherProp}/>
            </KindergartenContext.Provider>
        </div>
    )
}