import Results from "./components/results";
import Summary from "./components/summary";

function App() {
  return (
    <div className="lg:min-h-screen lg:flex lg:justify-center lg:items-center">
      <div className="flex flex-col lg:flex-row lg:justify-center lg:shadow-2xl lg:rounded-[2rem] lg:overflow-hidden">
        <Results />
        <Summary />
      </div>
    </div>
  );
}

export default App;
