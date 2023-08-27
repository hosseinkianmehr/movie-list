import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import * as yup from "yup";
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import { useRegister } from '../query';

import FormHelperText from '@mui/material/FormHelperText';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    age: yup.number().required().positive().integer().min(18).max(100),
    password:  yup.string().required(),
})

export type registerFormData = yup.InferType<typeof schema>

export default function Register() {

    
    

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });
    console.log(errors)
    const mutation =useRegister()
    console.log(mutation,'mutation')

        
    const handleclick:SubmitHandler<registerFormData> =(data) => {
        console.log(data)
        mutation.mutate(data)
        reset()
    }
    return (
        <Grid container spacing={2} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20vh',

        }}>
            <Grid container spacing={2} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Grid item >
                    <TextField
                        {...register('email')}
                        helperText={errors.email && (errors.email.message)}
                        id="demo-helper-text-aligned"
                        label="email"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        {...register('firstname')}
                        helperText={errors.firstname && (errors.firstname.message)}
                        label="firstname"
                    />
                </Grid>

            </Grid>
            <Grid container spacing={2} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Grid item >
                    <TextField
                        {...register('lastname')}
                        helperText={errors.lastname && (errors.lastname.message)}
                        id="demo-helper-text-aligned"
                        label="lastname"
                    />
                </Grid>
                <Grid item>
                    <TextField
                        {...register('age')}
                        helperText={errors.age && (errors.age.message)}
                        id="demo-helper-text-aligned-no-helper"
                        label="age"
                    />
                </Grid>

            </Grid>
            <Grid container spacing={2} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
                <Grid item >
                    <TextField
                        {...register('password')}
                        helperText={errors.password && (errors.password.message)}
                        id="demo-helper-text-aligned"
                        label="password"
                    />
                    <FormHelperText >{mutation.isError && 'The password or email address is incorrect'}</FormHelperText> 
                </Grid>


            </Grid>

            <Grid container spacing={2} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',

            }}>
               
                <Grid item>
                    <Button variant="contained" onClick={handleSubmit(handleclick)}>Register</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Contained</Button>
                </Grid>

            </Grid>
        </Grid>



    );
}