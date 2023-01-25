import Board from "./components/Board";

function App() {
  return (
    <div className="min-h-screen p-8 text-slate-800 bg-gradient-to-r from-cyan-500 to-blue-500">
      <h1 className="text-center font-fredoka text-5xl text-white mb-4">
        Tic Tac Toe Game
      </h1>
      <Board />
    </div>
  );
}

export default App;
