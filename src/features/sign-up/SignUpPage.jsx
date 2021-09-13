import { Container } from '@material-ui/core';
import axios from 'axios';
import { SignUpForm } from './SignUpForm';
import { useSnackbar } from 'notistack';

const formPostUrl = process.env.REACT_APP_FORM_POST_URL;

export const SignUpPage = () => {
  const { enqueueSnackbar } = useSnackbar();

  const signUp = (data) => {
    // TODO: consider providing a POST endpoint for testing on the next time
    return axios.get(formPostUrl, data).then(response => {
      enqueueSnackbar(response.data.message, { variant: 'success' });
    }).catch(response => {
      enqueueSnackbar(response.data.message, { variant: 'error' });
    });
  };

  return (
    <Container>
      <SignUpForm signUp={signUp} />
    </Container>
  );
};
