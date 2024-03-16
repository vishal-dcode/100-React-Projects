import React from "react";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

export default function CocktailList() {
  const { dataDB, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (dataDB.length < 1) {
    return <h3 className="align-center">No Search Results</h3>;
  }

  return (
    <section className="Cocktail-List">
      {dataDB.map((item) => {
        const { idDrink, strDrink, strAlcoholic, strGlass } = item;
        const newName = {
          id: idDrink,
          name: strDrink,
          glass: strGlass,
          label: strAlcoholic
        };

        return <Cocktail key={newName.id} {...newName} />;
      })}
    </section>
  );
}
