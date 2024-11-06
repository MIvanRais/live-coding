import { useState } from "react";

const listColor = ["red", "green", "blue", "cyan", "brown"];

function randomIdx(arr) {
  return Math.floor(Math.random() * arr.length);
}

function App() {
  const [color, setColor] = useState("red");

  const handleChangeColor = () => {
    let idx = randomIdx(listColor);
    setColor(listColor[idx]);
  };

  return (
    <>
      <section className="mx-auto grid h-full w-[1280px] grid-cols-4">
        <header
          className="col-span-4 text-center font-bold text-white"
          style={{ backgroundColor: color }}
          onClick={handleChangeColor}
        >
          Header
        </header>
        <main className="col-span-4 row-span-3 grid grid-cols-subgrid">
          <aside className="row-span-2 bg-orange-400 font-bold text-white">
            Aside
          </aside>
          <section className="bg-amber-950 font-bold text-white">
            Content 1
          </section>
          <section className="bg-amber-500 font-bold text-white">
            Content 2
          </section>
          <section className="bg-lime-400 font-bold text-white">
            Content 3
          </section>
          <section className="col-span-3 bg-green-500 font-bold text-white">
            Content 4
          </section>
        </main>
        <footer className="col-span-4 bg-orange-500 font-bold text-white">
          Footer
        </footer>
      </section>
    </>
  );
}

export default App;
