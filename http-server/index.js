let form = document.getElementById("user-form");
let submit = document.getElementById("submit");
let DOB = document.getElementById("DOB");

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

function age(date) {
  let age = 0;
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let x = date.split("-");
  x = x.map((y) => Number(y));
  if (month > x[1]) {
    age = year - x[0];
  } else if (month < x[1]) {
    age = year - x[0] - 1;
  } else {
    if (day >= x[2]) {
      age = year - x[0];
    } else {
      age = year - x[0] - 1;
    }
  }
  return age;
}
function validate(date) {
  if (age(date) < 18) {
    DOB.setCustomValidity("Should be at least 18 years old");
    DOB.reportValidity();
  } else if (age(date) > 60) {
    DOB.setCustomValidity("Should be less than 60 years old");
    DOB.reportValidity();
  } else {
    DOB.setCustomValidity("");
  }
}
submit.addEventListener("click", () => validate(DOB.value));

form.addEventListener("submit", function (event) {
  /* Prevemting default event and getting all input elements */
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const terms = document.getElementById("terms").checked;
  /* Putting all elements in an array and pushing into the entries array */
  console.log(age(DOB.value));
  let arr = [name, email, password, DOB.value, terms];
  entries.push(arr);
  localStorage.setItem("Entries", JSON.stringify(entries));
  retrieveentries();
});
