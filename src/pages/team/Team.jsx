import React from "react";
import {DataGrid} from "@mui/x-data-grid";
import {rows} from "./data";
import {useTheme} from "@mui/material";
import {Box, Typography} from "@mui/material";
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from "@mui/icons-material";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();

  // field ==> Reqird
 const columns = [
  {
    field: "id",
    headerName: "ID",
    flex: 0.3,
    minWidth: 40,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    minWidth: 100,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1.5,
    minWidth: 150,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "age",
    headerName: "Age",
    flex: 0.4,
    minWidth: 60,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "phone",
    headerName: "Phone",
    flex: 1,
    minWidth: 120,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "access",
    headerName: "Access",
    flex: 1,
    display: "flex",
    minWidth: 130,
    align: "center",
    headerAlign: "center",
    renderCell: ({ row: { access } }) => (
      <Box
        sx={{
          p: "5px",
          width: "50%",
          borderRadius: "3px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor:
            access === "Admin"
              ? theme.palette.primary.dark
              : access === "Manager"
              ? theme.palette.secondary.dark
              : "#3da58a",
        }}
      >
        {access === "Admin" && (
          <AdminPanelSettingsOutlined sx={{ color: "#fff" }} fontSize="small" />
        )}
        {access === "Manager" && (
          <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
        )}
        {access === "User" && (
          <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
        )}
        <Typography sx={{ fontSize: "13px", color: "#fff", ml: 1 }}>
          {access}
        </Typography>
      </Box>
    ),
  },
];


  return (
    <Box>
      <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

      <Box sx={{ height: '75vh', width: '100%' }}>
  <DataGrid
    rows={rows}
    columns={columns}
    disableColumnMenu // Optional: Hide the menu for clean UI
    disableDensitySelector // Optional
    autoHeight={false} // Keep controlled height
    sx={{
      '& .MuiDataGrid-cell': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    }}
  />
</Box>

    </Box>
  );
};

export default Team;
