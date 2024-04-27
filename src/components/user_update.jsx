import React, { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {IconButton, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useParams, Link as RouterLink} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './comp.css';

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
        .min(3, 'Пароль должен быть минимум 3 символа в длину'),
});

const User_update = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        id: id,
        surname: '',
        name: '',
        email: '',
        password: '',
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

    const formSubmit = useCallback((form_value) => {

        axios
            .put('http://localhost:3000/users/' + id, JSON.stringify(form_value))
            .then(() => {
                alert("Данные пользователя обновлены");

            })

            .catch((error) => {
                console.log(error);
            });
    }, []);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            surname: data.surname,
            name: data.name,
            email: data.email,
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (values.password == '') values.password = data.password;
            formSubmit(values);
            formik.resetForm();
        },
    });

    return (
        <div>
            <IconButton className='back_button' component={RouterLink} to={`/lab6`}><ArrowBackIosIcon/>Назад</IconButton>
            <form onSubmit={formik.handleSubmit} onReset={formik.handleReset} enableReinitialize>
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
            </form>
        </div>
    );
};
export default User_update
