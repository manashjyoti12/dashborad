import { Link } from "react-router-dom";
import { BsGridFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { FaBusinessTime } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

const HrSidebar = () => {
  const links = [
    {
      id: 1,
      name: "Dashboard",
      icon: <BsGridFill />,
      link: "/hrDashboard/home",
      active: true,
    },
    {
      id: 2,
      name: "Add User",
      icon: <FaUserPlus />,
      link: "/hrDashboard/adduser",
    },
    {
      id: 3,
      name: "Update User",
      icon: <FaUserEdit />,
      link: "/hrDashboard/updateuser",
    },
    {
      id: 4,
      name: "Add Shifts",
      icon: <FaBusinessTime />,
      link: "/hrDashboard/addshift",
    },
    {
      id: 5,
      name: "Leave application",
      icon: <FaCalendarAlt />,
      link: "/hrDashboard/leaveapplication",
    },
  ];
  return (
    <div className=" h-screen p-4">
      <div className="flex items-center gap-4">
        <img
          src="https://www.adp.com/-/media/adp/redesign2018/ui/logo-adp-fy19.svg?rev=0769ecbf84a9412a93e2cd52b7319a13&hash=C2451A542096BF16BC40698417D5A6FD"
          alt="ADP logo"
          className="w-[120px] bg-gray-100 p-2 rounded-lg"
        />
        <p className="text-xs text-[#9A9A9A]">Attendance Management System</p>
      </div>
      <hr className="mt-3 " />

      {links.map((props) => (
        // eslint-disable-next-line react/prop-types
        <Link to={props.link} key={props.id}>
          <div
            className={`flex justify-start items-center gap-5 p-2 rounded-md m-2  ${
              props.active ? "bg-[#343C53] text-white" : "bg-[#FAFAFA] "
            } `}
          >
            <div>{props?.icon}</div>
            <div>{props?.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HrSidebar;
