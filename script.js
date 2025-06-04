let quotes = JSON.parse(localStorage.getItem("quotes")) || [];

function displayQuotes() {
  const quoteList = document.getElementById("quoteList");
  quoteList.innerHTML = "";

  quotes.forEach((quote, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.innerText = quote;

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.onclick = () => editQuote(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => deleteQuote(index);

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    quoteList.appendChild(li);
  });
}

function addQuote() {
  const input = document.getElementById("quoteInput");
  const quote = input.value.trim();
  if (quote) {
    quotes.push(quote);
    localStorage.setItem("quotes", JSON.stringify(quotes));
    input.value = "";
    displayQuotes();
  }
}

function deleteQuote(index) {
  quotes.splice(index, 1);
  localStorage.setItem("quotes", JSON.stringify(quotes));
  displayQuotes();
}

function editQuote(index) {
  const newQuote = prompt("Edit the quote:", quotes[index]);
  if (newQuote !== null) {
    quotes[index] = newQuote.trim();
    localStorage.setItem("quotes", JSON.stringify(quotes));
    displayQuotes();
  }
}

displayQuotes();