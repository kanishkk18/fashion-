import { Link } from "react-router-dom";

export default function Sidebar() {
 
  return (
    <div className="w-full">
      <div className="w-[28%] fixed">
        <p className="text-start text-2xl font-normal">My Account</p>

        <Link to="/Personalinfo">
          <div className="px-5 py-1 rounded-lg mb-1 hover:bg-gray-200">
            <p className="text-lg font-medium text-black text-start mt-1 cursor-pointer">
              Personal Details
            </p>
            <p className="text-xs text-start text-gray-500 cursor-pointer">
              Name, Gender, Contact
            </p>
          </div>
        </Link>

        <Link to="/Order">
          <div className="px-5 py-1 rounded-lg mb-1 hover:bg-gray-200">
            <p className="text-lg font-medium text-black text-start mt-1 cursor-pointer">
              Orders
            </p>
            <p className="text-xs text-start text-gray-500 cursor-pointer">
              Check Order Status
            </p>
          </div>
        </Link>

        <div className="px-5 py-1 rounded-lg mb-1 hover:bg-gray-200">
          <p className="text-lg font-medium text-black text-start mt-1 cursor-pointer">
            Addresses
          </p>
          <p className="text-xs text-start text-gray-500 cursor-pointer">
            Manage Saved Address
          </p>
        </div>

        <div className="px-5 py-1 rounded-lg mb-1 bg-gradient-to-r from-[#418CB7] via-[#418CB7] to-gray-200">
          <p className="text-lg font-medium text-black text-start mt-1 cursor-pointer">
            About Us
          </p>
          <p className="text-xs text-start text-gray-500 cursor-pointer">
            Find Out More About Us
          </p>
        </div>

        <div className="px-5 py-1 rounded-lg mb-1 hover:bg-gray-200">
          <p className="text-lg font-medium text-black text-start mt-1 cursor-pointer">
            Help & FAQ
          </p>
          <p className="text-xs text-start text-gray-500 cursor-pointer">
            Resolve Your Queries
          </p>
        </div>

        <div className="px-5 py-1 rounded-lg mb-1 hover:bg-gray-200">
          <p className="text-lg font-medium text-black text-start mt-1 cursor-pointer">
            Privacy Policy
          </p>
          <p className="text-xs text-start text-gray-500 cursor-pointer">
            Read The Policy
          </p>
        </div>

        <div
          className="px-5 py-2 rounded-lg mb-1 hover:bg-gray-200"
          
        >
          <p className="text-lg font-medium text-black text-start cursor-pointer">
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}
