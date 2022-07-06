import React from 'react';
import { Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

/* import custom components */
// import CheckboxLabel from '../../components/CheckboxLabel';
import {
  Wrapper,
  Icon,
  BoxWrapper,
  CustomButton,
  CustomLink,
  CustomTextField,
  HeadingMain,
  HeadingSecondary,
  DisabledBtn,
  SubmitBtn,
  BrandText,
  HelperText,
} from './Login.styles';

const Login = () => {
  return (
    <>
      <Container maxWidth='sm'>
        <Wrapper>
          <>
            <BrandText variant='h6' gutterBottom={true} align='center'>
              <Icon>
                <i className='fa-brands fa-raspberry-pi'></i>
              </Icon>
              EB THEME
            </BrandText>
          </>

          <BoxWrapper>
            <HeadingMain variant='h6'>Hi, Welcome Back</HeadingMain>
            <HeadingSecondary variant='p'>Enter your credentials to continue</HeadingSecondary>
          </BoxWrapper>

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

          <BoxWrapper>
            <DisabledBtn variant='outlined' disabled>
              OR
            </DisabledBtn>
          </BoxWrapper>

          <BoxWrapper>
            <HelperText varaint='h6'>Sign in with Email address</HelperText>
          </BoxWrapper>

          <CustomTextField
            variant='outlined'
            required
            label='Email Address / Username'
            fullWidth
            type='text'
          />

          <CustomTextField
            variant='outlined'
            required
            label='Password'
            fullWidth
            type='password'
            sx={{ marginBottom: '1rem' }}
          />

          <BoxWrapper>
            {/* <CheckboxLabel label='Remember me' /> */}
            <CustomLink color='rgb(0, 150, 136)' component={RouterLink} to='/forgotPassword'>
              Forgot Password?
            </CustomLink>
          </BoxWrapper>

          <SubmitBtn variant='contained' fullWidth={true}>
            Sign In
          </SubmitBtn>

          <hr />
          <BoxWrapper>
            <CustomLink component={RouterLink} to='/register'>
              Don't have an account?
            </CustomLink>
          </BoxWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
