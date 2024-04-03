// import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import BottonContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <BottonContainer></BottonContainer>
    </div>
  );
}

export default App;
