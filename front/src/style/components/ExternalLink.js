import { Button } from "@mui/material"


const ExternalLink = ({ href, children }) => {
    return (
        <Button 
            target="blank_"
            href={href}
            color="text"
            style={{textTransform: "none", margin: "4px"}}
            variant="outlined"
        >
            {children}
        </Button>
    )
}

export default ExternalLink