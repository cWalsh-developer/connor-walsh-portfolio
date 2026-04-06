import { createRoot } from "react-dom/client";
import App from "./app/App";
// @ts-expect-error -- CSS side-effect imports are resolved by the bundler.
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(<App />);
