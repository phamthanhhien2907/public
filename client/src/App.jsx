import { Route, Routes } from "react-router-dom";
import path from "./utils/path";
import Public from "./pages/Public";
import Home from "./pages/index";
import "./index.css";
import Match from "./pages/Match";
import Calendar from "./components/Canlendar";
import Download from "./components/Download";
import FixedBottomNavigation from "./components/FixedBottomNavigation";
import { useMediaQuery } from "@mui/material";
import MatchResponsive from "./pages/Match.responsive";
import PublicResponsive from "./pages/Pubic.responsive";
import Countdown from "./pages/Countdown";
function App() {
  const isMobile = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Routes>
        {isMobile ? (
          <Route path={path.PUBLIC} element={<PublicResponsive />}>
            <Route path={path.HOME} element={<FixedBottomNavigation />} />
            <Route path={path.MATCH} element={<MatchResponsive />} />
          </Route>
        ) : (
          <Route
            path={path.PUBLIC}
            element={<Public />}
            className="max-sm:hidden max-lg:hidden w-full"
          >
            <Route path={path.HOME} element={<Home />} />
            <Route path={path.MATCH} element={<Match />} />
            <Route path={path.CALENDAR} element={<Calendar />} />
            <Route path={path.DOWNLOAD} element={<Download />} />
            <Route path="/countdown" element={<Countdown />} />
          </Route>
        )}
      </Routes>
    </>
  );
}

export default App;
