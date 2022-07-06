import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

/* import custom components */
// import CheckboxLabel from '../../components/CheckboxLabel';
import {
  Wrapper,
  Icon,
  CustomBox,
  CustomLink,
  CustomTextField,
  styles,
  HeadingMain,
  HeadingSecondary,
  CustomContainer,
} from './ForgotPassword.styles';

const ForgotPassword = () => {
  return (
    <>
      <CustomContainer maxWidth='sm'>
        <Wrapper>
          <>
            <Typography variant='h6' gutterBottom={true} align='center' sx={styles.branding}>
              <Icon>
                <i className='fa-brands fa-raspberry-pi'></i>
              </Icon>
              EB THEME
            </Typography>
          </>

          <CustomBox>
            <HeadingMain variant='h6'>Forgot Password?</HeadingMain>
            <HeadingSecondary variant='p'>
              Enter your email address below and we'll send you password reset OTP.
            </HeadingSecondary>
          </CustomBox>

          <CustomTextField
            variant='outlined'
            required
            label='Email Address / Username'
            fullWidth
            type='text'
          ></CustomTextField>

          <Button variant='contained' fullWidth={true} sx={styles.SubmitButton}>
            Send Mail
          </Button>

          <hr />

          <CustomBox>
            <CustomLink component={RouterLink} to='/login'>
              Already have an account?
            </CustomLink>
          </CustomBox>
        </Wrapper>
      </CustomContainer>
    </>
  );
};

export default ForgotPassword;
