/* this function gets executed after load is complete */
function complete(event) {
  console.log(event);
}

window.addEventListener("load", complete);
