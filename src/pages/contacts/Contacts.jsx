import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./data";
import Header from "../../components/Header";

const Contacts = () => {
  return (
    <Box>
      <Header
        title="CONTACTS"
        subTitle="List of Contacts for Future Reference"
      />

      <Box sx={{ height: 650, width: "99%", mx: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          slotProps={{
            toolbar: { showQuickFilter: true }, // optional config
          }}
          slots={{
            toolbar: () => null, // required if you want a custom toolbar later
          }}
          showToolbar // <-- the key change
        />
      </Box>
    </Box>
  );
};

export default Contacts;
