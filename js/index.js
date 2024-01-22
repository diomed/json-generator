let jsonArray = [];

const dataInLocalStorage = localStorage.getItem("jsonArray");
const form = document.getElementById("myForm");
const result = document.getElementById("result");

if (dataInLocalStorage) {
  jsonArray = JSON.parse(dataInLocalStorage);
  setResult();
}

form.addEventListener("submit", onFormSubmit, false);

function onFormSubmit(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  jsonArray.push(data);
  setResult();
}

function setResult() {
  result.textContent = JSON.stringify(jsonArray);
  localStorage.setItem("jsonArray", JSON.stringify(jsonArray));
}

function functions() {
  function clearArray() {
    jsonArray = [];
    result.textContent = "";
    localStorage.removeItem("jsonArray");
  }

  if (jsonArray.length === 0) {
    return swal("Error!", "The JSON is already empty.", "error");
  }

  swal({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.value) {
      clearArray();
      swal("Deleted!", "Everything has been deleted.", "success");
    }
  });
}

const copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyToClipboard);

function copyToClipboard() {
  if (jsonArray.length === 0) {
    return swal("Error!", "The JSON is empty.", "error");
  }
  // Make this without an text area
  const textArea = document.createElement("textarea");
  textArea.value = result.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  swal("Copied!", "The JSON has been copied to your clipboard.", "success");
}
