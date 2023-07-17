import * as yup from 'yup';

export const employeeValidationSchema = yup.object().shape({
  onboarding_status: yup.string().required(),
  user_id: yup.string().nullable(),
});
