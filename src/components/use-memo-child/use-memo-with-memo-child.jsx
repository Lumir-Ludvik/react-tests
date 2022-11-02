import {memo, useMemo, useRef} from "react";

const UseMemoWithMemoChild = ({myProp, propNotInUseMemo}) => {
    const renderCounter  = useRef(0);

    renderCounter.current = renderCounter.current + 1;
    const calculateFriend = useMemo(() => myProp, [myProp]);

    return (
        <div>
            <strong>UseMemo and Memo</strong>
            <div>Smart as hell I keep my friend: {calculateFriend} forever</div>
            <div>Not in use memo: {propNotInUseMemo}</div>
            <div>I have been rendered {renderCounter.current} of times</div>
        </div>
    )
}

export const UseMemoAndMemo = memo(UseMemoWithMemoChild);