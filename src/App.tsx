import { styled } from '@mui/material/styles';
import './App.css'
import Row from "./components/Row"
import Stack from '@mui/material/Stack';
import { Paper } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <>
      <div>
        <h1>Bienvenue !</h1>
        <Stack spacing={2}>
          <Item>Item1</Item>
          <Row />
          <Row />
          <Row />
        </Stack>
      </div>
    </>
  )
}

export default App
