const codedStringInput = document.getElementById("codedString");

codedStringInput.addEventListener("input", function () {
  const errorElement = document.getElementById("error");
  errorElement.textContent = "";
});

const decodeBtn = document.getElementById("decodeBtn");

decodeBtn.addEventListener("click", function () {
  const codedString = document.getElementById("codedString").value;
  const errorElement = document.getElementById("error");

  if (codedString.trim() === "") {
    errorElement.textContent =
      "Por favor, complete todos los campos antes de decodificar.";
    return;
  }

  const decodedResult = decodeString(codedString);

  document.getElementById("result").innerHTML = JSON.stringify(decodedResult);

  errorElement.textContent = "";
});

function decodeString(codedString) {
  const parts = codedString.split("000");
  const first_name = parts[0];
  const last_name = parts[1];
  const id = parts[2];

  const decodedResult = {
    first_name,
    last_name,
    id,
  };

  return decodedResult;
}
