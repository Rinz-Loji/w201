let form = document.getElementById("user-form");
let entries = [
  ["Name", "Email", "Password", "Date Of Birth", "Accepted or Not"],
];
form.addEventListener("submit", function (event) {
  /* Prevemting default event and getting all input elements */
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const DOB = document.getElementById("DOB").value;
  const terms = document.getElementById("terms").checked;
  /* Putting all elements in an array and pushing into the entries array */
  let arr = [name, email, password, DOB, terms];
  entries.push(arr);

  let user = JSON.parse(localStorage.getItem("user"));
  const table = document.getElementById("table");
  let th = user.map((elem2) => {
    return "<td>" + elem2 + "</td>";
  });
  const map = "<tr>\n" + th.join("\n") + "\n</tr>\n";
  document.getElementById("table").innerHTML = map;
});
