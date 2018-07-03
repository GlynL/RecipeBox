const API_URL = "/api/recipes";

export function getRecipes() {
  return fetch("/api/recipes")
    .then(response => {
      if (!response.ok) throw new Error("connection issue");
      return response.json();
    })
    .catch(error => error);
}

// shouldn't need to use
export function getRecipe(id) {
  return fetch(`/api/recipes/${id}`)
    .then(response => {
      if (!response.ok) throw new Error("connection issue");
      return response.json();
    })
    .catch(error => error);
}

export function postRecipe(recipe) {
  return fetch("/api/recipes/new", {
    method: "POST",
    body: JSON.stringify(recipe),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(response => {
      if (!response.ok) throw new Error("connection issue");
      return response.json();
    })
    .catch(error => error);
}
