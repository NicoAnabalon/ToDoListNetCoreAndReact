import { useTheme } from '@mui/material/styles';
import Header from "./style/components/Header";
import Container from "./style/components/Container";

function App() {
  const theme = useTheme()
  console.log(theme.palette.text.main)
  return (
    <Container>
      <Header/>
    </Container>
  );
}

export default App;
