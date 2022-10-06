import {useNavigate} from "react-router-dom";
import "./main-page.component.scss";
import {useState} from "react";
import {Steps} from "intro.js-react";
import 'intro.js/introjs.css';

export const MainPageComponent = () => {
    const navigate = useNavigate();
    const [enableSteps, setEnableSteps] = useState(true);
    const [initialStep, setInitialStep] = useState(0);
    const [steps, setSteps] = useState([
        {
            element: ".intro",
            intro: "See I've told you :)",
        },
        {
            element: "#redux",
            intro: "Here you can try out my shitty implementation of redux :)"
        },
        {
            element: "#native",
            intro: "Now look at these even worse native implementation but with less boilerplate :D"
        }
    ]);

    const showPage = (page) => {
        navigate(page);
    }

    const onExit = () => {
        console.log(enableSteps);
        console.log(initialStep);
        console.log(steps);
        setEnableSteps(false);
    };

    return (
        <>
            <Steps
                enabled={enableSteps}
                steps={steps}
                initialStep={initialStep}
                onExit={onExit}
                options={{exitOnOverlayClick: false}}
            />
            <div className="main-page">
                <p>Welcome to nothing!</p>
                <div className={"intro"}>
                    <div className={"info"}>
                        <p onClick={() => setEnableSteps(true)}>Hey click me to make me go wild!</p>
                    </div>
                    <p>Here you can click on two buttons.</p>
                    <p>That's right I have features now!</p>
                </div>
                <div id={"redux"}>
                    <button onClick={showPage.bind(this, "form")}>To form</button>
                    <button onClick={showPage.bind(this, "table")}>To Table</button>
                </div>
                <div id={"native"} >
                    <button onClick={showPage.bind(this, "custom-form")}>To Custom reducer form</button>
                    <button onClick={showPage.bind(this, "custom-table")}>To Custom reducer table</button>
                </div>
            </div>
            <div>
                <p>click something anything...</p>
            </div>
        </>
    )
}
