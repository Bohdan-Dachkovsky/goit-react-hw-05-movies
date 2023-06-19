import { Outlet } from "react-router-dom"
import {Container, Navigation, Link} from '../index.js'
import style from '../mainStyle.css'
const Layout = () => {
return (
    <Container>
      <Navigation>
        <nav className="navigation">
          <li className={style.linkStyle}>
            <Link to="/">Home</Link>
            <div className={style.textLights}></div>
          </li>
          <li className={style.linkStyle}>
            <Link to="/movies">Movies</Link>
            <div className={style.textLights}></div>
          </li>
        </nav>
      </Navigation>
      <main> 
      <Outlet/>
      </main>
    </Container>
    )
}
export default Layout