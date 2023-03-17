import "./styles.css";
import useFetch from "./useFetch";
import useWindowResize from "./useWindowResize";
export default function App() {
  const { width, height } = useWindowResize();
  const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div className="App">
      <h1>{width}</h1>
      <h1>{height}</h1>
      {data && data.map((item, i) => <h1 key={i}>{item.title}</h1>)}
    </div>
  );
}
