import '/style.css'
import { Header } from '../components/header';

document.querySelector("#app").innerHTML = `
  ${Header()}
`;

setupCounter(document.querySelector('#counter'))
