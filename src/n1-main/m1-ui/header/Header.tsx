import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <div>
            <NavLink to='/login'>login</NavLink>
            <NavLink to='/registration'>registration</NavLink>
            <NavLink to='/profile'>profile</NavLink>
            <NavLink to='/recovery'>recovery</NavLink>
            <NavLink to='/new'>new</NavLink>
            <NavLink to='/input'>super input</NavLink>
            <NavLink to='/button'>super button</NavLink>
            <NavLink to='/checkbox'>super checkbox</NavLink>
        </div>
    )
}