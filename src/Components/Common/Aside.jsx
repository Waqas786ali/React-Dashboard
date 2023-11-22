import {useContext} from 'react'
import logo from '../../assets/logo.svg'
import barsOpen from '../../assets/aside/bars-open.svg';
import { Link } from 'react-router-dom';
import DataContext from '../../Context/DataContext'

const Aside = () => {
  const {setCheck,check } = useContext(DataContext);
  return (
    <aside
      id="default-sidebar"
      className={`bg-[#fff] p-5 fixed top-0 left-0 z-40 w-72 h-screen transition-transform border-r ${
        check ? "translate-x-0" : "-translate-x-full"
      } `}
    >
      <div className="flex items-center justify-between pb-5">
        <img src={logo} alt="logo" />
        <button onClick={() => setCheck(false)}>
          <img className="w-[33px] h-[28px]" src={barsOpen} alt="barsOpen" />
        </button>
      </div>
      <div className="h-full py-4 overflow-y-auto">
        <ul className="space-y-2 font-medium">
          <li>
            <Link
              to='/dashboard'
              className="flex items-center text-gray-900 rounded-lg  hover:bg-[#101928] hover:text-white p-3 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white "
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 1H1v14h5V1zm9 0h-5v5h5V1zm0 9v5h-5v-5h5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1V1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-5z" />
              </svg>
              <span className="ms-3">Dashboard</span>
            </Link>
          </li>
          <li>
          <Link
              to='/calender'
              className="flex items-center text-gray-900 rounded-lg  hover:bg-[#101928] hover:text-white p-3 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z" />
                <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z" />
              </svg>
              <span className="ms-3">Calender</span>
            </Link>
          </li>
          <li>
          <Link
              to='/sales'
              className="flex items-center text-gray-900 rounded-lg  hover:bg-[#101928] hover:text-white p-3 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-1 0a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0z" />
                <path d="M2 1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 1 6.586V2a1 1 0 0 1 1-1zm0 5.586 7 7L13.586 9l-7-7H2v4.586z" />
              </svg>
              <span className="ms-3">Sales</span>
            </Link>
          </li>
          <li>
          <Link
              to='/expenses'
              className="flex items-center text-gray-900 rounded-lg  hover:bg-[#101928] hover:text-white p-3 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484L5.562 3zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z" />
              </svg>
              <span className="ms-3">Expenses</span>
            </Link>
          </li>
          <li>
          <Link
              to='/employee'
              className="flex items-center text-gray-900 rounded-lg  hover:bg-[#101928] hover:text-white p-3 group"
            >
              <svg
                className="w-5 h-5 text-gray-500 transition duration-75  group-hover:text-white "
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <span className="ms-3">Employee</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
