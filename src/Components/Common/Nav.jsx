import {useContext} from 'react'
import bars from "../../assets/nav/bars.svg";
import profile from "../../assets/nav/profile.png";
import customer from "../../assets/nav/customer-service.png";
import notification from "../../assets/nav/notification.svg";
import DataContext from '../../Context/DataContext'

const Nav = () => {
  const {setCheck } = useContext(DataContext);
  return (
    <nav className="flex justify-between items-center py-3 sm:px-10 px-3">
      <button onClick={() => setCheck(true)}>
        <img className="w-[33px] h-[28px]" src={bars} alt="bars" />
      </button>
      <div className="flex items-center gap-14">
        <div className="sm:flex hidden items-center gap-3">
          <img className="w-[71px] h-[71px]" src={profile} alt="profile" />
          <div>
            <h4 className="font-bold text-[20px]">Bella Famina</h4>
            <p className="text-base text-[#7B7B7B]">Joined 2 months ago</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-[45px] h-[45px]" src={customer} alt="customer" />
          <img
            className="w-[35px] h-[35px]"
            src={notification}
            alt="notification"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
