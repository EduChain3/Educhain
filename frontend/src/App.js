import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Choose from "./Pages/Choose";
import OrgChoose from "./Pages/OrgChoose";
// import FinalDash from "./Pages/DashFinal";
import OrgLogin from "./Pages/OrganizationLogin";
import OrgCheckWallet from "./Pages/OrgCheckwallet";
import OrganziationSignup from "./Pages/OrganizationSignup";
import AddCourse from "./Pages/AddCourse";
import StudentDashboard from "./StudentDashboard";
import TeamTrail from "./OrganizationDashBoard";
import StudentTeam from "./StudentTeam";
import Purchase from "./Pages/purchase";
import Buying from "./Pages/buying";
import Page1 from "./components/page1";
import StudentLogin from "./Pages/StudentLogin";
import StudentCheckWallet from "./Pages/StudentCheckWallet";
import SignUP from "./Pages/StudentSignup";
import FirstPage from "./Pages/FirstPage";
import Course from "./AvailableCourses";
import NFT from "./Pages/NFT";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <Sidebar isSidebar={isSidebar} /> */}
          <main className="content">
            {/* <Topbar setIsSidebar={setIsSidebar} /> */}
            <Routes>
              <Route path="/" element={<Choose />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/choose" element={<Choose />} />
              <Route path="/login/organization" element={<OrgLogin/>}/>
              <Route path="/org/checkwallet" element={<OrgCheckWallet/>}/>
              <Route path="/org/choose" element={<OrgChoose/>}/>
              <Route path="/org/signup" element={<OrganziationSignup/>}/>
              <Route path="/org/addcourse" element={<AddCourse/>}/>
              <Route path="/trail" element={<TeamTrail/>}/>
              <Route path="/:id/student" element={<StudentTeam/>}/>
              <Route path="/purchase" element={<Purchase/>}/>
              <Route path="/:courseid/buy" element={<Buying/>}/>
              <Route path="/page1" element={<Page1/>}/>
              <Route path="/student/checkwallet" element={<StudentCheckWallet/>}/>
              <Route path="/student/login" element={<StudentLogin/>}/>
              <Route path="/signup" element={<SignUP/>}/>
              <Route path="/first" element={<FirstPage/>}/>
              <Route path="/student/dashboard" element={<StudentDashboard/>}/>
              <Route path="/course" element={<Course/>}/>
              <Route path="/:studentWallet/nft" element={<NFT/>}/>
              <Route path="/org/earn" element={<OrgChoose/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
