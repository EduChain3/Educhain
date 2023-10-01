import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

import { useState ,useEffect } from "react";
import axios  from "axios";
import { useNavigate } from "react-router-dom";
const api=()=>{
  axios.get("http://localhost:8000/api/classroom/642e9153ba9cfef503501b50/students").then((data)=>{
    console.log(data.data);
  })
}
const Team = (props) => {
  const [dat,SetDat]=useState([]);
  const [ApiData,SetApiData]=useState("");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate=useNavigate();
  let b=props.data.id;
  useEffect(()=>{
    axios.get(`https://backend-nft.onrender.com/api/classroom/${b}/students`).then((response)=>{
        console.log(response);
        console.log(props.data.id);
      const rowsWithId = response.data.map((row, index) => ({ ...row, id: row.Wallet }));
      SetDat(rowsWithId);
    })
  
   
  },[])
  const columns = [
    { field: "id", headerName: "Wallet" },
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    // {
    //   field: "Details",
    //   headerName: "Details",
    //   type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },
    // {
    //   field: "Price",
    //   headerName: "Price",
    //   flex: 1,
    // },
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "Contact ",
      headerName: "Mint NFT",
      flex: 1,
      renderCell: ({  access  }) => {
        return (
          <button style={{
            width: "70%",
            margin: 0,
            color: "#fff",
            background: "#1FB264",
            border: 0,
            padding: "10px",
            borderRadius: "4px",
            borderBottom: "4px solid #15824B",
            transition: "all .2s ease",
            outline: "none",
            textTransform: "uppercase",
            fontWeight: 700,
          }} onClick={()=>{
            if(ApiData!==""){
              
              alert(ApiData);
              navigate(`/${ApiData}/nft`);
              
            }
          }}>Mint NFT</button>
          // <Box
          //   width="60%"
          //   m="0 auto"
          //   p="5px"
          //   display="flex"
          //   justifyContent="center"
          //   backgroundColor={
          //     access === "admin"
          //       ? colors.greenAccent[600]
          //       : access === "manager"
          //       ? colors.greenAccent[700]
          //       : colors.greenAccent[700]
          //   }
          //   borderRadius="4px"
          // >
          //   {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
          //   {access === "manager" && <SecurityOutlinedIcon />}
          //   {access === "user" && <LockOpenOutlinedIcon />}
          //   <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
          //     {access}
          //   </Typography>
          // </Box>
        );
      },
    },
  ];
if(dat===undefined){
  console.log(dat);
  return null
}
  return (
    <Box m="20px">
      <Header title="Students" subtitle="Manage all your Students" />
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
