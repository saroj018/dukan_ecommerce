import React, { useContext } from 'react'
import { AiOutlineMenu,  AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { newContext } from '../../context/ResponsiveData';
import MenuBar from './MenuBar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PersonIcon from '@mui/icons-material/Person';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const cartNumber=useSelector((state)=>state.cartData.count)

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));


  const { setMenuBar } = useContext(newContext)
  return (
    <>

      <MenuBar />

      <div className='  shadow-md z-0 shadow-gray-500 py-3 mb-5'>
        <nav className='flex justify-between items-center p-4 lg:px-6  text-2xl md:text-3xl lg:text-4xl '>
          <AiOutlineMenu onClick={() => setMenuBar(true)} className='md:hidden cursor-pointer' />
          <Link to={'/'}><img className='h-[30px]' src="https://www.logolynx.com/images/logolynx/56/56afea50b83164e3e272d4ebeccd94fb.png" alt="" /></Link>
          <div className=' relative hidden md:block'>
            <input className='border-2  border-gray-500 text-xl rounded-sm  p-1 w-[55vw]  lg:w-[62vw] outline-none inline-block' type="text" placeholder='Search entire store here....' />
            <AiOutlineSearch className='bg-red-500 absolute left-[100%]  cursor-pointer lg:top-[7px]  top-[2px] text-white text-[40px]' />
          </div>
          <div className='flex gap-3 items-center lg:gap-4 md:text-2xl lg:text-3xl'>
            <div className='hidden md:block'>
              <PersonIcon />
            </div>
            <Link to={'/wishlist'}>
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={4} color="secondary">
                  <FavoriteBorderIcon />
                </StyledBadge>
              </IconButton>
            </Link>
            <Link to={'/cartlist'}>
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={cartNumber} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link>
          </div>
        </nav>
        <div className=' relative text-center mt-1 md:hidden  '>
          <input className='border-2  border-gray-500 rounded-md p-1 w-[80vw]  mr-6  outline-none inline-block' type="text" placeholder='Search entire store here....' />
          <AiOutlineSearch className='bg-red-500 absolute left-[80%] p-1  cursor-pointer ml-6 bottom-0 text-white text-4xl' />
        </div>
        <nav className='hidden md:block'>
        </nav>

        <nav className=' justify-center items-center px-3 bg-red-500 text-white py-2 my-4 hidden lg:block '>
          <ul className='uppercase font-semibold flex gap-12 justify-center items-center'>
            <li>laptops</li>
            <li>smartphones</li>
            <li>monitors</li>
            <li>grocery</li>
            <li>beauty</li>
            <li>decoration</li>
            <li>accessories</li>
            <li>blogs</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navbar