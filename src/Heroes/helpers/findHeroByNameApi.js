export const findHerobyName = async (name) => {
    const token = import.meta.env.VITE_TOKEN_API;
    const url = `https://www.superheroapi.com/api.php/${token}/search/${name}`;
    console.log(url)
    const resp = await fetch(url,{ method: 'GET', redirect: "follow" });
    const {results} = await resp.json();

    const heroes = results.map((hero) => ({
        id : hero.id,
        name : hero.name,
        fullName: hero.biography["full-name"],
        image: hero.image.url,
        gender: hero.appearance.gender,
        race: hero.appearance.race,
        height:hero.appearance.height,
        weight:hero.appearance.weight,
        eyeColor:hero.appearance["eye-color"],
        hairColor:hero.appearance["hair-color"],
        powerstats: hero.powerstats
    }));

    return heroes;
}