import {
  Twitter,
  Facebook,
  Instagram,
  Github,
  ArrowUpRight
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-center font-sans w-full px-6 md:px-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 gap-10">
        <div className="text-left">
          <div className="flex flex-col text-2xl px-2 py-1">
          <p> THE </p><rt className="text-white bg-black w-fit font-semibold text-2xl px-1 block">StoreX.</rt>
          </div>
          <div className="flex gap-4 mt-4">
             <a href="#" className="text-gray-800 text-xl border border-gray-400 p-2 rounded-full">
      <Twitter className="h-5 w-5" />
    </a>
    <a href="#" className="text-gray-800 text-xl border border-gray-400 p-2 rounded-full">
      <Facebook className="h-5 w-5" />
    </a>
    <a href="#" className="text-gray-800 text-xl border border-gray-400 p-2 rounded-full">
      <Instagram className="h-5 w-5" />
    </a>
    <a href="#" className="text-gray-800 text-xl border border-gray-400 p-2 rounded-full">
      <Github className="h-5 w-5" />
    </a>
          </div>
       

        <div className="w-full mt-2">
          <p className="text-left text-sm font-semibold text-black mb-2">Sign up for personalized offers</p>
          <div className="relative flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-full py-2 px-4 text-black focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-1 bg-black text-white rounded-full p-1 hover:bg-gray-200 hover:text-black hover:border hover:border-black transform hover:scale-90 transition-all"
            >
              <ArrowUpRight className="h-5 w-5"/>
            </button>
          </div>
        </div> 
        </div>

        <div className="grid text-start grid-cols-2 md:grid-cols-4 gap-8 w-2/4">
          <div>
            <h3 className="text-start text-base font-semibold text-black mb-2">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Projects</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Category</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-left text-base font-semibold text-black mb-2">Features</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Instructions</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Catalog</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-left text-base font-semibold text-black mb-2">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Security</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-left text-base font-semibold text-black mb-2">Legal & Terms</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:underline">Privacy</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Terms</a></li>
              <li><a href="#" className="text-gray-600 hover:underline">Security</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 py-4">
        <p className="text-sm text-black">© Storex 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
