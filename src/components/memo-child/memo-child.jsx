import {memo, useRef} from "react";

const MemoChild = ({myProp}) => {
    const renderCounter  = useRef(0);

    renderCounter.current = renderCounter.current + 1;

    return (
        <div>
            <strong>Memo export</strong>
            <div>Smart as hell I keep my friend: {myProp} forever</div>
            <div>I have been rendered {renderCounter.current} of times</div>
        </div>
    )
}

export const MemoChildWithProps = memo(MemoChild)