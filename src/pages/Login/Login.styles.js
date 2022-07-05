import styled from 'styled-components';
import {Typography, Button, TextField, Link } from '@mui/material';

const Wrapper = styled.div`
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
  min-width: 450px;
  width: 35vw;
  min-height: 80vh;
  height: 750px;
`;

const Icon = styled.span`
  padding: 4px;
  font-size: 1.2rem;
  color: rgb(0, 150, 136);
  font-size: 1.8rem;
`;

const CustomBox = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: column wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0; 
`;

const HeadingMain = styled(Typography)`
  margin: 0 0 0.35em;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  line-height: 1.167;
  color: rgb(0, 150, 136);
`;

const HeadingSecondary = styled(Typography)`
  margin: 0px;
  color: rgb(158, 158, 158);
  font-weight: 400;
  font-family: Roboto, sans-serif;
  line-height: 1.66;
  font-size: 16px;
  text-align: center;
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

const CustomTextField = styled(TextField)`
  margin: 8px 0 !important;
`;

const CustomLink = styled(Link)`
  text-decoration: none !important;
  font-size: 0.875rem;
  text-transform: capitalize;
  padding: 2px 5px;
  color: ${(props) => props.theme.color || '#000'} !important;
`;

const color = {
  BLACK: '#000',
  PRIMARY: 'rgb(0, 150, 136)',
};

const font = {
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

const styles = {
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
    backgroundColor: color.PRIMARY,
    padding: '8px 24px',
    lineHeight: '1.75em',
    marginBottom: '1rem', 

    ':hover': {
        backgroundColor: color.PRIMARY,
    }
  },
};


export {Wrapper, Icon, CustomBox, CustomButton, CustomLink, CustomTextField, styles, color, HeadingMain, HeadingSecondary}



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
