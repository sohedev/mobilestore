import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.15rem;
  background: transparent;
  border: 0.05rem solid var(--lightBlue);
  border-color: ${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color: var(--lightBlue);
  color: ${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  border-radius: 0.5rem;
  padding: 0.2rem 0.5rem;
  outline-color: red;
  cursor: pointer;
  display: inline-block;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--lightBlue);
    background: ${(props) =>
      props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 600px) {
    display: block;
    text-align: center;
    font-size: 0.7rem !important;
    padding: 0.16rem 0.3rem 0.05rem 0.3rem;
    margin: 0.1rem 0.3rem 0.1rem 0;
  }

  @media (max-width: 900px) {
    font-size: 0.7rem important;
  }

  @media (max-width: 1200px) {
    font-size: 1rem;
  }
`;
