import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useState ,useEffect } from "react";
import axios  from "axios";
import store from "../../Store";
const Team = () => {
  const [dat,SetDat]=useState([]);
  const [ApiData,SetApiData]=useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate=useNavigate();
  useEffect(()=>{
    axios.get(`https://backend-nft.onrender.com/api/student/${store.getState().wallet}`).then((response)=>{
      const rowsWithId = response.data.map((row, index) => ({ ...row, id: index }));
      SetDat(rowsWithId);
    })
  
   
  },[dat])
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "Title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Details",
      headerName: "Details",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Price",
      headerName: "Price",
      flex: 1,
    },
    {
      field: "Contact",
      headerName: "Contact",
      flex: 1,
    }
  ];
if(dat===undefined){
  console.log(dat);
  return null
}
  return (
    <Box m="20px">
      <Header title="Your Courses" subtitle="See all the enrolled Courses" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={dat}  columns={columns}  onSelectionModelChange ={(newSelection) => {
          console.log("HEllo");
          SetApiData(newSelection);
      }}/>
      </Box>
    </Box>
  );
};

export default Team;
