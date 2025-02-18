import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomePage from "./Home.responsive";
import CalendarReponsive from "./Calendar.responsive";
import Profile from "./Profile.resposive";
import MovieIcon from '@mui/icons-material/Movie';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Highlight from "./Highlight.responsive";
import News from "./News.repsonsive";
export default function FixedBottomNavigation() {
  
  const messageExamples = [
    {
      page: <CalendarReponsive  />,
    },
    {
      page: <News  />,
    },
    {
      page: <HomePage  /> ,
    },   
    {
      page: <Highlight  />,
    },
    {
      page: <Profile  />,
    },
  
  ];
  if(!localStorage.getItem("page")) {
    localStorage.setItem("page", 2)
  }
  const page = localStorage.getItem("page");
  const [value, setValue] = useState(Number(page));
  const [activeComponent, setActiveComponent] = useState(
    messageExamples[2].page
  );
  useEffect(() => {
    setActiveComponent(messageExamples[value].page);
  }, [value]);
  return (
    <div
      className="xl:hidden w-full" 
    >
      <CssBaseline />
      {activeComponent}
      <Paper
        sx={{
          py: 1,
          position: "fixed",
          overflow : "hidden",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
        
      >
        <BottomNavigation
          showLabels
          className="flex  w-full"
          value={value}
          onChange={(event, newValue) => {
            localStorage.setItem("page", newValue);
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label={<span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', color : "black" }}>Lịch trình</span>}
            sx={{
              fontWeight: 600,
              color: "rgb(151, 151, 153)",
             
              ":focus" : {
                borderRadius: "50%",
                paddingTop : "10px",
                paddingBottom : "10px",
                bgcolor : "#f8c21b", 
                color: "black",
              } ,
             
            }}
            icon={<EmojiEventsIcon sx={{ fontSize: 25 }} />}
          />
           <BottomNavigationAction
            label={<span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', color : "black" }}>Tin tức</span>}
            sx={{
              fontWeight: 600,
              color: "rgb(151, 151, 153)",
             ":focus" : {
                borderRadius: "50%",
                paddingTop : "10px",
                paddingBottom : "10px",
                bgcolor : "#f8c21b", 
                color: "black",
              } ,
            }}
            icon={<CalendarMonthIcon sx={{ fontSize: 25 }} />}
          />
          <BottomNavigationAction
            label={<span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', color : "black" }}>Trang chủ</span>}
            sx={{
              fontWeight: 600,
              color: "rgb(151, 151, 153)",
              ":focus" : {
                borderRadius: "50%",
                paddingTop : "10px",
                paddingBottom : "10px",
                bgcolor : "#f8c21b", 
                color: "black",
              } ,
            }}
            icon={<LiveTvIcon sx={{ fontSize: 25 }} />}
          />
          <BottomNavigationAction
            label={<span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', color : "black" }}>Highlight</span>}
            sx={{
              fontWeight: 600,
              color: "rgb(151, 151, 153)",
            ":focus" : {
                borderRadius: "50%",
                paddingTop : "10px",
                paddingBottom : "10px",
                bgcolor : "#f8c21b", 
                color: "black",
              } ,
            }}
            icon={<MovieIcon sx={{ fontSize: 25 }} />}
          />
          <BottomNavigationAction
            label={<span style={{ fontFamily: 'Arial, sans-serif', fontSize: '10px', color : "black" }}>Hồ sơ</span>}
            sx={{              
              color: "rgb(151, 151, 153)",
             ":focus" : {
                borderRadius: "50%",
                paddingTop : "10px",
                paddingBottom : "10px",
                bgcolor : "#f8c21b", 
                color: "black",
              } ,
            }}
            icon={<PersonIcon sx={{ fontSize: 25 }} />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}