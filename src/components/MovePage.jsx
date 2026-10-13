// 指定されたページへ遷移する link:遷移先のページのリンク　text:表示させるテキスト
import { Link } from "react-router"

const MovePage = ({link, text}) => {
    return (
        <div>
            <Link to={link}
               className="text-sm text-secondary-text underline ">
                {text}
            </Link>
        </div>
    )
}
 
export default MovePage