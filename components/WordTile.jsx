const WordTile = ({children}) => (
    <div style={{
        lineHeight: "2rem",
        textTransform: "uppercase",
        backgroundColor: "#538d4e",
        padding: "1rem",
        fontWeight: "bold",
        color: "#fff",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        {children}
    </div>
)

export default WordTile;