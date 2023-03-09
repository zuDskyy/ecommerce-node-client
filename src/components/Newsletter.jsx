import { Send } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;

const InputContainer = styled.div` 
  position:relative;
  width: 35%;
  height: 40px;
  background-color: white;
  display:flex;
  align-items:center;
  border-radius:12px;
  border: 3px solid lightgray;
  ${mobile({ width: "60%" })}
`;

const Input = styled.input`
  border-radius:12px;
  border: none;
  flex: 6;
  padding-left: 20px;
  outline:none;
`;

const Button = styled.button`
  position:absolute;
  flex: 1;
  margin-left:95%;
  height:35px;
  border-radius:12px;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email"  />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
