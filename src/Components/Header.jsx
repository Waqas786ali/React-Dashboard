import calender from '../assets/header/calender.svg';
import calenderBlack from '../assets/header/calender-black.png';
import dollar from '../assets/header/dollar.svg';
import user from '../assets/header/user.png';
import vector1 from '../assets/header/vector-1.png';
import vector3 from '../assets/header/vector-3.png';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: false,
  },
  scales: {
    x: {
      display: true, // This hides the x-axis
      grid: {
        display: false // This hides the x-axis lines
      }
    },
    y: {
      beginAtZero: true,
      barPercentage: 0.2, // Adjust this value to change the thickness of the bars
      categoryPercentage: 0.3, // Adjust this value to change the spacing between the bars
      
      ticks: {
        callback: function(value) {
          // Customize the y-axis label text
          return '$' + value;
        },
      },
    },
    
  },
 
  defaultFontFamily: 'Poppins, sans-serif',
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Background color of the tooltip
    titleFont: {
      family: 'Arial, sans-serif',
      size: 16,
      weight: 'bold'
    },
    bodyFont: {
      family: 'Arial, sans-serif',
      size: 14
    },
    displayColors: false,
    borderColor: 'rgba(0, 0, 0, 0.5)', // Border color of the tooltip
    borderWidth: 1
  }
}
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','Sep','Oct','Nov','Dec'];
const data = {
  labels,
  datasets: [
    {
      label: 'Sales',
      data: ["75","50","100","85","75","50","58","15","45","25","120","55"],
      backgroundColor: 'rgba(87, 120, 255, 1)',
    },
    {
      label: 'Appointments',
      data: ["25","85","110","75","50","100","104","75","75","50","100","85"],
      backgroundColor: 'rgba(16, 25, 40, 1)',
    },
  ],
};


const Header = () => {
  return (
    <header className="sm:px-10 px-3 py-5">
      <div className="flex justify-between items-center sm:flex-row flex-col sm:gap-0 gap-5">
        <h2 className="text-[29px] font-light">
          Good Morning, <strong className="font-bold">Bella Famina</strong>
        </h2>
        <button className="bg-[#101928] px-5 py-3 rounded-lg flex gap-3 text-white font-semibold text-[18px]">
          <img src={calender} alt="calender" />
          <span>New Appointment</span>
        </button>
      </div>
      <div className="py-10 px-3 grid md:grid-cols-3 sm:grid-cols-2 items-center gap-5">
        {/* Box */}
        <div className="w-full space-y-2 drop-shadow-lg border px-5 py-6 rounded-lg">
          <div className="flex items-center justify-between">
            <img src={dollar} alt="dollar" />
            <span className="text-[#007930] text-[30px] font-medium">
              $1,682
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-semibold">Total Revenue</span>
            <img src={vector1} alt="vector1" />
          </div>
        </div>
        {/* Box */}
        <div className="w-full space-y-2 drop-shadow-lg border px-5 py-6 rounded-lg">
          <div className="flex items-center justify-between">
            <img src={user} alt="user" />
            <span className="text-[#007930] text-[30px] font-medium">60</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-semibold">Total Customers</span>
            <img src={vector1} alt="vector1" />
          </div>
        </div>
        {/* Box */}
        <div className="w-full space-y-2 drop-shadow-lg border px-5 py-6 rounded-lg">
          <div className="flex items-center justify-between">
            <img src={calenderBlack} alt="calenderBlack" />
            <span className="text-[#F52525] text-[30px] font-medium">78</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[18px] font-semibold">
              Total Appointments
            </span>
            <img src={vector3} alt="vector3" />
          </div>
        </div>
      </div>
      {/* Revenue Chart */}
      <div className="px-3">
        <div className="drop-shadow-lg border rounded-lg p-5 space-y-5">
          <div className="flex items-center justify-between w-full sm:flex-row flex-col">
            <h4 className="text-[20px] font-semibold sm:leading-none leading-loose">
              Revenue
            </h4>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-3">
                <span className="block h-[15px] w-[15px] rounded-full bg-blue-500"></span>
                <span>Sales</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="block h-[15px] w-[15px] rounded-full bg-blue-950"></span>
                <span>Appointments</span>
              </div>
              <select className="drop-shadow-none border-0 bg-transparent shadow-none focus:border-none focus:outline-none ">
                <option>Last 12 Month </option>
                <option>Last 6 Month </option>
                <option>Last 1 Month </option>
              </select>
            </div>
          </div>
          <div className="">
            <Bar
              options={options}
              data={data}
              className="sm:h-[500px!important] h-[250px!important] w-[100%!important]"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
