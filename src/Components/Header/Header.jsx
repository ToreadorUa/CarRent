import { Link } from "react-router-dom"

export const Header = () => {
    return (<>
        <Link to={'/'}>Home</Link>
        <Link to={'/catalog'}>Catalog</Link>
        <Link to={'/favorites'}>Favorites</Link>
    </>)
}