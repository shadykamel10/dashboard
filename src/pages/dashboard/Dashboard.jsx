import { Box, Button, Stack } from "@mui/material"
import Row1 from "./Row1"
import Row2 from "./Row2"
import Row3 from "./Row3"
import { DownloadOutlined } from "@mui/icons-material"

const Dashboard = () => {
  return (
    <Stack direction="column" spacing={2} >
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        
      <Button variant="contained" sx={{ width: "200px" }}>
      <DownloadOutlined />
        download reports
        </Button>
      </Box>

      <Row1/>
      <Row2/>
      <Row3/>
    </Stack>
  )
}

export default Dashboard
