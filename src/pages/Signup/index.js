import React from 'react';
import { Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data)
  }
  
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomTextField
              variant='outlined'
              label='First Name'
              type='text'
              sx={{
                width: 'calc(100% / 2 - 18px)',
                marginRight: '1rem !important',
              }}
              {...register('firstName', {
                required: true,
                minLength: 4,
                maxLength: 30,
              })}
              error={errors.firstName && true}
              helperText={errors.firstName && 'First name required'}
            />
            <CustomTextField
              variant='outlined'
              label='Last Name'
              type='text'
              sx={{
                width: 'calc(100% / 2 - 18px)',
                marginRight: '1rem !important',
              }}
              {...register('lastName', {
                required: true,
                minLength: 4,
                maxLength: 30,
              })}
              error={errors.lastName && true}
              helperText={errors.lastName && 'Last name required'}
            />

            <CustomTextField
              variant='outlined'
              required
              label='Email Address / Username'
              fullWidth
              type='text'
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              })}
              error={errors.email && true}
              helperText={errors.email && 'Email required'}
            />

            <CustomTextField
              variant='outlined'
              required
              label='Password'
              fullWidth
              type='password'
              sx={{ marginBottom: '1rem' }}
              {...register('password', {
                required: true,
                minLength: 8,
                message: 'password required',
              })}
              error={errors.password && true}
              helperText={errors.password && 'Password required'}
            />

            <SubmitBtn variant='contained' type='submit' fullWidth={true}>
              Sign Up
            </SubmitBtn>
          </form>

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
