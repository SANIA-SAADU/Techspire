let elderOn = false;

function toggleElderMode() {
  const body = document.body;
  elderOn = !elderOn;
  if (elderOn) {
    body.style.fontSize = "22px";
    body.style.backgroundColor = "#f5f5dc";
  } else {
    body.style.fontSize = "16px";
    body.style.backgroundColor = "white";
  }
}
