import {useNavigate} from "react-router-dom";
import "./main-page.component.scss";

export const MainPageComponent = () => {
    const navigate = useNavigate();

    const showPage = (page) => {
        navigate(page);
    }

    return (
        <>
            <div className="main-page">
                <p>Welcome to nothing!</p>
                <div>
                    <button onClick={showPage.bind(this, "form")}>To form</button>
                    <button onClick={showPage.bind(this, "table")}>To Table</button>
                </div>
                <div>
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
