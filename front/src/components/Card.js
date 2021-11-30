import { Divider, Grid, Typography, useMediaQuery, useTheme } from "@mui/material"


const Card = ({ label, children }) => {
    const theme = useTheme()
    const smallScreen = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        smallScreen === false
            ?
                <Grid 
                    item 
                    xs={6} 
                    style={{padding: "20px"}}
                >
                    <Grid 
                        item 
                        xs={12} 
                        style={{backgroundColor: theme.palette.primary.main}}
                    >
                        <Typography 
                            variant="h4" 
                            sx={{ color: theme.palette.text.main, padding: "10px" }}
                        >
                            {label}
                            <Divider sx={{backgroundColor: theme.palette.text.main}} />
                        </Typography>
                        {children}
                    </Grid>
                </Grid>
            :
                <Grid 
                    item 
                    xs={12} 
                    style={{padding: "10px"}}
                >
                    <Grid 
                        item 
                        xs={12} 
                        style={{backgroundColor: theme.palette.primary.main}}
                    >
                        <Typography 
                            variant="h6"
                            sx={{ color: theme.palette.text.main, padding: "10px" }}
                        >
                            {label}
                            <Divider sx={{backgroundColor: theme.palette.text.main}} />
                        </Typography>
                        {children}
                    </Grid>
                </Grid>
        
    )
}

export default Card