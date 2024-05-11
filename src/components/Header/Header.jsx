import { navLinks } from '../../constants/navLinks';
import {
  FaPrescription,
  FaCartArrowDown,
  FaInstagram,
  FaArrowAltCircleDown,
} from 'react-icons/fa';

const Header = () => {
  return (
    <div className="w-full h-full relative bg-cover bg-center bg-beach flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55 z-50"></div>
      <div className="flex items-center justify-between w-full absolute top-0 z-50 px-5">
        <div className="text-white font-semibold text-[30px]">WA Rocket</div>
        <div className="items-center lg:flex hidden gap-5">
          {navLinks.map((item) => (
            <a
              href={item.path}
              key={item.title}
              className="font-light text-white no-underline"
            >
              {item.title}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <FaPrescription color="white" className="cursor-pointer" />
          <FaCartArrowDown color="white" className="cursor-pointer" />
          <FaInstagram color="white" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <div className="text-white lg:text-[60px] text-[40px] font-semibold z-50 text-center">
          Build YourSelf
        </div>
        <p className="text-gray-300 z-50 text-center text-[15px] lg:max-w-[700px] max-w-[450px] px-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
          vero aperiam dolore ratione nulla architecto fugiat vel totam aut
          fugit optio.
        </p>
        <button className="rounded-full bg-white text-black px-4 py-2 z-50 font-semibold ">
          Change your mind
        </button>
      </div>
      <div className="absolute bottom-5 w-full z-50 flex items-center justify-center">
        <FaArrowAltCircleDown
          color="white"
          width={30}
          height={30}
          className="cursor-pointer animate-bounce"
        />
      </div>
    </div>
  );
};

export default Header;
