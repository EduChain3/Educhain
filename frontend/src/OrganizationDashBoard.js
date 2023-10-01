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
import OrganizationSidebar from "./scenes/global/Organization-Sidebar";
import OrganizationTopBar from "./scenes/global/Organization-Topbar";
import OrganizationTeam from "./scenes/Organization-Team/index";
import FirstPage from "./Pages/FirstPage";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <OrganizationSidebar isSidebar={isSidebar} />
          <main className="content">
            <OrganizationTopBar setIsSidebar={setIsSidebar} />
          <OrganizationTeam/>
    
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
