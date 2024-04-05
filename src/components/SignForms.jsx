import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';




const validationSchema = yup.object({
  email: yup
    .string('Введите E-mail')
    .email('Введите правильный E-mail')
    .required('Необходимо ввести E-mail'),
  password: yup
    .string('Введите пароль')
    .min(3, 'Пароль должен быть минимум 3 символа в длину')
    .required('Необходимо ввести пароль'),
});

const SignForms = () => {
  const formSubmit = useCallback((form_value) => {
    console.log(form_value);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      formSubmit(values);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Пароль"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Отправить
        </Button>
      </form>
    </div>
  );
};
export default SignForms