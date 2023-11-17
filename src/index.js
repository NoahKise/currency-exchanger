import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { convert } from "./js/function";


async function handleFormSubmission(e) {
  e.preventDefault();
  const cur1 = document.getElementById("cur1").value;
  const cur2 = document.getElementById("cur2").value;
  const amt = document.getElementById("amount").value;
  const conversion = await convert(cur1, cur2, amt);
  console.log(conversion);
}


document.getElementById("converter").addEventListener("submit", handleFormSubmission);