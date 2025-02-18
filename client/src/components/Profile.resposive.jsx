import Avatar from "@mui/material/Avatar";

import { Link, useNavigate } from "react-router-dom";
import banner_profile from "@/assets/banner_profile.gif"
import cuahang from "@/assets/cuahang.png"
import chuongtrinh from "@/assets/chuongtrinh.png"
import theo from "@/assets/theo.png"
import lichsu from "@/assets/lichsu.png"
import DiamondIcon from '@mui/icons-material/Diamond';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import EditNoteIcon from '@mui/icons-material/EditNote';
import InfoIcon from '@mui/icons-material/Info';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import SettingsIcon from '@mui/icons-material/Settings';

const Profile = () => {

  
  return (
   <div className="p-4 flex flex-col gap-6 pb-40">
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
          <Avatar sx={{ width : "45px", height : "45px" }}>A</Avatar>
          <span className="font-semibold text-lg">Anonymous</span>
          </div>
          <span className="text-red-500 text-xs">Đăng nhập/Đăng kí để có thêm nhiều lợi ích</span>
        </div>
        <div >
          <button className="w-40 h-10 bg-[#ffdb00] rounded-lg font-semibold">Điểm danh</button>
        </div>
      </div>
      <img src={banner_profile} alt="banner_profile " />
      <div className="flex justify-between bg-gray-100 shadow-sm p-4">
          <div className="flex flex-col items-center">
            <img src={cuahang} alt="cuahang" className="w-11 h-11" />
            <span>Cửa hàng</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={chuongtrinh} alt="chuongtrinh" className="w-11 h-11" />
            <span>Chương trình</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={theo} alt="theo" className="w-11 h-11" />
            <span>Theo</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={lichsu} alt="lichsu" className="w-11 h-11" />
            <span>Lịch sử</span>
          </div>
      </div>
      <div className="flex flex-col gap-4 ">
      <div className="flex flex-col justify-center gap-6 bg-gray-100 shadow-sm p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <DiamondIcon  sx={{ color : "inherit", width : "20px", height : "20px" }}/>
            <span className=" text-sm">Thứ hạng của tôi</span>
          </div>
            <ArrowForwardIosIcon sx={{ color : "inherit", width : "16px", height : "20px" }}/>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MarkAsUnreadIcon  sx={{ color : "inherit", width : "20px", height : "20px" }}/>
            <span className=" text-sm">Mời bạn bè</span>
          </div>
           <div className="flex gap-4 items-center">
            <span className="text-xs text-gray-500 font-semibold">Mời bạn để kiếm điểm</span>
            <ArrowForwardIosIcon sx={{ color : "inherit", width : "16px", height : "20px" }}/>
           </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HeadphonesIcon  sx={{ color : "inherit", width : "20px", height : "20px" }}/>
            <span className=" text-sm">CS trực tuyến</span>
          </div>
            <ArrowForwardIosIcon sx={{ color : "inherit", width : "16px", height : "20px" }}/>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <EditNoteIcon  sx={{ color : "inherit", width : "20px", height : "20px" }}/>
            <span className=" text-sm">Đầu vào</span>
          </div>
            <ArrowForwardIosIcon sx={{ color : "inherit", width : "16px", height : "20px" }}/>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <InfoIcon  sx={{ color : "inherit", width : "20px", height : "20px" }}/>
            <span className=" text-sm">Về chúng tôi</span>
          </div>
            <ArrowForwardIosIcon sx={{ color : "inherit", width : "16px", height : "20px" }}/>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PersonOffIcon  sx={{ color : "inherit", width : "20px", height : "20px" }}/>
            <span className=" text-sm">Xóa tài khoản</span>
          </div>
            <ArrowForwardIosIcon sx={{ color : "inherit", width : "16px", height : "20px" }}/>
        </div>
      </div>
      <div className="flex items-center justify-between bg-gray-100 shadow-sm p-4">
              <div className="flex items-center gap-2">
                <SettingsIcon  sx={{ color : "inherit", width : "20px", height : "20px" }}/>
                <span className=" text-sm">Sắp xếp</span>
              </div>
                <ArrowForwardIosIcon sx={{ color : "inherit", width : "16px", height : "20px" }}/>
      </div>

      </div>
   </div>
  );
};

export default Profile;