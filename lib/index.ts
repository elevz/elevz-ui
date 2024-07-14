import "./index.css";
import colors from "./colors";
import { generateCSSVariables } from "./utils";
export * from "./components";
export * from "./hooks";
export * from "./utils";
export { ElevzProvider } from "./provider/ElevzProvider";

generateCSSVariables(colors)