import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import menicure from '../assets/appointments/frame83.png'
import Calendar from 'react-calendar';
import alina from '../assets/alina.png'

const todayAppointmentData = [
    {
        img: menicure,
        date: "10:30 AM - 11:00 AM",
        heading: "Menicure",
        name: "Fabiha Arshad",
    },
    {
        img: menicure,
        date: "10:30 AM - 11:00 AM",
        heading: "Menicure",
        name: "Fabiha Arshad",
    },
    {
        img: menicure,
        date: "10:30 AM - 11:00 AM",
        heading: "Menicure",
        name: "Fabiha Arshad",
    },
] 
const appointmentData = [
    {
        img: menicure,
        heading: "Menicure",
        date: "9 july, 2022",
        employee: "Irtaza Zaidi",
        sale: 1,
        earnings: 100,
    },
    {
        img: menicure,
        heading: "Menicure",
        date: "9 july, 2022",
        employee: "Irtaza Zaidi",
        sale: 1,
        earnings: 100,
    },
    {
        img: menicure,
        heading: "Menicure",
        date: "9 july, 2022",
        employee: "Irtaza Zaidi",
        sale: 1,
        earnings: 100,
    },
    {
        img: menicure,
        heading: "Menicure",
        date: "9 july, 2022",
        employee: "Irtaza Zaidi",
        sale: 1,
        earnings: 100,
    },
    {
        img: menicure,
        heading: "Menicure",
        date: "9 july, 2022",
        employee: "Irtaza Zaidi",
        sale: 1,
        earnings: 100,
    },
    {
        img: menicure,
        heading: "Menicure",
        date: "9 july, 2022",
        employee: "Irtaza Zaidi",
        sale: 1,
        earnings: 100,
    },
       
]
const teamData = [
    {
        img: alina,
        heading: "Alina Arshed",
        appointments: 24,
    },
    {
        img: alina,
        heading: "Alina Arshed",
        appointments: 24,
    },
    {
        img: alina,
        heading: "Alina Arshed",
        appointments: 24,
    },
]
const productData = [
    {
        img: menicure,
        heading: "Menicure",
        services: 24,
    },
    {
        img: menicure,
        heading: "Menicure",
        services: 24,
    },
    {
        img: menicure,
        heading: "Menicure",
        services: 24,
    },
   
]

const Main = () => {
   
    
    const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };

  return (
    <>
        {/* Appointment Section */}
        <section className='sm:px-10 px-3 py-5 grid md:grid-cols-2 gap-5'>
            <div>
                <Calendar onChange={onChange} value={date} />
            </div>
            <div>
                <h4 className='text-[18px] font-semibold'>Today’s Appointments</h4>
                <div className='space-y-5 pt-5'>

                {
                    todayAppointmentData?.map((obj,i) => {
                        const {heading,img,date,name} = obj;         
                        return(
                            <div key={i} className='flex justify-between items-center p-5 rounded-xl bg-[#101928] text-white'>
                                <div className='flex gap-5'>
                                    <img className='h-[73px] w-[73px]' src={img} alt="menicure" />
                                    <div>
                                        <p className='font-light text-sm text-[#fff]'>{date}</p>
                                        <strong>{heading}</strong>
                                        <p className='font-light text-sm text-[#fff]'><i className="fa-regular fa-user"></i> {name}</p>
                                    </div>
                                </div>
                                <div>
                                    <h5 className='text-[35px] font-medium'>13</h5>
                                    <p className='font-light text-sm text-[#fff]'>July</p>
                                </div>
                                </div>
                        )
                    })
                } 

                </div>
            </div>
        </section>

        {/* Section */}
        <section className='sm:px-10 px-3 py-5 grid md:grid-cols-2 gap-5'>
            {/* Products */}
            <div className='rounded-xl shadow-xl p-5'>
                
                <div className="flex justify-between items-center">
                <h4 className='text-[18px] font-semibold'>Top Products</h4>
                <select className='drop-shadow-none border-0 bg-transparent shadow-none focus:border-none focus:outline-none '>
                    <option>This Month </option>
                    <option>This Year </option>
                    </select>
                </div>
            
                <div className='pt-5'>
                    {
                        productData?.map((obj,i) => {
                            const {heading,img,services} = obj;         
                            return(
                                <div key={i} className='flex items-center gap-5 p-5 rounded-xl last:border-none border-b'>
                                
                                    <img className='h-[73px] w-[73px] rounded-md' src={img} alt="alina" />
                                    <div>
                                        <strong>{heading}</strong>
                                        <p className='font-light text-sm '>{services} Services</p>
                                    </div>
                                
                                
                                </div>
                            )
                        })
                    }         
                </div>
            </div>
            {/* Team  */}
            <div className='rounded-xl shadow-xl p-5'>
                <div className="flex justify-between items-center">
                <h4 className='text-[18px] font-semibold'>Top Team Members</h4>
                <select className='drop-shadow-none border-0 bg-transparent shadow-none focus:border-none focus:outline-none '>
                    <option>This Month </option>
                    <option>This Year </option>
                    </select>
                </div>
            
                <div className='pt-5'>
                {
                    teamData?.map((obj,i) => {
                        const {heading,img,appointments} = obj;         
                        return(
                            <div key={i} className='flex items-center gap-5 p-5 rounded-xl last:border-none border-b'>
                            
                                <img className='h-[73px] w-[73px] rounded-md' src={img} alt="alina" />
                                <div>
                                    <strong>{heading}</strong>
                                    <p className='font-light text-sm '>{appointments} Appointments</p>
                                </div>
                            
                            
                            </div>
                        )
                    })
                }
                    
                
                </div>
            </div>
        </section>

        {/* Section */}
        <section className='sm:px-10 px-3 py-5'>

            <div className="relative overflow-x-auto rounded-xl shadow-xl p-5">
            <h2 className='text-[26px] font-semibold pb-5'>Recent Appointments</h2>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100 rounded-xl ">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                            Service
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                            Employee
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Sale
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Earnings
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointmentData?.map((obj,i) => {
                                const {heading,img,date,employee,sale,earnings} = obj;         
                               return(
                                <tr key={i} className="bg-white last:border-none border-b">
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap flex items-center gap-5 sm:flex-row flex-col">
                                        <img className='h-[73px] w-[73px] rounded-md' src={img} alt="menicure" />
                                        <div>
                                            <h4 className='font-semibold text-lg'>{heading}</h4>
                                            <p className='font-light text-sm'>{date}</p>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4 font-medium text-center">
                                        {employee}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {sale}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button className='px-5 py-2 bg-[#F2F7F7] text-blue-500 rounded-md'>${earnings}</button>
                                    </td>
                                </tr>
                               )
                            })
                        }
                    
                    </tbody>
                </table>
            </div>

        </section>
    </>
  )
}

export default Main