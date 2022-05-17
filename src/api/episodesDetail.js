export async function getEpisodesDetail(id){
    console.log(id);
    const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
    const data = await response.json();
    console.log(data)
    return data;
}