import { Button, Checkbox, CircularProgress, FormControl, FormControlLabel, FormHelperText, Grid, InputLabel, LinearProgress, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpValidationSchema } from './validation/schema/signUp';
import { css } from '@emotion/css';

export const SignUpForm = ({ signUp }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({
    resolver: yupResolver(signUpValidationSchema),
    mode: 'onBlur',
  });

  const [isSubmitting, setSubmitting] = useState();

  const onValid = data => {
    console.log('[SignUpForm] onValid:', data);
    setSubmitting(true);
    signUp(data).finally(() => {
      setSubmitting(false);
    });
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onValid)}
    >
      <Typography
        variant="h4"
        component="h1"
        className={css`
          margin-top: 5vh;
          margin-bottom: 1vh;
        `}
      >
        Sign up for email updates
      </Typography>
      <Typography
        variant="subtitle1"
        component="span"
        className={css`
          color: #6b6b6b;
        `}
      >
        *Indicates required field
      </Typography>
      <Grid
        container
        spacing={4}
        className={css`
          margin-top: 1vh;
        `}
      >
        <Grid item xs={12} sm={6}>
          <TextField
            error={Boolean(errors.firstName)}
            fullWidth
            inputProps={{ ...register('firstName') }}
            label="First Name"
            placeholder="First name"
            required
            variant="outlined"
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={Boolean(errors.lastName)}
            fullWidth
            inputProps={{ ...register('lastName') }}
            label="Last Name"
            placeholder="Last name"
            required
            variant="outlined"
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={Boolean(errors.email)}
            fullWidth
            inputProps={{ ...register('email') }}
            label="Email Address"
            placeholder="testemail@domain.org"
            required
            variant="outlined"
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            error={Boolean(errors.org)}
            fullWidth
            inputProps={{ ...register('org') }}
            label="Organization"
            placeholder="ex: Hero Digital"
            variant="outlined"
            disabled={isSubmitting}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth required variant="outlined">
            <InputLabel>EU Resident</InputLabel>
            <Select
              displayEmpty
              error={Boolean(errors.euResident)}
              inputProps={{ ...register('euResident') }}
              disabled={isSubmitting}
              label="EU Resident"
            >
              <MenuItem value='Yes'>Yes</MenuItem>
              <MenuItem value='No'>No</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={1}
        className={css`
          margin-top: 2vh;
        `}
      >
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            label="Advances"
            control={
              <Controller
                name='advances'
                control={control}
                render={({
                  field: { onChange, onBlur, value, ref },
                }) => (
                  <Checkbox
                    color="primary"
                    disabled={isSubmitting}
                    inputRef={ref}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControlLabel
            label="Alerts"
            control={
              <Controller
                name='alerts'
                control={control}
                render={({
                  field: { onChange, onBlur, value, ref },
                }) => (
                  <Checkbox
                    color="primary"
                    disabled={isSubmitting}
                    inputRef={ref}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            }
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="Other communications"
            control={
              <Controller
                name='other'
                control={control}
                render={({
                  field: { onChange, onBlur, value, ref },
                }) => (
                  <Checkbox
                    color="primary"
                    disabled={isSubmitting}
                    inputRef={ref}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            }
          />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        className={css`
          margin-top: 3vh;
        `}
      >
        <Grid item xs={12} sm={2}>
          <Button
            color="primary"
            disabled={isSubmitting}
            fullWidth
            size="large"
            type="submit"
            variant="contained"
          >
            {isSubmitting ? <CircularProgress size={26} /> : 'Submit'}
          </Button>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            disabled={isSubmitting}
            fullWidth
            size="large"
            type="button"
            variant="contained"
          >
            Reset
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
