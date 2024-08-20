import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white h-[44vh] gap-4 px-5 md:px-0 text-sm md:text-base ">
        <div className="font-bold flex items-center justify-center md:text-5xl text-3xl mx-auto">
          <div className="pt-4 md:pt-4 md:mx-5">
            Buy Me A Coffee
          </div>

          <span>
            <img className='' width={100} src="/tea.gif" alt="" />
          </span>
        </div>
        <p className="md:mb-4 mb-4 text-center md:text-left" >
          A crowdfunding plateform for creators. Get funded by your fans and followers.
        </p>
        <div>
          <Link href={"/login"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          </Link>
          <Link href={"/about"}>
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>
        </div>
      </div>
      <div className="bg-white text-black h-1 opacity-10">
      </div>
      <div className="text-white container mx-auto py-12 ">
        <h1 className="font-bold text-2xl text-center mb-4">
          Your Fans can buy you a Chai
        </h1>
        <div className="flex gap-5 justify-around px-10">
          <div className="item space-y-3 flex flex-col justify-center items-center" >
            <img className=" bg-slate-500 p-2 rounded-full" width={100} src="/man1.gif" alt="" />
            <p className="font-bold text-center">Suppoters want to help</p>
            <p className=" text-center">Your suppoters are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center" >
            <img className=" bg-slate-500 p-2 rounded-full" width={100} src="/coin.gif" alt="" />
            <p className="font-bold text-center ">Suppoters want to contribute</p>
            <p className=" text-center">Your suppoters willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center" >
            <img className=" bg-slate-500 p-2 rounded-full " width={100} src="/group.gif" alt="" />
            <p className="font-bold text-center">Suppoter want to collabrate</p>
            <p className=" text-center">Your suppoters are ready to collabrate with you</p>
          </div>
        </div>
      </div>
      <div className="bg-white text-black h-1 opacity-10">
      </div>
      <div className="text-white container mx-auto py-12 flex flex-col items-center justify-center">
        <h1 className="font-bold text-2xl text-center mb-8 ">
          Learn More About Us
        </h1>
            <video className="h-96" controls src="myvedio.mp4" type="video/mp4">
            </video>
            {/* <iframe src="https://www.youtube.com/embed/Nq2wYlWFucg?si=zad9OLzmPGxXoK4c" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */}

          </div>
        </>
        );
}
