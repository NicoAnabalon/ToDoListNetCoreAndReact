import { Button, Divider, IconButton, Modal, TextField, Typography, useTheme } from "@mui/material"
import { textFieldStyle, modalBoxStyle } from "../style/theme"
import EditIcon from '@mui/icons-material/Edit'
import { useState } from "react"
import { Box } from "@mui/system"
import { updateToDo } from "../redux/reducers/todosReducer"
import { useDispatch } from "react-redux"

const UpdateForm = (todo) => {
    const theme = useTheme()
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false)
    const [toDo, setToDo] = useState({id: todo.todo.id, content: todo.todo.content, toDoStatusId: todo.todo.toDoStatusId})

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    const handleUpdate = () => {
        dispatch(updateToDo(toDo.id, toDo))
        handleClose()
    }

    const handleChange = (e) => {
        setToDo({
            id: toDo.id,
            content: e.target.value,
            toDoStatusId: toDo.toDoStatusId
        })
    }
    return (
        <>
            <IconButton
                variant="contained"
                color="primary"
                onClick={handleOpen}
            >
                <EditIcon/>
            </IconButton>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalBoxStyle}>
                    <Typography variant="h6">
                        To Do Update
                    </Typography>
                    <Divider style={{backgroundColor: theme.palette.text.main}}/>
                    <TextField
                        label="To Do"
                        color="text"
                        margin="normal"
                        sx={textFieldStyle}
                        value={toDo.content}
                        onChange={(e) => handleChange(e)}
                        fullWidth
                        autoFocus
                        required
                    />
                    <Button variant="outlined" color="text" style={{margin: "5px"}} onClick={() => handleUpdate()}>Update</Button>
                    <Button variant="outlined" color="text" style={{margin: "5px"}} onClick={handleClose}>Cancel</Button>
                </Box>
            </Modal>
        </>
    )
}

export default UpdateForm