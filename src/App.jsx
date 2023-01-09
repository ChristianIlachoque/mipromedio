import Average from "./components/Average";
import DegreList from "./components/DegreList";

const App = () => {
  return (
    <div className="bg-emerald-100 h-screen p-2">
      <h1 className="md:text-center font-mono mt-2 bg-emerald-200 text-[30px] text-slate-800">My Acurance App</h1>
      <div className="container mx-auto p-10">
        <DegreList />
        <hr />
        <Average />
      </div>
    </div>
  );
};

export default App;
