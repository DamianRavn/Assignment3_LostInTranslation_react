import { useSelector } from "react-redux";
import HeaderGuest from "../Components/Headers/HeaderGuest";
import HeaderUser from "../Components/Headers/HeaderUser";

function Header() {
    const username = useSelector(state => state.user.value.username);
    if (!username) {
        return (
            <HeaderGuest />
        )
    } else {
        return (
            <HeaderUser />
        )
    }
}

export default Header;
