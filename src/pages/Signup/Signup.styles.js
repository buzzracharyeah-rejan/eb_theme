import styled from 'styled-components';
import {Typography, Button, TextField, Link } from '@mui/material';

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
  min-width: 450px;
  width: 26vw;
  min-height: 75vh;
  `;

export const Icon = styled.span`
  padding: 4px;
  font-size: 1.2rem;
  color: rgb(0, 150, 136);
  font-size: 1.8rem;
`;

export const BoxWrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0; 
`;

export const HeadingMain = styled(Typography)`
  margin: 0 0 0.35em;
  font-size: 1.25rem;
  font-weight: 500;
  font-family: Roboto, sans-serif;
  line-height: 1.167;
  color: rgb(0, 150, 136);
`;

export const HeadingSecondary = styled(Typography)`
  margin: 0px;
  color: rgb(158, 158, 158);
  font-weight: 400;
  font-family: Roboto, sans-serif;
  line-height: 1.66;
  font-size: 16px;
  text-align: center;
`;

export const CustomButton = styled(Button)`
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
  margin: 8px 0 !important;
`;

export const CustomLink = styled(Link)`
  text-decoration: none !important;
  font-size: 0.875rem;
  text-transform: capitalize;
  font-weight: 500;
  color: ${(props) => props.theme.color || '#000'} !important;
`;

export const BrandText = styled(Typography)`
  fontWeight: 600; 
  color: #000,
  padding: 1rem;
  cursor: pointer;
  line-height: 1.334em;
`;

export const DisabledBtn = styled(Button)`
  padding: 4px 56px;
  border-color: rgb(245, 245, 245) !important;
  color: rgb(33, 33, 33) !important;
  line-height: 1.75em;
  min-width: 64px;
  font-size: 0.875rem;
`;


export const HelperText = styled(Typography)`
  color: rgb(0, 0, 0);
  font-size: 0.875rem;
`;


export const SubmitBtn = styled(Button)`
  padding: 8px 24px !important;
  margin: 1rem 0 !important;
  text-transform: capitalize !important;
`;

