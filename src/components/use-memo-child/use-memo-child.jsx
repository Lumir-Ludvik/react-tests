import {useMemo, useRef} from "react";

export const UseMemoChild = ({myProp, propNotInUseMemo}) => {
    const renderCounter  = useRef(0);

    renderCounter.current = renderCounter.current + 1;
const calculateFriend = useMemo(() => myProp, [myProp]);

    return (
        <div>
            <strong>UseMemo</strong>
            <div>Smart as hell I keep my friend: {calculateFriend} forever</div>
            <div>Not in use memo: {propNotInUseMemo}</div>
            <div>I have been rendered {renderCounter.current} of times</div>
        </div>
    )
}