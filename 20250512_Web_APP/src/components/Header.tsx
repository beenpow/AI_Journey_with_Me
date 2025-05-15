import { Link } from "react-router";

export default function Header() {
    return (
        <header
            className="flex gap-[10px]"
        >
            {/* a tag 는 페이지를 새로 고침하기때문에 손실이 크다. Link 라는 속성을 이용하자! */}
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/movies">Movies</Link>
        </header>
    )
}