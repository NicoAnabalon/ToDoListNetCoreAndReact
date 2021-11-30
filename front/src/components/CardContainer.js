import { Grid, Box } from '@mui/material'

const CardContainer = ({ children }) => {
    return (
        <Box sx={{width: "80%", margin: "auto", marginTop: "20px",}}>
            <Grid container spacing={2}>
                {children}
            </Grid>
        </Box>
    )
}

export default CardContainer