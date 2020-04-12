import React,{useState} from 'react';
import RegisterUser from './RegisterUser';

export default function OtherParts(props){

    const [regUser,setRegUser] = useState(false);

    return (
        <div>
            <ul>                
                <li onClick={()=>{
                    setRegUser(true);
                }}>User as student</li>
                <li>User as Others</li>
                {
                    regUser &&
                    <RegisterUser />
                }
            </ul>
        </div>
    );
}
