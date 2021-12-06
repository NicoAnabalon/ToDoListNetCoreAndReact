import { Grid, useTheme } from "@mui/material";

const Container = ({ children }) => {
    const theme = useTheme()
    return (
        <Grid sx={{ height: "calc(100vh - calc(100vh - 100%))", minHeight: "100vh", backgroundColor: theme.palette.text.main}}>
            {children}
        </Grid>
    )
}

export default Container