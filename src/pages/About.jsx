
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

        <main className='w-screen h-contain p-4 gap-[5rem]
        flex flex-col items-center'>

            <section className="w-full
            p-[3rem]
            gap-[1rem]
            font-bold
            grid grid-cols-2 max-lg:grid-cols-1">

                <h3 className="ab-h h-full w-full
                col-span-1 max-lg:col-span-1
                text-end max-lg:text-start
                flex items-center justify-center max-lg:justify-start">About Us</h3>

                <div className="gap-[1rem] min-h-[25rem]
                col-span-1 max-lg:col-span-1
                grid grid-cols-2">

                    <div className="h-[full] col-span-2 row-span-4 border boreder-red-600"></div>
                    <div className="h-[full] row-span-3 border boreder-red-600"></div>
                    <div className="h-[h-full] row-span-3 border boreder-red-600"></div>

                </div>

            </section>

        </main>

    );
}