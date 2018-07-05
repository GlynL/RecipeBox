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

export function putRecipe(recipe) {
  return fetch(`/api/recipes/edit/${recipe._id}`, {
    method: "PUT",
    body: JSON.stringify(recipe),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  })
    .then(res => {
      if (!res.ok) throw new Error("connection issue");
      return res.json();
    })
    .catch(err => err);
}
