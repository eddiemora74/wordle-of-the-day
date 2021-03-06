import Image from "next/image";

const MediaIconContainer = ({children}) => (
    <div style={{
        cursor: "pointer",
        opacity: "0.5"
    }}>
        {children}
    </div>
)


const MediaIcon = ({link, src, alt}) => {
    return (
        <MediaIconContainer>
            <a href={link} target="_blank" rel="noreferrer">
                <Image
                    src={src}
                    alt={alt}
                    width={32}
                    height={32}
                />
            </a>
        </MediaIconContainer>
    );
}

export default MediaIcon;