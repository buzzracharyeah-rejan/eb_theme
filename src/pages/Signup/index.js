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
  BrandText,
  DisabledBtn,
  HelperText,
  SubmitBtn,
} from './Signup.styles';

const Signup = () => {
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
            <HeadingMain variant='h6'>Sign up</HeadingMain>
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
            Sign Up With Google
          </CustomButton>

          <BoxWrapper>
            <DisabledBtn variant='outlined' disabled>
              OR
            </DisabledBtn>
          </BoxWrapper>

          <BoxWrapper>
            <HelperText varaint='h6'>Sign up with Email address</HelperText>
          </BoxWrapper>

          <CustomTextField
              variant='outlined'
              label='First Name'
              type='text'
              sx={{
                width: 'calc(100% / 2 - 18px)',
                marginRight: '1rem !important',
              }}
            />
            <CustomTextField
              variant='outlined'
              label='Last Name'
              type='text'
              sx={{
                width: 'calc(100% / 2 - 18px)',
                marginRight: '1rem !important',
              }}
            />

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

          <SubmitBtn variant='contained' fullWidth={true}>
            Sign Up
          </SubmitBtn>

          <hr />
          <BoxWrapper>
            <CustomLink component={RouterLink} to='/login'>
              Already have an account?
            </CustomLink>
          </BoxWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Signup;
