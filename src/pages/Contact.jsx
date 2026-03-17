
import { useEffect } from 'react';
import '../assets/css/pages/contact.css';

export default function Contact(){

    useEffect(() => {
        document.body.className = 'contact'; 
        return () => {
        document.body.className = ''; 
        };
    }, []);

    return(
        <>contact</>
    );
}