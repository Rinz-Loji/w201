let form = document.getElementById("user-form");
let submit = document.getElementById("submit");
let name = document.getElementById("name");

/* Function for showing the table on the user page form local storage */
const retrieveentries = () => {
  /* Retrieving entries from local storage */
  let Entries = JSON.parse(localStorage.getItem("Entries"));
  const table = document.getElementById("table");

  /* Here all array elements are one row of the table  each element has to be in between <tr>*/
  let tr = Entries.map((row, index) => {
    /* Each elemnt inside an array has to be between <th> and </th> */
    th = row.map((col) => {
      if (index === 0) {
        return "<th>" + col + "</th>";
      } else {
        return "<td>" + col + "</td>";
      }
    });
    return "<tr>" + th.join("\n") + "</tr>";
  });
  document.getElementById("table").innerHTML = tr.join("\n");
};

let entries = [
  ["Name", "Email", "Password", "Date Of Birth", "Accepted or Not"],
];
localStorage.setItem("Entries", JSON.stringify(entries));
retrieveentries();

function validate(nam) {
  if (nam.value.length > 8) {
    nam.setCustomValidity("No");
    nam.reportValidity();
  } else {
    nam.setCustomValidity("");
  }
}
submit.addEventListener("click", () => validate(name));

form.addEventListener("submit", function (event) {
  /* Prevemting default event and getting all input elements */
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const DOB = document.getElementById("DOB").value;
  const terms = document.getElementById("terms").checked;

  /* Putting all elements in an array and pushing into the entries array */
  let arr = [name.value, email, password, DOB, terms];
  entries.push(arr);
  localStorage.setItem("Entries", JSON.stringify(entries));
  retrieveentries();
});
