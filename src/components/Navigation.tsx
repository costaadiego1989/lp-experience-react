import { Link } from "react-router-dom"

export const Navigation = () => {
    return (<>
        <ul className="flex gap-2 items-center">
            <li><Link to="/">Início</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/cronograma">Cronograma</Link></li>
            <li><Link to="/acesso">Acesso</Link></li>
            <li><Link to="/faq">Faq</Link></li>
        </ul>
    </>)
}