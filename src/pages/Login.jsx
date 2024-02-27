import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center ">
      <div className="shadow-md p-4 rounded-lg">
        {/* ADD YOUR LOGIN LOGIC HERE */}
        <h1 className="text-4xl">Login</h1>
        <p>This is just for demo</p>
        <div className="mt-10 flex gap-6">
          <Link to="/empDashboard">
            <div className="bg-yellow-300 p-2 px-4 rounded-md cursor-pointer">
              Emp Dahboard
            </div>
          </Link>

          <Link to="hrDashboard">
            <div className="bg-yellow-300 p-2 px-4 rounded-md cursor-pointer">
              Hr Dahboard
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
