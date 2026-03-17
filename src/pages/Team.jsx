
import { useEffect } from 'react';
import '../assets/css/pages/team.css';

export default function team(){

    useEffect(() => {
        document.body.className = 'team'; 
        return () => {
        document.body.className = ''; 
        };
    }, []);

    return(
        <>team</>
    );
}