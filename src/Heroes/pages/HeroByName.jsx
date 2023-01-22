import { useState } from "react";
import { NavBar } from "../../ui/components/NavBar";
import { HeroGrid } from "../components/HeroGrid";
import { Searchinput } from "../components/Searchinput";
import { findHerobyName } from "../helpers/findHeroByNameApi";

export const HeroByName = () => {
  const [heroes, setHeroes] = useState([]);

  const onSearchHero = async (hero) => {
    const data = await findHerobyName(hero);
    setHeroes(data);
    console.log(heroes);
  };

  return (
    <div>
      <NavBar/>
      <div className="container-fluid">
        <h1>Search</h1>
        <Searchinput onSearchHero={onSearchHero} />
        <HeroGrid heroes={heroes} />
      </div>
    </div>
  );
};
