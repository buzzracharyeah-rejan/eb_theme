import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';

/* import custom components */
// import CheckboxLabel from '../../components/CheckboxLabel';
import {
  Wrapper,
  Icon,
  BoxWrapper,
  CustomLink,
  CustomTextField,
  HeadingMain,
  HeadingSecondary,
  CustomContainer,
  SubmitBtn,
  BrandText,
} from './ForgotPassword.styles';

const ForgotPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors},
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <CustomContainer maxWidth='sm'>
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
            <HeadingMain variant='h6'>Forgot Password?</HeadingMain>
            <HeadingSecondary variant='p'>
              Enter your email address below and we'll send you password reset OTP.
            </HeadingSecondary>
          </BoxWrapper>

          <form onSubmit={handleSubmit(onSubmit)}>
            <CustomTextField
              variant='outlined'
              required
              label='Email Address / Username'
              fullWidth
              type='text'
              {...register('email', {
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
              })}
              error={errors.email && true}
              helperText={errors.email && 'Email required'}
            />

            <SubmitBtn variant='contained' type='submit' fullWidth={true}>
              Send Mail
            </SubmitBtn>
            <hr />
          </form>
          <BoxWrapper>
            <CustomLink component={RouterLink} to='/login'>
              Already have an account?
            </CustomLink>
          </BoxWrapper>
        </Wrapper>
      </CustomContainer>
    </>
  );
};

export default ForgotPassword;
