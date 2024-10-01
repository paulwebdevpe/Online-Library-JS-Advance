async function myFetch(inputDisplay) {
  try {
    const response = await fetch(
      `https://openlibrary.org/subjects/${inputDisplay}.json`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    displayBookData(data, inputDisplay);
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector(".result").textContent = "Failed to load data.";
  }
}

function displayBookData(data, inputDisplay) {
  const displayDiv = document.querySelector(".result");

  const matchInput = data.works.filter((work) =>
    work.subject.some((subject) => subject.toLowerCase().includes(inputDisplay))
  );

  const formattedData =
    matchInput.length > 0
      ? `
        <h2>Subject: ${inputDisplay}</h2>
        <ul>
                ${matchInput
                  .map(
                    (work) =>
                      `<li data-key="${work.key}">
                          <img class="book-image" src="https://covers.openlibrary.org/b/id/${
                            work.cover_id
                          }-M.jpg" alt="book cover">
                          <h1 class="title">${work.title} 
                              <p class="author"> by ${work.authors
                                .map((author) => author.name)
                                .join(", ")}
                              </p>
                          </h1>
                        </li>
                        <hr>`
                  )
                  .join("")}
            </ul>
    `
      : `<p>No titles found matching the subject: ${inputDisplay}</p>`;

  displayDiv.innerHTML = formattedData;

  const buttonDesc = document.querySelectorAll(".result ul li");

  buttonDesc.forEach((listButton) => {
    const buttonInfo = document.createElement("button");
    buttonInfo.textContent = "Get Info";
    buttonInfo.setAttribute("alt", "Get Info book");
    listButton.appendChild(buttonInfo);

    buttonInfo.addEventListener("click", () => {
      const listItem = buttonInfo.parentElement;
      const keyApi = listButton.getAttribute("data-key");
      keyBooks(keyApi, listItem, buttonInfo);
    });
  });
}

const buttonDisplay = document.querySelector(".userButton");

buttonDisplay.addEventListener("click", () => {
  const inputDisplay = document.getElementById("userInput").value.toLowerCase();

  myFetch(inputDisplay);
});

async function keyBooks(apiKey, listItem, buttonInfo) {
  try {
    buttonInfo.disabled = true;

    const existingDesc = listItem.nextElementSibling;

    if (existingDesc && existingDesc.classList.contains("description")) {
      existingDesc.remove();
      // Riabilita il pulsante
      buttonInfo.disabled = false;

      return;
    }

    const response = await fetch(`https://openlibrary.org${apiKey}.json`);
    const dataDesc = await response.json();

    const divDesc = document.createElement("div");
    divDesc.classList.add("description");

    divDesc.innerHTML = `
            <h2>Description: </h2>
            <p>${
              dataDesc.description
                ? dataDesc.description.value || dataDesc.description
                : "no description"
            }</p>
       `;
    listItem.insertAdjacentElement("afterend", divDesc);
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector(".result").textContent = "Failed to load data.";
  } finally {
    // Riabilita il pulsante una volta che la chiamata all'API è completata
    buttonInfo.disabled = false;
  }
}
