import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ExternalLink from './ExternalLink';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => {
    const theme = useTheme()
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" component="div" sx={{ flexGrow: 1, color: theme.palette.text.main }}>
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
        </AppBar>
      </Box>
    )
}

export default Header;