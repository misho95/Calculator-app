import { ReactNode, createContext, useState } from "react";

type PropsType = {
  children: ReactNode;
};

type GlobalContextType = {
  handleKeyPress: (key: string | number) => void;
  screen: string;
  equal: string | null;
};

export const GlobalContext = createContext<null | GlobalContextType>(null);

const Calculator = ({ children }: PropsType) => {
  const [screen, setScreen] = useState("");
  const [number, setNumber] = useState<null | number>(null);
  const [symbol, setSymbol] = useState<string | null>(null);
  const [equal, setEqual] = useState<null | string>(null);

  const doMath = (symbol: string, numberOne: number, numberTwo: number) => {
    switch (symbol) {
      case "+":
        return numberOne + numberTwo;
      case "-":
        return numberOne - numberTwo;
      case "x":
        return numberOne * numberTwo;
      case "/":
        return numberOne / numberTwo;
      default:
        return 0;
    }
  };

  const handleSymbolSet = (key: string) => {
    if (!number) {
      setNumber(+screen);
      setSymbol(key);
      setScreen("");
    }
    if (number) {
      handleSymbol("=");
      setSymbol(key);
    }
  };

  const handleSymbol = (key: string) => {
    switch (key) {
      case "DEL":
        if (!equal) {
          setScreen(screen.slice(0, screen.length - 1));
        } else {
          setEqual(equal.slice(0, equal.length - 1));
        }
        break;
      case "+":
        handleSymbolSet(key);
        break;
      case "-":
        handleSymbolSet(key);
        break;
      case "x":
        handleSymbolSet(key);
        break;
      case "/":
        handleSymbolSet(key);
        break;
      case "=":
        if (number && symbol) {
          const equal = doMath(symbol, number, +screen);
          setEqual(equal.toString());
          setScreen("");
          setNumber(null);
        }
        break;
      case "RESET":
        setScreen("");
        setEqual(null);
        setNumber(null);
        setSymbol(null);
    }
  };

  const handleScreen = (key: number | string) => {
    if (!equal) {
      setScreen(screen.concat(key.toString()));
    } else {
      setNumber(+equal);
      setEqual(null);
      setScreen(screen.concat(key.toString()));
    }
  };

  const handleKeyPress = (key: string | number) => {
    switch (typeof key) {
      case "string":
        if (key === ".") {
          handleScreen(key);
          break;
        }
        handleSymbol(key);
        break;
      case "number":
        handleScreen(key);
        break;
    }
  };

  return (
    <GlobalContext.Provider value={{ handleKeyPress, screen, equal }}>
      <div className="w-[327px] sm:w-[540px] h-[708px] flex flex-col gap-[20px]">
        {children}
      </div>
    </GlobalContext.Provider>
  );
};

export default Calculator;
