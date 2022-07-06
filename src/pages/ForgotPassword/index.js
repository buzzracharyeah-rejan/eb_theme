import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

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

          <CustomTextField
            variant='outlined'
            required
            label='Email Address / Username'
            fullWidth
            type='text'
            />

          <SubmitBtn variant='contained' fullWidth={true}>
            Sign In
          </SubmitBtn>
          <hr />

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
