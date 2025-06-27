import React from "react";
    import { FaHome } from "react-icons/fa";
    import { FaRegListAlt } from "react-icons/fa";
    import { FiUpload } from "react-icons/fi";
    import { IoMdBook } from "react-icons/io";
    import { LuTriangleAlert } from "react-icons/lu";
    import { FaShieldHeart } from "react-icons/fa6";
        import { useNavigate } from 'react-router-dom'



export default function Sidebar() {
  const navigate = useNavigate();
return (
  <div className="sidebar w-64 h-screen ">
    <div className="logo flex items-center gap-2">
     < FaShieldHeart className="text-green-400 text-5xl"/>
  <h1 className="font-bold text-2xl mb-12 mt-6">EduGuard AI</h1>
  </div>

  <div className="links">
    <ul>
      <li onClick={()=> navigate('/dashboard')} className="flex items-center gap-2 mb-5 ml-6 hover:bg-green-200"> <FaHome />
       <span> Dashboard</span></li>
      <li onClick={()=>navigate('/scan-text')}className="flex items-center gap-2 mb-5 ml-6 hover:bg-green-200"><FaRegListAlt />

        <span>TextScanner</span></li>
      <li onClick={()=>navigate('/upload-doc')}className="flex items-center gap-2 mb-5 ml-6 hover:bg-green-200">
        <FiUpload />

       <span> Doc Checker</span></li>
      <li onclick={()=>('/educate')}className="flex items-center gap-2 mb-5 ml-6 hover:bg-green-200"><IoMdBook />
       <span>Education </span> </li>
    <li onClick={()=>navigate('/report')} className="flex items-center gap-2 mb-5 ml-6 hover:bg-green-200">
  <LuTriangleAlert />
  <span>Support</span>
</li>
    </ul>
  </div>
  </div>
)
}