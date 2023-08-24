import { Suspense } from "react";
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import { routes } from "./routes";

import logo from '../logo.svg';


export const Navigation = () => {

    return (
        <Suspense fallback={ <span>Loading...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={ logo } alt="React logo" />
                        <ul>
                            {
                                routes.map( ({ to, name }) => (
                                <li key={ to }>
                                    <NavLink
                                        to={ to }
                                        className={ ({ isActive }) => isActive ? 'nav-active' : '' }
                                    >{ name }</NavLink>
                                </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {
                            routes.map( ({ path, Component }) => (
                                <Route
                                    key={ path }
                                    path={ path }
                                    element={ <Component /> }
                                ></Route>
                            ))
                        }
                        <Route path="/*" element={ <Navigate to={ routes[0].to } replace /> }></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    )
}; 