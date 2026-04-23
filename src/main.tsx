import { createRoot } from "react-dom/client";
import App from "./app/App";
// @ts-ignore
import "./styles/index.css";
import "./i18n";

createRoot(document.getElementById("root")!).render(<App />);
