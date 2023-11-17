import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { API } from "./js/function";


async function handleFormSubmission(e) {
  e.preventDefault();
  const cur1 = document.getElementById("cur1").value;
  const cur2 = document.getElementById("cur2").value;
  const amt = document.getElementById("amount").value;
  const { result, error } = await API.convert(cur1, cur2, amt);
  if (error) {
    const detailedError = {
      message: 'There was an error in your API request',
      errorType: error.message,
    };
    console.log(detailedError);
  } else {
    console.log(result);
  }
}


document.getElementById("converter").addEventListener("submit", handleFormSubmission);