import styled from 'styled-components';
import {Container,  Typography, Button, TextField, Link } from '@mui/material';

export const color = {
  BLACK: '#000',
  PRIMARY: 'rgb(0, 150, 136)',
};

export const font = {
  weight: {
    LIGHT: 300,
    NORMAL: 400,
    BOLD: 500,
    BOLDER: 600,
  },
  fontFamily: {
    ROBOTO: 'Roboto sans-serif',
  },
};

export const styles = {
  branding: {
    fontWeight: font.weight.BOLDER,
    color: color.BLACK,
    padding: '1rem',
    cursor: 'pointer',
    lineHeight: '1.334em',
  },
  headingMain: {
    margin: 'auto',
    lineHeight: '1.35em',
    color: color.PRIMARY,
    fontWeight: font.weight.BOLDER,
  },
  ORButton: {
    padding: '4px 56px',
    borderColor: 'rgb(245,245,245)!important',
    color: 'rgb(33,33,33)!important',
    lineHeight: '1.75',
    minWidth: '64px',
    fontSize: '0.875rem',
  },
  SubmitButton: {
    padding: '8px 24px',
    lineHeight: '1.75em',
    marginBottom: '1rem',
    textTransform: 'capitalize'
  },
};

export const CustomContainer = styled(Container)`
position: absolute; 
top: 50%;
left: 50%;
transform: translate(-50%, -50%); 
`;

export const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  color: rgb(97, 97, 97);
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: none;
  background-image: none;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid rgba(176, 190, 197, 0.46);
  margin: 5rem auto;
  padding: 25px;
  min-width: 400px;
  width: 26vw;
  min-height: 500px;
  height: 45vh;
`;

export const Icon = styled.span`
  padding: 4px;
  font-size: 1.2rem;
  color: rgb(0, 150, 136);
  font-size: 1.8rem;
`;

export const BoxWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`;

export const HeadingMain = styled(Typography)`
  font-size: 1.25rem;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  line-height: 1.167;
  color: rgb(0, 150, 136);
  margin-bottom: 1rem !important;
`;

export const HeadingSecondary = styled(Typography)`
  color: rgb(158, 158, 158);
  font-weight: 400;
  font-family: Roboto, sans-serif;
  line-height: 1.66;
  font-size: 16px;
  text-align: center;
  margin-bottom: 1rem !important;
`;

const CustomButton = styled(Button)`
  background-color: rgb(250, 250, 250) !important;
  color: rgb(97, 97, 97) !important;
  line-height: 1.75;
  padding: 7px 21px;
  min-width: 64px;
  margin: 2rem 0 0;
  border-radius: 4px;
  border-color: rgba(97, 97, 97, 0.1) !important;
`;

export const CustomTextField = styled(TextField)`
  margin-bottom: 2rem !important;
  `;
  
  export const CustomLink = styled(Link)`
  text-decoration: none !important;
  font-size: 0.875rem;
  text-transform: capitalize;
  padding: 2px 5px;
  font-weight: 500; 
  color: ${(props) => props.theme.color || '#000'} !important;
`;


export const SubmitBtn = styled(Button)`
  padding: 8px 24px !important;
  margin-bottom: 1rem !important;
  text-transform: capitalize !important;
`;

export const BrandText = styled(Typography)`
  fontWeight: 600; 
  color: #000,
  padding: 1rem;
  cursor: pointer;
  line-height: 1.334em;
`;



// const Wrapper = styled('div')({
//   backgroundColor: 'rgb(255, 255, 255)',
//   color: 'rgb(97, 97, 97)',
//   transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
//   boxShadow: 'none',
//   backgroundImage: 'none',
//   borderRadius: '8px',
//   overflow: 'hidden',
//   border: '1px solid rgba(176, 190, 197, 0.46)',
//   padding: '28px',
//   margin: '3rem',
// });

// const Icon = styled('span')({
//   padding: '4px',
//   fontSize: '1.2rem',
//   color: 'color: rgb(0, 150, 136)',
// });
