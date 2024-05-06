export const KEY_API = "7c51ce5f51b2a0e2bb3bf45b2afaa9ae"

export async function loadMovies(url){
    let fetchAPI = await fetch(url)
      .then((response) => response.json())
      .catch((error) => alert("Error: " + error))

    /* Slicing the first 5 results from the API. */
    let data = fetchAPI.results.slice(0, 5)
    return data;
}