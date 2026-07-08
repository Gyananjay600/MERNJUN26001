import "./App.css";
import Card from "./Card";
// import Home from "./Home";
// import Profile from "./Profile";

const products = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRaVTk0IvFgL9LJ60mEJfgb0xCceI9pNJmbZXwONifA&s",
    title: "Cat Title",
    desc: "this is the nice cat ",
  },
  {
    img: "https://img.magnific.com/free-vector/cute-simple-elephant-cartoon-isolated_1308-140154.jpg",
    title: "Elephant Title",
    desc: "this is the nice elephant ",
  },
  {
    img: "https://www.shutterstock.com/image-photo/tiger-peacefully-reclined-on-mossy-260nw-2519850751.jpg",
    title: "Tiger Title",
    desc: "this is the nice Tiger ",
  },
  {
    img: "https://plus.unsplash.com/premium_photo-1677850452987-d3ff550db018?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2hpdGUlMjBjb3d8ZW58MHx8MHx8fDA%3D",
    title: "Cow Title",
    desc: "this is the nice Cow ",
  },
  {
    img: "https://img.magnific.com/free-photo/closeup-adorable-golden-retriever-snowy-road-daylight_181624-60951.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Dog Title",
    desc: "this is the nice Dog ",
  },
  {
    img: "https://imgs.search.brave.com/P8NF87YHnartVbutbMOcjl5NaSNA0Y3-hdU_jn5_hbk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjMv/MzA0LzM0My9zbWFs/bC9jdXRlLW1vbmtl/eS1vbi10aGUtZm9y/ZXN0LWFpLWdlbmVy/YXRlLXBob3RvLmpw/Zw",
    title: "Monkey Title",
    desc: "this is the nice Monkey ",
  },
  {
    img: "https://imgs.search.brave.com/fBgfI6knSODEDkQCfMl2oMyKCswOb84e22VHcBTxUQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJpdGFubmljYS5j/b20vNzAvMjI2Mzcw/LTAwNC1GMUVFQjg3/RS5qcGc",
    title: "Lion Title",
    desc: "this is the nice Lion ",
  },
  {
    img: "https://img.magnific.com/free-photo/closeup-adorable-golden-retriever-snowy-road-daylight_181624-60951.jpg?semt=ais_hybrid&w=740&q=80",
    title: "Dog Title",
    desc: "this is the nice Dog ",
  },

];

function App() {
  return (
    <>
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.title} product={product} />
        ))}
      </div>
    </>
  );
}

export default App;
