import { Link } from "react-router-dom"

export const Header = () => {
    return (<div className="flex gap-10 h-10 bg-lightblue text-white">
        <Link to={'/'}>Home</Link>
        <Link to={'/catalog'}>Catalog</Link>
        <Link to={'/favorites'}>Favorites</Link>
    </div>)
}