import { Container } from '@material-ui/core';
import { SignUpForm } from './SignUpForm';

export const SignUpPage = () => {
  const signUp = () => new Promise((resolve, reject) => {
    setTimeout(resolve, 0);
  });
  return (
    <Container>
      <SignUpForm signUp={signUp} />
    </Container>
  );
};
