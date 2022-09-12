import {useNavigate} from "react-router-dom";

export const MainPageComponent = () => {
    const navigate = useNavigate();

    const showPage = (page) => {
       navigate(page);
     }

    return (
        <>
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