import logo from "../assets/images/logo.png";

const Header = () => {

    return (
        <header className="bg-main text-header-text">
            <div className="flex items-center space-x-4">
                <div className="w-15 h-15">
                    <img 
                        src={logo} 
                        alt="一週間食堂のロゴ"
                        className="w-full h-full object-contain"
                    />
                </div>

                <h1 className="text-3xl font-bold">一週間食堂</h1>
            </div>
        </header>
    )
}

export default Header