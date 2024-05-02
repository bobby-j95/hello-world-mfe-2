import HelloWorld from "./HelloWorld";
import ReactDOM from "react-dom/client";

const mount = (el: Element) => {
    ReactDOM.createRoot(el).render(<HelloWorld />)
}

export default mount