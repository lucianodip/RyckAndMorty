export async function getPersonajes(id=1){
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${id}`);
    const data = await response.json();
    return data;
}

