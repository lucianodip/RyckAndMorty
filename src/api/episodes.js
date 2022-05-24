export async function getEpisodes(id=1){
    
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const data = await response.json();
    return data;
}