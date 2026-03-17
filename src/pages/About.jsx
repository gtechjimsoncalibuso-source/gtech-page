
import { useEffect } from 'react';
import '../assets/css/pages/about.css';

export default function about(){

    useEffect(() => {
        document.body.className = 'about'; 
        return () => {
        document.body.className = ''; 
        };
    }, []);

    return(
        <>about</>
    );
}