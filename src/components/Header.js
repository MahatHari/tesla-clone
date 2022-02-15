import React, { useState } from 'react';
import styled from 'styled-components';
import { MdOutlineMenu, MdOutlineClose } from 'react-icons/md';
import { selectCars } from '../features/cars/carSlice';
import { useSelector } from 'react-redux';
function Header() {
  const [burgerMenuStatus, setBurgerMenuStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href='#'>
        <img src='/images/logo.svg' alt='' />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href='#'>
              {car}
            </a>
          ))}
      </Menu>
      <RightMenu>
        <a href='#'>Shop</a>
        <a href='#'>Tesla Account</a>
        <CustomMenu onClick={(e) => setBurgerMenuStatus(true)}></CustomMenu>
      </RightMenu>

      <BurgerNavMenu show={burgerMenuStatus}>
        <CloseWrapper>
          <CustomClose onClick={(e) => setBurgerMenuStatus(false)} />
        </CloseWrapper>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href='#'>{car}</a>{' '}
            </li>
          ))}
        <li>
          <a href='#'>Existing Inventory</a>
        </li>
        <li>
          <a href='#'>Used Inventory</a>
        </li>
        <li>
          <a href='#'>Trade In</a>
        </li>
        <li>
          <a href='#'>Cyber Truck</a>
        </li>
        <li>
          <a href='#'>Roadster</a>
        </li>
      </BurgerNavMenu>
    </Container>
  );
}

export default Header;
const Container = styled.div`
  z-index: 1;
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MdOutlineMenu)`
  cursor: pointer;
  align-items: center;
  justify-content: center;
`;

const BurgerNavMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background: white;
  opacity: 0.99;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;

  transform: ${(props) => (props.show ? 'translateX(0%)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CustomClose = styled(MdOutlineClose)`
  cursor: pointer;
`;
