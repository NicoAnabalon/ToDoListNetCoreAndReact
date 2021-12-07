import { Button, Modal, Box, Typography, useTheme, Divider, TextField, Snackbar, Alert } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import { addBtnStyle, textFieldStyle, modalBoxStyle } from "../style/theme";
import { postToDo } from "../redux/reducers/todosReducer";
import { useDispatch } from "react-redux";

const CreationForm = () => {
    const dispatch = useDispatch()
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    const [toDo, setToDo] = useState("")
    const [notification, setNotification] = useState({message: "", severity:"", open: false})

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleCreation = () => {
        if(toDo.trim().length !== 0) {
            const payload = {
                content: toDo,
                toDoStatusId: 1
            }
            dispatch(postToDo(payload))
            handleClose()
        } else {
            setNotification({
                message: "You must describe your ToDo!",
                severity: "error",
                open: true
            })
        }
    }

    const handleCloseSnackbar = () => {
        setNotification({
            message: "",
            severity: "",
            open: false
        })
    }

    return (
        <>
            <Button 
                variant="contained"
                color="primary"
                style={addBtnStyle}
                onClick={handleOpen}
            >
                <AddIcon color="text"/>
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalBoxStyle}>
                    <Typography variant="h6">
                        To Do Creation
                    </Typography>
                    <Divider style={{backgroundColor: theme.palette.text.main}}/>
                    <TextField
                        label="To Do"
                        color="text"
                        margin="normal"
                        sx={textFieldStyle}
                        onChange={e => setToDo(e.target.value)}
                        fullWidth
                        autoFocus
                        required
                    />
                    <Button variant="outlined" color="text" style={{margin: "5px"}} onClick={handleCreation}>Create</Button>
                    <Button variant="outlined" color="text" style={{margin: "5px"}} onClick={handleClose}>Cancel</Button>
                </Box>
            </Modal>
            {notification.open
                ?
                    <Snackbar
                        open={notification.open}
                        autoHideDuration={3000}
                        onClose={handleCloseSnackbar}
                    >
                        <Alert onClose={handleCloseSnackbar} severity={notification.severity} sx={{ width: '100%' }}>
                            {notification.message}
                        </Alert>
                    </Snackbar>
                :
                    null
            }
        </>
    )
}

export default CreationForm