import { IconButton, ListItem, ListItemText, useTheme } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import moment from "moment"
import { useDispatch } from "react-redux"
import { changeStatus } from "../redux/reducers/todosReducer"

const listItemStyle = {
    width: "90%", 
    margin: "auto", 
    marginBottom: "10px", 
    border: "1px solid"
}

const ToDoCard = ({ todo }) => {
  const dispatch = useDispatch()
  const theme = useTheme()
  const formatDate = date => moment(date).format("MM/DD/YYYY")
  const dates = `Last Date: ${formatDate(todo.updatedAt)}`;

  const handleEdit = (todo) => {
    console.log(todo)
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
        
        <IconButton onClick={() => handleEdit(todo)}>
          <EditIcon/>
        </IconButton>
        <IconButton onClick={() => handleChangeStatus(todo)}>
          {todo.toDoStatusName === 'Created' 
            ?
              <CheckCircleIcon />
            :
              <CheckCircleOutlineIcon />
          }
        </IconButton>
      </ListItem>
  )
}

export default ToDoCard