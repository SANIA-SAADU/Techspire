const quotes = [
  "Health is wealth.",
  "Prevention is better than cure.",
  "Eat clean. Stay fit.",
  "A healthy outside starts from inside."
];

document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];

function search() {
  const input = document.getElementById("symptom").value.toLowerCase();
  const result = healthData[input];
  if (result) {
    localStorage.setItem("result", JSON.stringify(result));
    window.location.href = "result.html";
  } else {
    alert("No data found. Try 'stomach' or 'headache'.");
  }
}
