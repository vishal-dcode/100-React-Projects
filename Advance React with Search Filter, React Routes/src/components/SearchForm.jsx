import { useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

export default function SearchForm() {
  const { setSearch } = useGlobalContext();

  const searchEl = useRef(null);

  const handleChange = () => {
    setSearch(searchEl.current.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    searchEl.current.focus();
  }, []);

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          ref={searchEl}
          type="text"
          id="name"
          placeholder="Search special beverage."
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
