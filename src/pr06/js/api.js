
export function getPet(){
  axios("https://pokeapi.co/api/v2/ability/?limit=20&offset=20")
   .then(res =>console.log(res))
}

export function getPetId(id){
  axios(`https://pokeapi.co/api/v2/ability/${id}`)
   .then(res =>console.log(res))
}
