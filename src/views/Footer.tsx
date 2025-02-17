import styled from "styled-components";
import { Button } from "@mui/material";

const Layout = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0px 50px 0px 50px;
  @media screen and (max-width: 979px) {
    max-width: 90vw;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 30vh;
  margin-bottom: 50px;
  width: 100%;
  max-width: 100%;

  @media screen and (max-width: 979px) {
    display: flex;
    flex-direction: column;
    padding: 0px 5% 0px 5%;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LeftSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* max-width: 50%; */
`;

const RightColumn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Logo = styled.img`
  margin-bottom: 0;
  padding-bottom: 0;
  max-width: 20%;
  display: inline-block;
`;

const SubHeader = styled.h2`
  letter-spacing: -0.92px;
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.4;
`;

const Form = styled.form`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin-bottom: 0.75rem;
  gap: 5px;
`;

const Input = styled.input`
  border: 1px solid var(--border-color--border-secondary);
  background-color: var(--background-color--background-secondary);
  color: var(--text-color--text-primary);
  border-radius: 0.5rem;
  min-height: 2rem;
  margin-bottom: 0;
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  line-height: 1.6;
  transition: box-shadow 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53),
    border-color 0.2s;
`;

const StyledButton = styled(Button)`
  && {
    background-color: #000000;
    color: #ffffff;
    padding: 0.6rem;
    min-height: 2.75rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: none;

    &:hover {
      background-color: #333333;
    }

    &:active {
      background-color: #1a1a1a;
    }

    &:focus {
      box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.5);
    }
  }
`;

const TextSmall = styled.p`
  font-size: 0.75rem;
  width: 50%;

  @media screen and (max-width: 979px) {
    width: 90%;
  }
`;

const RightSubContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 50%;
  gap: 50px;

  @media screen and (max-width: 979px) {
    grid-template-columns: 1fr;
    width: 95%;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListHeader = styled.h2`
  color: var(--text-color--text-primary);
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
`;

const Item = styled.a`
  color: var(--link-color--link-primary);
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 979px) {
    font-size: 0.75rem;
  }
`;

const LineDivider = styled.div`
  background-color: var(--border-color--border-secondary);
  width: 100%;
  height: 1px;
`;

const TextSmallV2 = styled(TextSmall)`
  font-weight: 500;
  padding-top: 20px;

  @media screen and (max-width: 979px) {
    width: 100%;
  }
`;

export default function Footer() {
  return (
    <Layout>
      <div>
        <Container>
          <LeftColumn>
            <LeftSubContainer>
              <Logo src="images/logo.svg" />
              <SubHeader>The world is yours</SubHeader>
              <Form>
                <Input
                  name="Email"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required
                />
                <StyledButton variant="contained">Subscribe</StyledButton>
              </Form>
              <TextSmall>
                By subscribing you agree to with our Privacy Policy and provide
                consent to receive updates from our company.
              </TextSmall>
            </LeftSubContainer>
          </LeftColumn>
          <RightColumn>
            <RightSubContainer>
              <List>
                <ListHeader>Pages</ListHeader>
                <Item>Home</Item>
                <Item>Book a flight</Item>
                <Item>About</Item>
                <Item>Blog</Item>
                <Item>Contact</Item>
              </List>
              <List>
                <ListHeader>Socials</ListHeader>
                <Item>LinkedIn</Item>
              </List>
            </RightSubContainer>
          </RightColumn>
          <div style={{ gridColumn: "1/3" }}>
            <LineDivider />
            <TextSmallV2>Copyright 2024 © Airvoir S.R.L </TextSmallV2>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
