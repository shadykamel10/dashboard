import { Box } from "@mui/material"
import Header from "../../comopnents/Header"
import { DataGrid } from "@mui/x-data-grid"
import { rows } from "./data"
import { columns } from "./data"
const Invoices = () => {
  return (
    <Box>
    <Header 
// @ts-ignore
    title={"Invoices"} subTitle={"List of Contact for future reference"} />

    <Box sx={{ height: 600,  mx: "auto" }}>
      <DataGrid
      checkboxSelection
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  </Box>
  )
}

export default Invoices
