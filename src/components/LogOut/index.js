import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebaseConfig';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


const Logout = () => {


    const navigate = useNavigate();

    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (checked) {
            signOut(auth).then(() => {
                console.log("Vous êtes déconnecté");
                setTimeout(() => {
                    navigate('/')
                }, 1000 );
            }).catch((error) => {
                console.log("Oups, nous avons une erreur!")
            });
        }

    }, [checked]);

    const handleChange = event => {
        setChecked(event.target.checked);
    }

    return (
        <div className="logoutContainer">
            <label className="switch">
                <input
                    onChange={handleChange}
                    type="checkbox"
                    checked={checked}
                />
                <span id='deco' data-tooltip-place="left" effect="solid" className="slider round"></span>
            </label>
            <Tooltip anchorId='deco' content="Déconnexion" style={{backgroundColor:"#d31017"}}/>
        </div>
    )
}

export default Logout

