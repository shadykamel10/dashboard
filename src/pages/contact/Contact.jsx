import { Box } from "@mui/material"
import Header from "../../comopnents/Header"
import { DataGrid, GridToolbar } from "@mui/x-data-grid"
import { columns, rows } from "./data"
const Contact = () => {
  return (
    <Box>
      <Header 
// @ts-ignore
      title={"Contact"} subTitle={"List of Contact for future reference"} />

      <Box sx={{ height: 600, mx: "auto" }}>
        <DataGrid
          slots={{
            toolbar: GridToolbar,
          }}
          rows={rows}
          // @ts-ignore
          columns={columns}
        />
      </Box>
    </Box>
  )
}

export default Contact
