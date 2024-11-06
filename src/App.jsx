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
      <section class="mx-auto grid h-full w-[1280px] grid-cols-4">
        <header
          class="col-span-4 text-center font-bold text-white"
          style={{ backgroundColor: color }}
          onClick={handleChangeColor}
        >
          Header
        </header>
        <main class="col-span-4 row-span-3 grid grid-cols-subgrid">
          <aside class="row-span-2 bg-orange-400 font-bold text-white">
            Aside
          </aside>
          <section class="bg-amber-950 font-bold text-white">Content 1</section>
          <section class="bg-amber-500 font-bold text-white">Content 2</section>
          <section class="bg-lime-400 font-bold text-white">Content 3</section>
          <section class="col-span-3 bg-green-500 font-bold text-white">
            Content 4
          </section>
        </main>
        <footer class="col-span-4 bg-orange-500 font-bold text-white">
          Footer
        </footer>
      </section>
    </>
  );
}

export default App;
