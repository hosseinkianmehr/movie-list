import { Grid, FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import { useLogin } from '../query';

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required(),
})

export default function Login() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(schema) });
    console.log(errors, "error")
    const mutation =useLogin()
    interface LoginData {
        email: string,
        password: string,
    }
    const handleclick = (data:LoginData) => {
        console.log(data)
        mutation.mutate(data)
        console.log(data)
        console.log(mutation.data ,'mutation.data')
        reset()
    }

    return (
        <Grid container  sx={{
            
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '20vh',

        }}>
            <Grid container  sx={{
                
                alignItems: 'center',
                justifyContent: 'center',
                marginBlock: 3

            }}>
                <Grid item>
                    <TextField
                        {...register('email',)}
                        helperText={errors.username && (errors.username.message)}
                        id="demo-helper-text-aligned-no-helper"
                        label="username"
                    />
                </Grid>

            </Grid>

            <Grid container  sx={{

                alignItems: 'center',
                justifyContent: 'center',
                marginBlockEnd:3

            }}>
                <Grid item >
                    <TextField
                        {...register('password')}
                        helperText={errors.password && (errors.password.message)}
                        id="demo-helper-text-aligned"
                        label="password"
                    />
                </Grid>


            </Grid>

            <Grid container spacing={2} sx={{
                
                alignItems: 'center',
                justifyContent: 'center',

            }}>

                <Grid item>
                    <Button variant="contained" onChange={handleSubmit(handleclick)} onClick={handleSubmit(handleclick)}>Register</Button>
                </Grid>
                <Grid item>
                    <Button variant="contained">Contained</Button>
                </Grid>

            </Grid>
        </Grid>

    );
}