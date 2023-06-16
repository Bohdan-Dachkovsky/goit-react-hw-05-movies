import style from './markup.module.css'
const Form = ({submit, search}) => {

return (
    <form onSubmit={submit} method="get">
        <label className={style.coverEl} htmlFor="searchingFilms">
          <input
            className={style.input}
            type="search"
            defaultValue = {search}
            id="searchingFilms"
            placeholder="Type movie name"
            name="movie"
            required
          ></input>
          <button className={style.button} type="submit">
            Search
          </button>
        </label>
      </form>
    );
}
export default Form;