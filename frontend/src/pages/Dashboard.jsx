import React from 'react';
import Sidebar from "../components/Sidebar"
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoCloudUploadOutline } from "react-icons/io5";
    import { LuTriangleAlert } from "react-icons/lu";
        import { IoMdBook } from "react-icons/io";
        import { useNavigate } from 'react-router-dom'




const Dashboard = () => {

    const navigate = useNavigate();

  return (
    <div className="flex items-center gap-2 overflow-x-hidden">
      <Sidebar />
      <div className="w-1 bg-black h-screen relative bottom-7 pb-4"></div>

      <div className="dash">
        <div className="into flex items-center gap-2">
          <img
            alt=""
            src='img/person.webp'
            className='w-10 rounded-full mr-3'
          />
          <h1 className="font-bold text-2xl mb-12 mt-6">Hello, Divine</h1>
        </div>
        <div className="text ml-20">
          <p className="font-bold text-4xl mb-3 font-poppins ">
            YOUR ACADEMIC <br />
            BODYGUARD AGAINST <br />
            SCAMS
          </p>
          <p className="mb-12">
            Detect and avoid scholarship scams, fake offers<br />
            and forged documents with the use of AI
          </p>
        </div>

        <div className="upload flex flex-wrap ">
          <div className="scam border border-gray-200 shadow-lg rounded-lg w-80 ml-4">
            <section className="flex items-centre gap-2 mb-5 mt-2 ml-4">
              <FaMagnifyingGlass className=" text-green-400 text-5xl mr-2" />
              <p className="text-xl font-bold">
                Quick Scam <br />
                Check
              </p>
            </section>
            <p className="ml-4 text-gray-400 mb-4">Paste suspicious text to scan</p>
            <button onClick={() => navigate('/scan-text')}
            className="rounded-lg bg-green-500 ml-12 p-2 mb-4 text-white font-semibold">
              Scan Now
            </button>
          </div>

          <div className="scam border border-gray-200 shadow-lg rounded-lg w-1/4 ml-4">
            <section className="flex items-centre gap-2 mb-5 mt-2 ml-4">
              <IoCloudUploadOutline className=" text-green-400 text-5xl mr-2" />
              <p className="text-xl font-bold">
                Upload <br />
                Document
              </p>
            </section>
            <p className="ml-4 text-gray-400 mb-4">Upload Files Docx, PDF, JPG, etc.</p>
            <button onClick={() => navigate('/upload-doc')}
            className="rounded-lg bg-green-500 ml-12 p-2 mb-4 text-white font-semibold">
              Upload Document
            </button>
          </div>

          <div className="scam border border-gray-200 shadow-lg rounded-lg w-1/4 ml-4">
            <section className="flex items-centre gap-2 mb-5 mt-2 ml-4">
              <IoMdBook className=" text-green-400 text-5xl mr-2" />
              <p className="text-xl font-bold">
                Scam<br />
                Education
              </p>
            </section>
            <p className="ml-4 text-gray-400 mb-4">Learn how to avoid scams and risks</p>
            <button onClick={() => navigate('/educate')}
            className="rounded-lg bg-green-500 ml-12 p-2 mb-4 text-white font-semibold">
              Learn now
            </button>
          </div>

          <div className="scam border border-gray-200 shadow-lg rounded-lg w-80 ml-4 mt-7">
            <section className="mb-5 mt-2 ml-4">
              <LuTriangleAlert className=" text-green-400 text-5xl ml-28" />
              <p className="text-xl font-bold ml-20 mt-4">Report Scam</p>
            </section>
            <p className="ml-4 text-gray-400 mb-4">Learn how to avoid scams and risks</p>
            <button 
            onClick={() => navigate('/report')}
            className="rounded-lg bg-green-500 ml-12 p-2 mb-4 text-white font-semibold mt-6" >
              Report suspicious activity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;