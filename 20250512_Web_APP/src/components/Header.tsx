import { NavLink } from "react-router";

export default function Header() {
    const navItems = [
        { to: "/", label: "Home" },
        { to: "/about", label: "About" },
        { to: "/movies", label: "Movies" },
        { to: "/todos", label: "Todos" },
    ];

    const activeStyle = {
        color: 'blue',
    }

    return (
        <header className="flex gap-[10px]">
            {/* a tag 는 페이지를 새로 고침하기때문에 손실이 크다. Link 라는 속성을 이용하자! */}
            {/* <a href="/">Home</a>
            <a href="/about">About</a> */}
            {navItems.map((item) => (
                <NavLink 
                    key={item.to}
                    to={item.to} 
                    style={({ isActive }) => isActive ? activeStyle : undefined}
                >
                    {item.label}
                </NavLink>
            ))}
            {/* 위 처럼 mapping 하면, 아래처럼 naive 하게 각 버튼별로 이펙트 지정해줄 필요없음 */}
            {/* <NavLink to="/" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'text-red-500' : ''}>About</NavLink>
            <NavLink to="/movies" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Movies</NavLink>
            <NavLink to="/todos" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Todos</NavLink> */}


        </header>
    )
}