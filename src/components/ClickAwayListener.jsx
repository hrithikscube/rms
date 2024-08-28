import { useEffect, useRef } from "react";

const ClickAwayListener = ({ children, onClickAway }) => {
    const ref = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickAway();
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Unbind the event listener on cleanup
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClickAway]);

    return <div ref={ref}>{children}</div>;
};


export default ClickAwayListener