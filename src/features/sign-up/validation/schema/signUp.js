import { object, string, boolean } from 'yup';

export const signUpValidationSchema = object({
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  email: string().email('Enter a valid email').required('Email address is required'),
  org: string(),
  euResident: string().required('Inform EU resident is required').oneOf(['Yes', 'No']),
  advances: boolean().default(false),
  alerts: boolean().default(false),
  other: boolean().default(false),
});
