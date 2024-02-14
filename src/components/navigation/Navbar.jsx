import React, {useState} from 'react';
import { styled , Box} from '@mui/system';
const Nav = styled('nav')(()=>{})

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
       
        <Nav sx={{width: '70%', display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr',  fontFamily: 'quicksand', fontSize: '24px', p:'24px 0'}}>
        <Box>Home</Box>
        <Box>Massage Styles</Box>
        <Box>Testimonials</Box>
        <Box>Contact</Box>
        </Nav>
    )
  }

  export default Navbar;