import { Link } from "react-router-dom";
import bg from "../assets/black-texture.jpg";

const Developers = () => {
  return (
    <div className="font-lexend bg-rp-black lg:h-screen h-full">
      <Link to="/">
        <div className="text-rp-yellow absolute top-7 left-10 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </Link>
      <div className="pt-8">
        <h1 className="font-bold text-2xl flex ml-auto mr-auto bg-mj-yellow w-fit p-2 rounded-xl px-4 ">
          Developers
        </h1>
      </div>
      <div className="lg:flex justify-around mt-5 lg:mt-32">
        <div className="mx-auto mt-5 lg:mt-0 lg:mx-0 bg-jp-black relative shadow-slate-700 shadow-md rounded-md w-72 h-96">
          <div className="h-2/6 bg-mj-yellow rounded-t-md overflow-hidden"></div>
          <img
            src="https://example.com/yash.jpg" // Replace with the actual URL of the photo
            alt="developer"
            className="absolute w-32 top-16 left-20 border-2 rounded-full bg-black border-black"
          />
          <div className="mt-20 flex flex-col items-center justify-center ">
            <h1 className=" text-slate-300 text-3xl font-semibold">Yash Raj</h1>
            <h1 className="mt-1 text-lg text-slate-500">Backend Developer</h1>
          </div>
        </div>
        <div className="mx-auto mt-5 lg:mt-0 lg:mx-0 bg-jp-black relative shadow-slate-700 shadow-md rounded-md w-72 h-96">
          <div className="h-2/6 bg-mj-yellow rounded-t-md overflow-hidden"></div>
          <img
            src="https://example.com/rohan.jpg" // Replace with the actual URL of the photo
            alt="developer"
            className="absolute w-32 top-16 left-20 border-2 rounded-full bg-black border-black"
          />
          <div className="mt-20 flex flex-col items-center justify-center ">
            <h1 className=" text-slate-300 text-3xl font-semibold">Yashwant yadav</h1>
            <h1 className="mt-1 text-lg text-slate-500"> Web Developer</h1>
          </div>
        </div>

        <div className="mx-auto mt-5 lg:mt-0 lg:mx-0 bg-jp-black relative shadow-slate-700 shadow-md rounded-md w-72 h-96">
          <div className="h-2/6 bg-mj-yellow rounded-t-md overflow-hidden"></div>
          <img
            src="https://example.com/suyash.jpg" // Replace with the actual URL of the photo
            alt="developer"
            className="absolute w-32 top-16 left-20 border-2 rounded-full bg-black border-black"
          />
          <div className="mt-20 flex flex-col items-center justify-center ">
            <h1 className=" text-slate-300 text-3xl font-semibold">Kundan Kumar</h1>
            <h1 className="mt-1 text-lg text-slate-500">Full-stack Web Developer</h1>
          </div>
        </div>

        <div className="mx-auto mt-5 lg:mt-0 lg:mx-0 bg-jp-black relative shadow-slate-700 shadow-md rounded-md w-72 h-96">
          <div className="h-2/6 bg-mj-yellow rounded-t-md overflow-hidden"></div>
          <img
            src="https://example.com/aniket.jpg" // Replace with the actual URL of the photo
            alt="developer"
            className="absolute w-32 top-16 left-20 border-2 rounded-full bg-black border-black"
          />
          <div className="mt-20 flex flex-col items-center justify-center ">
            <h1 className=" text-slate-300 text-3xl font-semibold">Shivam Kumar</h1>
            <h1 className="mt-1 text-lg text-slate-500">Full Stack Web Developer</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
