const users = [
    { name: "Khushal", age: 25, location: "New Delhi" },
    { name: "Aisha", age: 22, location: "Mumbai" },
    { name: "monkey", age: 87, location: "jungle" },
    { name: "Rohan", age: 35, location: "Bangalore" },
    { name: "duck", age: 54, location: "ducklone" },
    { name: "billie eillish", age: 23, location: "los angeles" },
    { name: "jhon", age: 87, location: "london" },

];

function fetchUser() {
    let randomUser = users[Math.floor(Math.random() * users.length)];
    document.getElementById("user-container").innerHTML = `
        <h2>${randomUser.name}</h2>
        <p>Age: ${randomUser.age}</p>
        <p>Location: ${randomUser.location}</p>
    `;
}

