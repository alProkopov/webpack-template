import './index.scss'
import htmlToElement from '../../utils/htmlToElement';
import ButtonHTML from './index.html'

const button = ({ onClick, title, className }) => {
  const buttonElement = document.createElement("button");
  buttonElement.classList.add("button");
  // const buttonElement = htmlToElement(ButtonHTML)

  buttonElement.addEventListener("click", onClick);
  buttonElement.innerHTML = title;
  buttonElement.classList.add(className);
  return buttonElement
};

export default button;
