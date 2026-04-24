let people = [];

// Load JSON data
fetch("data.json")
  .then(res => res.json())
  .then(data => people = data);

// Search function
function searchPerson() {
  let id = document.getElementById("searchId").value;

  let person = people.find(p => p.id === id);

  if (person) {
    document.getElementById("result").innerText =
      "Name: " + person.name +
      ", Age: " + person.age +
      ", Phone: " + person.phone;
  } else {
    document.getElementById("result").innerText = "Person not found ❌";
  }
}