const API_URL = "/api/recipes";

export function getRecipes() {
  return fetch("/api/recipes")
    .then(response => {
      if (!response.ok) throw new Error("connection issue");
      return response.json();
    })
    .then(data => data)
    .catch(error => error);
}
