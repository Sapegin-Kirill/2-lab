import React, { useCallback, useEffect, useState } from 'react';
import { useFormik, Formik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom'

const validationSchema = yup.object({
    surname: yup
        .string('Введите фамилию пользователя')
        .required('Необходимо ввести фамилию'),
    name: yup
        .string('Введите имя пользователя')
        .required('Необходимо ввести имя'),
    email: yup
        .string('Введите E-mail')
        .email('Введите правильный E-mail')
        .required('Необходимо ввести E-mail'),
    password: yup
        .string('Введите пароль')
        .min(3, 'Пароль должен быть минимум 3 символа в длину')
        .required('Необходимо ввести пароль'),
});

const User_update = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        id: id,
        surname: '',
        name: '',
        email: ''
    });
    useEffect(() => {

        axios
            .get('http://localhost:3000/users/' + id)
            .then((responce) => {
                setData(responce.data);
            })

            .catch((error) => {
                console.log(error);
            });


    }, [])
    console.log(data);
    const formSubmit = useCallback((form_value) => {

        axios
            .put('http://localhost:3000/users/', JSON.stringify(form_value))
            .then((response) => {
                console.log(response.data);
                alert("Новый пользователь добавлен");
            })

            .catch((error) => {
                console.log(error);
            });
    }, []);


    const formik = useFormik({
        initialValues: {
            surname: data.surname,
            name: '',
            email: '',
            password: '',
          },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            formSubmit(values);
            formik.resetForm();
        },
    });

    return (
        <div>
            <Formik onSubmit={formik.handleSubmit} onReset={formik.handleReset} enableReinitialize>
            <TextField
                    fullWidth
                    InputProps={{
                        readOnly: true,
                      }}
                    id="id"
                    name="id"
                    label="ID пользователя"
                    value={data.id}
                />
                <TextField
                    fullWidth
                    id="surname"
                    name="surname"
                    label="Фамилия пользователя"
                    value={formik.values.surname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.surname && Boolean(formik.errors.surname)}
                    helperText={formik.touched.surname && formik.errors.surname}
                />
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Имя пользователя"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />
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
                <Button color="primary" variant="contained" type="submit" size='small'>
                    Сохранить
                </Button>
                <Button color="primary" variant="contained" type="reset" size='small'>
                    Сбросить форму
                </Button>
            </Formik>
        </div>
    );
};
export default User_update
