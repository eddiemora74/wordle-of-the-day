const Body = ({children}) => (
    <div id='main-content' style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transform: "translateY(25%)"
    }}>
        {children}
    </div>
)

export default Body;