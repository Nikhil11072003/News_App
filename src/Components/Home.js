import React from 'react'; 
import './Home.css';
import { useAuth0 } from "@auth0/auth0-react";
import App from '../App';
import {BrowserRouter as Main,Route,Routes} from 'react-router-dom'

const propTypes = {};
const defaultProps = {};

const Home = () => {
    const backgroundStyle = {
        backgroundImage: `url(/back.webp)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh', // Make the container take the full height of the viewport
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff', // Text color on top of the background
    }

    const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

    /*const Profile = () => {
        return (
            isAuthenticated && (
                <div>
                    <Route exact path='/' element={<App pageSize={6}  country={'in'} category={'general'}/>} />
                </div>
            )
        );
    };*/

    

    return (
        <div style={backgroundStyle} >
            <div>
             <div className='text'>
                <p>THis Is The News App Which Will Fetch You News From Different Category </p>
                <p >Please Login To Procees</p>
                </div>
                <div class="d-grid gap-2 col-3 mx-auto">
                <button class="btn btn-primary" type="button" onClick={() => loginWithRedirect()}>Login</button>
                </div>
            </div>
        </div>
    );
}

Home.propTypes = propTypes;
Home.defaultProps = defaultProps;

export default Home;

