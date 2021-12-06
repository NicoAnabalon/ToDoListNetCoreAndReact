import Header from "./components/Header";
import Container from "./components/Container";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import CreationForm from "./components/CreationForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allTodos } from "./redux/reducers/todosReducer";
import ToDoCard from "./components/ToDoCard";
import { Grid, List, Typography, useTheme } from "@mui/material";

function App() {
  const dispatch = useDispatch()
  const theme = useTheme()
  const todos = useSelector(state => state.todos.todos)
  const createdTodos = todos ? todos.filter(todo => todo.toDoStatusName === "Created" ? todo : null) : null
  const completedTodos = todos ? todos.filter(todo => todo.toDoStatusName === "Completed" ? todo : null) : null

  useEffect(() => {dispatch(allTodos())}, [dispatch])
  return (
    <Container>
      <Header/>
        <CardContainer>
          <Card label="Created">
            <List sx={{ width: '100%'}}>
              { createdTodos && createdTodos.length > 0 
                ? 
                  createdTodos.map(todo => <ToDoCard key={todo.id} todo={todo} />) 
                : 
                  <Grid sx={{display: "flex", justifyContent: "center"}}>
                    <Typography variant="p" sx={{color: theme.palette.text.main}}>
                      No To Do's
                    </Typography>
                  </Grid>
              }
            </List>
          </Card>
          <Card label="Completed">
            <List sx={{ width: '100%'}}>
              { completedTodos && completedTodos.length > 0 
                ? 
                  completedTodos.map(todo => <ToDoCard key={todo.id} todo={todo} />) 
                : 
                  <Grid sx={{display: "flex", justifyContent: "center"}}>
                    <Typography variant="p" sx={{color: theme.palette.text.main}}>
                      No To Do's
                    </Typography>
                  </Grid>
              }
            </List>
          </Card>
        </CardContainer>
        <CreationForm />
    </Container>
  );
}

export default App;
