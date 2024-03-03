import Calculator from "./components/calculator";
import Container from "./components/container";
import Header from "./components/header";
import Keyboard from "./components/keyboard";
import Screen from "./components/screen";

const App = () => {
  return (
    <Container>
      <Calculator>
        <Header />
        <Screen />
        <Keyboard />
      </Calculator>
    </Container>
  );
};

export default App;
