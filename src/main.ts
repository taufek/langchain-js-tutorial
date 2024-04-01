import { process } from "./helper.js";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    Hello World
  </div>
`
document.getElementById("submit").addEventListener("click", process);
