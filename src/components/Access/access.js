import React, { useEffect, useState }  from 'react';
import {AccessContainer, inputPassword} from './access.module.css';

const Access = () => {

    const [auth, setAuth] = useState(0);
    const [isErr, setIsErr] = useState(0);
    const envPassword = process.env.GATSBY_RECRUITMENT_PASSWORD;

    const redirect = () => {
        window.open('https://drive.google.com/file/d/1NX93y8MXnKZQoKtvIjAukH9SWhweDd5e/view?usp=sharing')
        window.location.replace('/')
    }

    const checkPassword = (passwordReceived) => {
        const isSame = passwordReceived === envPassword;
        if (isSame){
            setAuth(true)
            setIsErr(false)
        } else {
            setAuth(false)
            setIsErr(true)
        }
        
    };
    
 return(
     <div className={AccessContainer}>

         <p>Mot de passe</p>
        <input type="text" 
            className={inputPassword} 
            onKeyPress={(ev) => {
                        if(ev.key === 'Enter'){
                            ev.preventDefault();
                            checkPassword(ev.target.value);
                        }
                    }}/>
                    {auth ? redirect(): null }
     </div>
 )
}

export default Access;