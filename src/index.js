import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import { API } from "./js/function";


async function handleFormSubmission(e) {
  e.preventDefault();
  const cur1Element = document.getElementById("cur1");
  const cur1 = cur1Element.value;
  const cur1Name = cur1Element.options[cur1Element.selectedIndex].text;
  const cur2Element = document.getElementById("cur2");
  const cur2 = cur2Element.value;
  const cur2Name = cur2Element.options[cur2Element.selectedIndex].text;
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
    const conversion = document.createElement("p");
    conversion.append(amt + " " + cur1Name + " is equal to " + result.conversion_result + " " + cur2Name + ".");
    const body = document.querySelector("body");
    body.append(conversion);
  }
}


document.getElementById("converter").addEventListener("submit", handleFormSubmission);