import hero from './images/Side-lying lateral leg _IT band.jpeg';
import './App.css';
import { styled, Box, Stack, ThemeProvider } from '@mui/system';
import { Navbar } from './components/navigation';
import { theme } from './theme';


const Image = styled('img')(
  () => { }
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack alignItems='center' >
        <Stack sx={{ fontFamily: 'quicksand', fontSize: {xs: '16px', lg: '36px', xl:'48px'}, backgroundColor: 'rgb(104, 200, 133)', width: '100%', textAlign:'center', alignItems: 'center', py: '10px', px:'10px' }}> Massage for injuries, peak sports performance & speedy recovery</Stack>
        <Navbar />
        <Stack sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%', width: '80%' }} >
          <Image sx={{ width: '100%' }} src={hero} />
          <Stack sx={{ width: '100%', fontSize: '64px', textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>Tish Sports Massage</Stack>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
