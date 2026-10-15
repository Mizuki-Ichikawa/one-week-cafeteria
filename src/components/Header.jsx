import { Link } from "react-router";
import logo from "../assets/images/logo.png";

const Header = () => {

    return (
        <header className="bg-bg-brown text-text-warm-white">
            <div className="flex items-center space-x-4">
                <div className="w-15 h-15">
                    <Link to="/">
                        <img 
                        src={logo} 
                        alt="一週間食堂のロゴ"
                        className="w-full h-full object-contain"
                        />
                    </Link>
                </div>

                <h1 className="text-3xl font-bold">一週間食堂</h1>
            </div>
        </header>
    )
}

export default Header