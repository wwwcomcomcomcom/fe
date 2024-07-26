import { Link, useNavigate } from "react-router-dom";
import LeftArrowIcon from "./elements/LeftArrowIcon";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <div
        className="translate-x-24 translate-y-16 cursor-pointer"
        onClick={() => navigate(-1)}
      >
        <LeftArrowIcon />
      </div>
      <div className="flex justify-center items-center h-lvh">
        <div className="w-1/3 h-fit border border-gray-300 rounded-3xl flex flex-col items-center py-20">
          <h2 className="text-2xl font-semibold">Login</h2>

          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              className="border border-gray-300 p-2 rounded-lg"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-2 rounded-lg"
            />
            <p className="text-gray-400 text-right mt-2 mb-4 text-sm ">
              회원이 아니신가요?
              <Link to="/signup" className="text-blue-400">
                회원가입
              </Link>
            </p>

            <button className="bg-blue-500 text-white p-2 rounded-lg">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
