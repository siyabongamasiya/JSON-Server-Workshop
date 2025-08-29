let characters: any[] = [];

async function getUser() {
  const response = await fetch("http://localhost:5000/items");
  const data = await response.json();
  characters = data;
  console.log(characters[0]);
}

getUser()
