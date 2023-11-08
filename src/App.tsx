import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import 'hotel-datepicker/dist/css/hotel-datepicker.css';
import HotelDatePicker from 'hotel-datepicker';
import { DatePicker } from 'react-rainbow-components';

import reactLogo from './assets/react.svg';
import './styles/App.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App(): JSX.Element {
  const [count, setCount] = useState<number>(0);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const inputElement = document.getElementById('input-id');
    if (inputElement) {
      const datepicker = new HotelDatePicker(inputElement as HTMLInputElement, {
        inline: true,
        clearButton: true,
        submitButton: true,
        onSelectRange() {
          console.log('Date range selected!');
          console.log('getNights:::', datepicker.getNights());
        },
      });
      console.log(datepicker);
    }
  }, []);

  return (
    <>
      <input
        id="input-id"
        type="text"
        placeholder="Check-in"
        aria-label="Check-in and check-out dates"
      />

      <DatePicker />

      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>

      <div>
        <a href="https://react.dev" rel="noopener noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <button
          type="button"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          <span>count is </span>
          {count}
        </button>

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
