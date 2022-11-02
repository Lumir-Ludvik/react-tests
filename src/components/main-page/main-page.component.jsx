import {useNavigate} from "react-router-dom";
import {useRef, useState} from "react";
import {DummyChild} from "../dummy-child/dummy-child";
import {DummyChildWithProps} from "../dummy-child-with-props/dummy-child-with-props";
import {KindergardenOfSuprises} from "../kindergarden-of-suprises/kindergarden-of-suprises";

const constantFriend = "Tom the constant friend";

export const MainPageComponent = () => {
    const navigate = useNavigate();
    const [triggerRender,setTriggerRender] = useState(true);
    const [friend, setFriend] = useState("Tom the friendly");
    const renderCounter  = useRef(0);

    renderCounter.current = renderCounter.current + 1;

    const showPage = (page) => {
       navigate(page);
     }

    return (
        <>
            <div>number of renders: {renderCounter.current}</div>
            <div>
                <button onClick={() => setTriggerRender(!triggerRender)}>render!</button>
            </div>
            <strong>A little idiotic child</strong>
            <DummyChild />
            <strong>Child with props</strong>
            <DummyChildWithProps myProp={friend} color={"blue"} />
            <strong>Child with const as a prop</strong>
            <DummyChildWithProps myProp={constantFriend} color={"green"} />
            <strong>Kindergarten of Surprises</strong>
            <KindergardenOfSuprises />
            <div>
                <p>Welcome to nothing!</p>
                <button onClick={showPage.bind(this, "form")}>To form</button>
                <button onClick={showPage.bind(this, "table")}>To Table</button>
            </div>
            <div>
                <p>click something anything</p>
            </div>
        </>
    )
}