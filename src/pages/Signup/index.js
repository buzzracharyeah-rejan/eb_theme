import React from 'react';
import { Box, Container, Typography, Button, TextField, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

/* import custom components */
// import CheckboxLabel from '../../components/CheckboxLabel';
import {
  Wrapper,
  Icon,
  CustomBox,
  CustomButton,
  CustomLink,
  CustomTextField,
  styles,
  color,
  HeadingMain,
  HeadingSecondary,
} from './Signup.styles';

const Signup = () => {
  return (
    <>
      <Container maxWidth='sm'>
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
            <HeadingMain variant='h6'>Sign up</HeadingMain>
            <HeadingSecondary variant='p'>Enter your credentials to continue</HeadingSecondary>
          </CustomBox>

          <CustomButton variant='outlined' fullWidth>
            <img
              src='/assets/google.svg'
              alt='google'
              width='16'
              height='16'
              style={{ marginRight: '8px' }}
            />
            Sign In With Google
          </CustomButton>

          <CustomBox>
            <Button variant='outlined' disabled sx={styles.ORButton}>
              OR
            </Button>
          </CustomBox>

          <CustomBox>
            <Typography varaint='h6' sx={{ color: 'rgb(0,0,0)', fontSize: '0.875rem' }}>
              Sign up with Email address
            </Typography>
          </CustomBox>

          <CustomTextField
            variant='outlined'
            label='First Name'
            type='text'
            sx={{
              width: '150px', 
              marginRight: '1rem !important'
            }}
          ></CustomTextField>

          <CustomTextField
            variant='outlined'
            label='Last Name'
            type='text'
            sx={{
              width: '120px', 
              marginRight: '1rem !important'
            }}
          ></CustomTextField>

          <CustomTextField
            variant='outlined'
            required
            label='Email Address / Username'
            fullWidth
            type='text'
          ></CustomTextField>

          <CustomTextField
            variant='outlined'
            required
            label='Password'
            fullWidth
            type='password'
            sx={{ marginBottom: '1rem' }}
          ></CustomTextField>

          <Button variant='contained' fullWidth={true} sx={styles.SubmitButton}>
            Sign Up
          </Button>

          <hr />
          <CustomBox>
            <CustomLink component={RouterLink} to='/login'>
              Already have an account?
            </CustomLink>
          </CustomBox>
        </Wrapper>
      </Container>
    </>
  );
};

export default Signup;
