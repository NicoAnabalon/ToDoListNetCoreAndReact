import { ButtonGroup, IconButton, ListItem, ListItemText, useMediaQuery, useTheme } from "@mui/material"
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import moment from "moment"
import { useDispatch } from "react-redux"
import { changeStatus, deleteToDo } from "../redux/reducers/todosReducer"
import UpdateForm from "./UpdateForm";

const listItemStyle = {
    width: "90%", 
    margin: "auto", 
    marginBottom: "10px", 
    border: "1px solid"
}

const ToDoCard = ({ todo }) => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const smallScreen = useMediaQuery(theme.breakpoints.down('md'))
  const formatDate = date => moment(date).format("MM/DD/YYYY")
  const dates = `Last Date: ${formatDate(todo.updatedAt)}`;

  const handleDelete = (todo) => {
    dispatch(deleteToDo(todo.id))
  }

  const handleChangeStatus = (todo) => {
    const id = todo.id
    const payload = {
      Id: todo.id,
      Content: todo.content,
      ToDoStatusId: todo.toDoStatusId === 1 ? 2 : 1
    }
    dispatch(changeStatus(id, payload))
  }

  return (
    smallScreen === false
      ?
        <ListItem
          key={todo.id}
          sx={{
            ...listItemStyle, 
            borderColor: theme.palette.text.main, 
            color: theme.palette.text.main, 
            '& p': {
              color: theme.palette.text.main
            }, 
            '& svg': {
              color: theme.palette.text.main
            }
          }}
        >
          <ListItemText primary={todo.content} secondary={dates} color="text" />
          <UpdateForm todo={todo}/>
          <IconButton onClick={() => handleChangeStatus(todo)}>
            {todo.toDoStatusName === 'Created' 
              ?
                <CheckCircleIcon />
              :
                <CheckCircleOutlineIcon />
            }
          </IconButton>
          <IconButton onClick={() => handleDelete(todo)}>
            <DeleteForeverIcon/>
          </IconButton>
        </ListItem>
      :
        <ListItem
          key={todo.id}
          sx={{
            ...listItemStyle, 
            borderColor: theme.palette.text.main, 
            color: theme.palette.text.main, 
            '& p': {
              color: theme.palette.text.main
            }, 
            '& svg': {
              color: theme.palette.text.main
            }
          }}
        >
          <ListItemText primary={todo.content} secondary={dates} color="text" />
          <ButtonGroup orientation="vertical">
            <UpdateForm todo={todo}/>
            <IconButton onClick={() => handleChangeStatus(todo)}>
              {todo.toDoStatusName === 'Created' 
                ?
                  <CheckCircleIcon />
                :
                  <CheckCircleOutlineIcon />
              }
            </IconButton>
            <IconButton onClick={() => handleDelete(todo)}>
              <DeleteForeverIcon/>
            </IconButton>
          </ButtonGroup>
        </ListItem>
  )
}

export default ToDoCard