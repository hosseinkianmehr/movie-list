import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import DialogTitle from '@mui/material/DialogTitle';
import { useForm } from 'react-hook-form';

import * as yup from "yup";
import { usePostMovies } from '../query';
import { yupResolver } from '@hookform/resolvers/yup';
import Typography from '@mui/material/Typography'

const schema = yup.object().shape({
    title: yup.string().required(),
    desc: yup.string().required(),
    genre: yup.string().required()
})

export default function FormDialog() {
    const [open, setOpen] = React.useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({resolver: yupResolver(schema)});
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        reset()
    };

    const mutation = usePostMovies()
    interface Data{
        title: string,
        desc: string,
        genre: string
    }
    const handleSubscribe = (data: Data ) => {
        console.log(data , 'dataaaaaaaaaaaaaaaaaaaaaaaaaa')
        mutation.mutate(data)

        setOpen(false)
    }
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} style={{ backgroundColor: 'black' }}>
                <Typography variant='h5'>
                    Writing a new movie
                </Typography>
            </Button>
            <Dialog open={open} onClose={handleClose} >
                <DialogTitle> Writing a new movie</DialogTitle>
                <DialogContent  >

                    <TextField
                        {...register('title')}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="name"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                        {...register('genre')}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="genre"
                        type="tel"
                        fullWidth
                        variant="standard"
                    />
                    <TextField
                    {...register('desc')}
                        id="filled-multiline-static"
                        label="Description"
                        multiline
                        rows={20}
                        style={{width:550 ,marginTop:15}}
                       
                        variant="filled"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit(handleSubscribe)}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}