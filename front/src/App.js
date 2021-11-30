import Header from "./components/Header";
import Container from "./components/Container";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import CreationForm from "./components/CreationForm";

function App() {
  return (
    <Container>
      <Header/>
        <CardContainer>
          <Card label="Created" />
          <Card label="Completed" />
        </CardContainer>
        <CreationForm />
    </Container>
  );
}

export default App;
