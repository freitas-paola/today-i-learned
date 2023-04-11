const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

//Selectors
const btnOpenForm = document.querySelector(".btn-open-form");
const factForm = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

//Load Page
factsList.innerHTML = "";

//Load data from Supabase
loadFacts();

async function loadFacts() {
  const res = await fetch(
    "https://kufxgyntxrkwwimmzetq.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1ZnhneW50eHJrd3dpbW16ZXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMDA1OTcsImV4cCI6MTk5NjU3NjU5N30.4NbRWvim_qOeZ2cFtJTXDhucEVcp_3PKB_fapQYwShY",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1ZnhneW50eHJrd3dpbW16ZXRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODEwMDA1OTcsImV4cCI6MTk5NjU3NjU5N30.4NbRWvim_qOeZ2cFtJTXDhucEVcp_3PKB_fapQYwShY",
      },
    }
  );
  const data = await res.json();
  createFactsList(data);
}

//Functions
btnOpenForm.addEventListener("click", function () {
  if (factForm.classList.contains("hidden")) {
    factForm.classList.remove("hidden");
    this.textContent = "Close";
  } else {
    factForm.classList.add("hidden");
    this.textContent = "Share a Fact";
  }
});

function createFactsList(dataArray) {
  const htmlArray = dataArray.map(
    (fact) => `<li class="fact"> 
    <p>
     ${fact.text} 
     <a
      class="source"
      href="${fact.source}"
      target="_blank"
      >(Source)
      </a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category).color
    }"
    > ${fact.category}
    </span>
  </li>`
  );
  const html = htmlArray.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}
