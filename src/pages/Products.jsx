import c1 from '../assets/client-logo/client-18.png'
import payroll from '../assets/products/Payroll System.png'
import enrollment from '../assets/products/emrolment.png'


export default function Products(){

    return(
        <main className='w-screen h-contain py-4 gap-[3rem]
        flex flex-col items-center'>

            <section id="services" className="w-full py-[1rem] scroll-mt-[80px]
            flex flex-col items-center
            text-center">
                <h3 className='serv-s1-h serv-h font-extrabold
                text-3xl'>Products</h3>
            </section>

            <section className=" p-[3rem]
            gap-[5rem]
            grid grid-cols-1 
            sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className=''>
                        <img src={payroll} alt="Payroll System"
                        className="w-full h-full object-cover rounded-xl "/>                    
                        <p className="m-[10px]">Payroll System </p>   
                </div>
                <div className=" ">
                        <img src={enrollment} alt="Payroll System"
                        className="w-full h-full object-cover rounded-xl "/>
                        <p className="m-[10px]">Enrollment System </p>   
                </div>
                <div className=" ">
                        <img src={payroll} alt="Payroll System"
                        className="w-full h-full object-cover rounded-xl"/>
                        <p className="m-[10px]">Payroll </p>   
                </div>
                <div className=" ">
                        <img src={payroll} alt="Payroll System"
                        className="w-full h-full object-cover rounded-xl "/>
                        <p className="m-[10px]">Payroll </p>   
                </div>
                <div className=" ">
                        <img src={payroll} alt="Payroll System"
                        className="w-full h-full object-cover rounded-xl "/>
                        <p className="m-[10px]">Payroll </p>   
                </div>
                <div className=" ">
                        <img src={payroll} alt="Payroll System"
                        className="w-full h-full object-cover rounded-xl "/>
                        <p className="m-[10px]">Payroll </p>   
                </div>
                


                    {/* <div className="p-[1.5rem] rounded-[0.5rem]
                    flex flex-col items-center gap-[1rem]
                    border border-[red]">

                        <div className="w-[20rem] h-[20rem]
                        rounded-[0.5rem]
                        bg-cover bg-center"
                        style={{ backgroundImage: `url(${c1})` }}></div>

                        <h5 className="w-full text-center
                        bg-[white]
                        p-[1rem]">Sample System</h5>

                    </div>

                    <div className="p-[1.5rem] rounded-[0.5rem]
                    flex flex-col items-center gap-[1rem]
                    border border-[red]">

                        <div className="w-[20rem] h-[20rem]
                        rounded-[0.5rem]
                        bg-cover bg-center"
                        style={{ backgroundImage: `url(${c1})` }}></div>

                        <h5 className="w-full text-center
                        p-[1rem]">Sample System</h5>

                    </div> */}

            </section>

        </main>
    );
    
}