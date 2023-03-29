import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

import Styles from '../../styles.module.css';
import logo from './../assets/logo.jpg';

export const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLogout = () => {
        logout();
        navigate('/login', {
            replace: true,
        });
    };

    return (
        <nav className={`navbar navbar-expand-sm navbar-dark bg-danger p-2 ${Styles.nav__height}`}>
            <Link className='navbar-brand' to='/home'>
                <img src={logo} width='120' height='120' alt='logo comic' className='me-3' />
            </Link>

            <Link className='navbar-brand' to='/'>
                Asociaciones
            </Link>

            <div className='navbar-collapse'>
                <div className='navbar-nav'>
                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to='/marvel'>
                        Marvel
                    </NavLink>

                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to='/dc'>
                        DC
                    </NavLink>

                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to='/Merch'>
                        Merch
                    </NavLink>
                    
                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`} to='/Search'>
                        Search
                    </NavLink>
                </div>
            </div>

            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end '>
                <ul className='navbar-nav ml-auto'>
                    <span className='nav-item nav-link text-light'>{user?.name}</span>

                    <button className='nav-item nav-link btn' onClick={onLogout}>
                        logout
                    </button>
                </ul>
            </div>
        </nav>
    );
};
