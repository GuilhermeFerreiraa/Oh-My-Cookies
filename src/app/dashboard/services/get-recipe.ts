export async function getRecipes() {
 const res = await fetch('https://api.edamam.com/api/recipes/v2?type=public&q=meal&app_id=516a12d7&app_key=75d5b7efcde1d30c40b0f22d00733c17', {
  method: 'GET',
  headers: {
   'Accept-Encoding': 'gzip'
  }
 })
 const data = await res.json()

 return data || [];
}