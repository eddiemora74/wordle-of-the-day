const WordTileGroup = ({children}) => (
    <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridGap: "5px"
    }}>
        {children}
    </div>
)

export default WordTileGroup;