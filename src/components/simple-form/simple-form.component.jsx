import {useEffect, useState} from "react";

export const SimpleFormComponent = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log("user stopped typing or maybe not idk I just guessed")
        }, 500);

        return () => {
            console.log("remove every other timeout");
            clearTimeout(timeout);
        }
    }, [data])

    return (
        <>
            <p>Simple form page</p>
            <input value={data} onChange={(v) => setData(v.target.value)}></input>
        </>
    )
}