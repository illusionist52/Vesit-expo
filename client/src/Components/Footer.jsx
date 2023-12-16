import { FaGraduationCap } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../Slices/userSlice";
import toast from "react-hot-toast";

function Footer() {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  return (
    <div className="mt-20 mx-6 md:w-[80%] md:mx-auto">
      <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
        <h1 className="text-3xl font-bold text-#FDFEFF md:text-4xl">
          ENTER THE ACADEMIQ WORLD
        </h1>

        <div className="relative">
          <div className="gradient-04"></div>
        </div>

        <button  onClick={() => {
              if (!user.name) 
              navigate("/login");
              else
              toast.success("You're already logged in")
            }} className="bg-light_purple text-lg text-light_gray flex items-center justify-center gap-1 rounded-3xl py-[10px] px-[15px] w-[200px] md:text-xl md:w-[220px]">
          <FaGraduationCap color="#202B47" size={20} />
         Enter AcademIQ
        </button>
      </div>

      <div className="rounded-xl my-5 w-full h-[1.2px] bg-slate-400"></div>

      <div className="flex flex-col gap-6 md:flex-row md:justify-between">
        <h3 className="text-2xl font-bold">ACADEMIQ</h3>
        <p>Copyright &copy; 2023 AcademIQ. All rights reserved.</p>
      </div>
      <div className="my-5 flex gap-4">
        <FaTwitter size={23} />
        <FaLinkedin size={23} />
        <AiFillInstagram size={23} />
        <FaFacebook size={23} />
      </div>
    </div>
  );
}

export default Footer;
