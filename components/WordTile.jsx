import { useState } from "react";

const WordTile = ({idx, children}) => {
    const [active, setActive] = useState(false);

    return (
    <div className={active && "active"} onAnimationEnd={() => setActive(true)} style={{
        lineHeight: "2rem",
        textTransform: "uppercase",
        backgroundColor: "#121213",
        border: "1px solid #538d4e",
        padding: "1rem",
        fontWeight: "bold",
        color: "transparent",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        animationName: "flipper",
        animationIterationCount: 1,
        animationDuration: "0.5s",
        animationDelay: (idx * 0.10) + 1 + "s",
        animationTimingFunction: "linear"
    }}>
        {children}
    </div>
)}

export default WordTile;