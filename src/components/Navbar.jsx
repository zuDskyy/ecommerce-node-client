import { Avatar, Badge, Button } from "@material-ui/core";
import { Notifications, NotificationsNone, Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import '../styles/navbar.css'
import UserProfile from "./UserProfile";

const Container = styled.div`
   position:sticky;
    top:0;
    z-index:30;
    -webkit-backdrop-filter:blur(15px);
    backdrop-filter:blur(10px);
    
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
 
  padding: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  position:relative;
  border: 0.5px solid lightgray;
  width:70%;
  margin-left:3.5em;
  border-radius:25px;
  display: flex;
  align-items: center;
  padding: 5px;
  ${mobile({ width: "50px" })}
`;

const Input = styled.input`
  width:100%;
  outline:none;
  border: none;
  background:inherit;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
   const user = useSelector(state => state.user.currentUser);
  const quantity = useSelector(state => state.cart.quantity)
  
  return (
    <Container>
      <Wrapper>
        <Left>
         <Link to="/" className="navbarCenterLogo">
          <Logo>Ishop <img width="50" height="50" src ="https://upload.wikimedia.org/wikipedia/en/3/37/Jumpman_logo.svg" alt=""/> Jordan </Logo>
           <button className="betabutton">BETA</button>
          </Link>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "grey", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right >
          <div className={user  ? "hidden" : ""}>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          </div>
          <MenuItem className="navbarRightNotif">
            <Badge  overlap="rectangular" badgeContent={0} color="primary">
              <NotificationsNone/>
            </Badge>
          </MenuItem>
          <Link to="/cart">
          <MenuItem className="navbarRightCart">
            <Badge overlap="rectangular"  badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
          <div className={!user ? "hidden" : "navbarRightUser"}>
             
            
               <UserProfile userProf={user} />
          </div>
           
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
