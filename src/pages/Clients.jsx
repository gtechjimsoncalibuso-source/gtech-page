
import { useEffect } from 'react';
import '../assets/css/pages/clients.css';

export default function Clients(){

    useEffect(() => {
        document.body.className = 'clients'; 
        return () => {
        document.body.className = ''; 
        };
    }, []);

    return(
        <>clients</>
    );
}