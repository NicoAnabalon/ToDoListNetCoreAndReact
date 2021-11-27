import { AppBar, Box, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExternalLink from './ExternalLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
    const theme = useTheme()
    const size = useMediaQuery(theme.breakpoints.down('sm'))
    console.log(size)
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
              {size === false 
                ? 
                  <Toolbar>
                    <Typography variant="h3" sx={{ flexGrow: 1, color: theme.palette.text.main }}>
                      To Do List
                      <Typography variant="h6" component="span" sx={{ flexGrow: 1, color: theme.palette.text.main, marginLeft: "10px" }}>
                        © NicoAnabalon
                      </Typography>
                    </Typography>
                    <ExternalLink href="https://www.linkedin.com/in/nicol%C3%A1s-felipe-anabal%C3%B3n-abarca/">
                      <LinkedInIcon />
                    </ExternalLink>
                    <ExternalLink href="https://github.com/NicoAnabalon">
                      <GitHubIcon />
                    </ExternalLink>
                  </Toolbar>
                : 
                  <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1, color: theme.palette.text.main }}>
                      To Do List
                    </Typography>
                      <ExternalLink href="https://www.linkedin.com/in/nicol%C3%A1s-felipe-anabal%C3%B3n-abarca/">
                        <LinkedInIcon fontSize="sm"/>
                      </ExternalLink>
                      <ExternalLink href="https://github.com/NicoAnabalon">
                        <GitHubIcon  fontSize="sm"/>
                      </ExternalLink>
                  </Toolbar>
              }
        </AppBar>
      </Box>
    )
}

export default Header;