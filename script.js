let people = [];

// Load JSON data
fetch("data.json")
  .then(res => {
    if (!res.ok) {
      throw new Error("Failed to load JSON");
    }
    return res.json();
  })
  .then(data => {
    people = data;
  })
  .catch(err => {
    document.getElementById("result").innerText = "Error loading data ❌";
    console.error(err);
  });

// Search function
function searchPerson() {
  let id = document.getElementById("searchId").value.trim();

  if (id === "") {
    document.getElementById("result").innerText = "Please enter an ID ⚠️";
    return;
  }

  // Convert both to string to avoid type mismatch
  let person = people.find(p => String(p.id) === id);

  if (person) {
    document.getElementById("result").innerText =
      "Name: " + person.name +
      ", Age: " + person.age +
      ", Phone: " + person.phone;
  } else {
    document.getElementById("result").innerText = "Person not found ❌";
  }
}
