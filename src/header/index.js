import htmlToElement from "../utils/htmlToElement";
import "./index.scss";
import Header from "./index.html";
import button from "../components/button";

const header = htmlToElement(Header);
const customButton = button({
  onClick: () => console.log("hello"),
  title: "HELLO",
  className: "customButton",
});
header.appendChild(customButton);

export default header;
