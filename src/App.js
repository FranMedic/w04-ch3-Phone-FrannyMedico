import "./App.css";
import Display from "./components/Display/Display";
import Info from "./components/Info/Info";
import Key from "./components/Key/Key";

function App() {
  const numbers = [
    { id: 1, type: true, text: "1" },
    { id: 2, type: true, text: "2" },
    { id: 3, type: true, text: "3" },
    { id: 4, type: true, text: "4" },
    { id: 5, type: true, text: "5" },
    { id: 6, type: true, text: "6" },
    { id: 7, type: true, text: "7" },
    { id: 8, type: true, text: "8" },
    { id: 9, type: true, text: "9" },
    { id: 10, type: true, text: "0" },
    { id: "delete", type: false, text: "Delete" },
  ];
  const patata = () => {
    console.log("ayuda");
  };
  return (
    <>
      <div className="container">
        <Info calling={true} />
        <main className="phone">
          <div className="keyboard-container">
            <ol className="keyboard">
              {numbers.map((number, i) => (
                <Key
                  key={number.id}
                  text={number.text}
                  classinfo={number.text}
                  actionOnClick={patata}
                />
              ))}
              ;
            </ol>
          </div>
          <div className="actions">
            <Display numberString={"12345"} />
            <a href="#" className="call">
              Call
            </a>
            <a href="#" className="hang active">
              Hang
            </a>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
