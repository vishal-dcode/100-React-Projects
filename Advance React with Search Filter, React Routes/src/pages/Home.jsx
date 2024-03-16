import SearchForm from "../components/SearchForm";
import CocktailList from "../components/CocktailList";

export default function Home() {
  return (
    <section className="Home">
      <SearchForm />
      <CocktailList />
    </section>
  );
}
