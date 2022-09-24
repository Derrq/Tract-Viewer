import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import { Typography, Button, Card, CardActionArea, CardMedia } from '@mui/material';
import Modal from '@mui/material/Modal';

const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #2346FF',
  boxShadow: 24,
  p: 4,
};

const xStyle = {
  right: 0,
  top: 0,
  margin: '10px',
  position: 'absolute',
  border: 1,
  height: '30px',
  width: '30px',
  fontsize: '20px',
};

const closeButtonStyle = {
  center: 0,
  bottom: 0,
  margin: '10px',
  border: 1,
  height: '30px',
  width: '30px',
  fontsize: '20px',
};

const footerBoxStyle = {
  display: 'flex',
  margin: '25px 25px 0 25px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
};


const TractDetailModal = ({ isShowing, hide, tractId }) => {
  const [tractData, setTractData] = useState();
  const image = useState(tractData?.object[0][0][1]);

  useEffect(() => {
    fetch(`/tracts/${tractId}`)
      .then((data) => data.json())
      .then((data) => setTractData(data))
  }, [tractId]);

  return (
    <>
      {tractData &&
        <Modal
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
          open={isShowing}>
          <Fade in={isShowing}>
            <Box sx={styles}>
              <div>
                <Typography variant='h5' color={'primary'}>Tract Details</Typography>
                <hr />
                <Button sx={xStyle} type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
                  <span aria-hidden="true">&times;</span>
                </Button>
              </div>
              <Typography><b> Geometry: </b></Typography>

              <Card sx={{ maxWidth: 350, alignContent: "center", alignItems: "center", justifyContent:"center"}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    alt="Tract geometry"
                    src= {image? `data:image/jpeg;base64,${image}`: '' }
                  />
                </CardActionArea>
              </Card>
              <hr />
              <Typography><b>Tract ID: </b>{tractData?.object[0][0][0]}</Typography>
              <Typography><b>State FP:</b> {tractData?.object[0][0][2]}</Typography>
              <Typography><b>County FP:</b> {tractData?.object[0][0][3]}</Typography>
              <Typography><b>Tract CE: </b>{tractData?.object[0][0][4]}</Typography>
              <Typography><b>GEO ID: </b>{tractData?.object[0][0][5]}</Typography>
              <Typography><b>Name: </b>{tractData?.object[0][0][6]}</Typography>
              <Typography><b>Name LSAD: </b> {tractData?.object[0][0][7]}</Typography>
              <Typography><b>Mtf CC: </b>{tractData?.object[0][0][8]}</Typography>
              <Typography><b>Func Stat: </b>{tractData?.object[0][0][9]}</Typography>
              <Typography><b>A Land: </b>{tractData?.object[0][0][10]}</Typography>
              <Typography><b>A Water: </b>{tractData?.object[0][0][11]}</Typography>
              <Typography><b>Intpt Latitude: </b>{tractData?.object[0][0][12]}</Typography>
              <Typography><b>Intpt Longitude: </b>{tractData?.object[0][0][13]}</Typography>
              <Box sx={footerBoxStyle}>
                <Button sx={closeButtonStyle} onClick={hide}>Close</Button>
              </Box>
            </Box>
          </Fade>
        </Modal>

      }
    </>
  );
}
export default TractDetailModal;