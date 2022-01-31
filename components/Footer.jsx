const Footer = ({children}) => (
    <div style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "20px"
    }}>
        {children}
    </div>
)

export default Footer;