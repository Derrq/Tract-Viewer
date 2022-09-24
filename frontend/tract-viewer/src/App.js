import React, { useState, useEffect, useRef, forwardRef } from "react";
import { Typography, AppBar, Button, CssBaseline, Toolbar, Box } from '@mui/material'
import PageviewRounded from '@mui/icons-material/PageviewRounded';
import CircularProgress from "@mui/material/CircularProgress";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TractDetailModal from "./components/TractDetailModal";
import useModal from "./components/useModal";
import { margin } from "@mui/system";

function App() {
  const [tableData, setTableData] = useState([]);
  const { isShowing, toggle } = useModal();
  const [selectedTractId, setSelectedTractId] = useState();

  useEffect(() => {
    fetch("/tracts")
      .then((data) => data.json())
      .then((data) => setTableData(data))
  }, [])

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PageviewRounded sx={{ marginRight: 2 }} />
          <Typography variant="p" sx={{ fontSize: 17 }} >
            Tract Viewer
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>

          <Typography sx={{margin :5}}align="center" gutterBottom >
            <i>View Tracts here. Click the "View"  button to see more details for each tract</i>
          </Typography>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
              <TableHead>
                <TableRow>
                  <TableCell sx={{width:'1px'}} align="left"><b> FID </b></TableCell>
                  <TableCell align="left"><b> TRACT CE </b></TableCell>
                  <TableCell align="left"><b> GEO ID </b></TableCell>
                  <TableCell align="left"><b> NAME </b></TableCell>
                  <TableCell align="left"><b> NAME LSAD </b></TableCell>
                  <TableCell align="left"><b> MTF CC </b></TableCell>
                  <TableCell align="left"><b> FUNC STAT </b></TableCell>
                  <TableCell align="left"><b> A LAND </b></TableCell>
                  <TableCell align="left"><b> A WATER </b></TableCell>
                  <TableCell align="left"><b> ACTION </b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData &&
                  tableData?.tracts?.map((tracts) => (
                    tracts.map((tract, i) => (
                      <TableRow key={i}>
                        <TableCell>{tract[0]}</TableCell>
                        <TableCell>{tract[4]}</TableCell>
                        <TableCell>{tract[5]}</TableCell>
                        <TableCell>{tract[6]}</TableCell>
                        <TableCell>{tract[7]}</TableCell>
                        <TableCell>{tract[8]}</TableCell>
                        <TableCell>{tract[9]}</TableCell>
                        <TableCell>{tract[10]}</TableCell>
                        <TableCell>{tract[11]}</TableCell>
                        <TableCell>
                          <div>
                            <Button variant="contained" onClick={() => { toggle(); setSelectedTractId(tract[0]); }}>View</Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  ))
                }  <Box ><CircularProgress sx={{ maxWidth: 650, alignContent: "center", alignItems: "center", justifyContent:"center"}} /></Box>
              </TableBody>
            </Table>
          </TableContainer>
          <TractDetailModal
            isShowing={isShowing}
            hide={toggle}
            tractId={selectedTractId}

          />
        </div>
      </main>
    </>
  );
}

export default App;
