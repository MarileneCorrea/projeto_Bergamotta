import Link from "../Link";
import "./style.css";

function Header() {
    return (
        <header>
            <div>
                <nav>
                    <Link texto="Login / Cadastro" redirect="/login" />
                </nav>
                <img src=""></img>
            </div>
        </header>
    );
}

export default Header;