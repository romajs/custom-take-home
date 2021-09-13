import { SnackbarProvider } from 'notistack';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';

import { SignUpPage } from './features/sign-up/SignUpPage';
import { IconButton } from '@material-ui/core';
import { createRef } from 'react';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const theme = createTheme({
});

function App () {
  // add action to all snackbars
  const notistackRef = createRef();
  const onClickDismiss = key => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        ref={notistackRef}
        maxSnack={3}
        hideIconVariant={true}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        action={(key) => (
          <IconButton size="small" aria-label="close" color="inherit" onClick={onClickDismiss(key)}>
            <CloseIcon fontSize="small" />
          </IconButton>
        )}
      >
        <Router>
          <Switch>
            <Route path="/sign-up">
              <SignUpPage />
            </Route>
            <Route path="/">
              <Redirect to='/sign-up' />
            </Route>
          </Switch>
        </Router>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
