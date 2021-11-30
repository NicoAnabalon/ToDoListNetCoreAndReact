import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#3F3351",
        },
        secondary: {
            main: "#864879",
        },
        shadow: {
            main: "#1F1D36",
        },
        text: {
            main: "#E9A6A6",
        },
    },
})

export const addBtnStyle = { 
    position: "absolute", 
    bottom: 10, 
    right: 10,
    borderRadius: '50%',
    height: '60px',
    width: '50px'
}

export const textFieldStyle = {
    borderColor: theme.palette.text.main,
    '& .MuiOutlinedInput-root': { 
        '& input': {
            color: theme.palette.text.main,
        },
        '& fieldset': {
            borderColor: theme.palette.text.main,
        },
        '&:hover fieldset': {
            borderColor: theme.palette.shadow.main,
        },
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.text.main,
    },
}

export const modalBoxStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    bgcolor: theme.palette.primary.main,
    border: `2px solid ${theme.palette.primary.main}`,
    boxShadow: `5px 7px 5px ${theme.palette.shadow.main}`,
    p: 4,
    color: theme.palette.text.main,
    textAlign: "center"
}

export default theme;