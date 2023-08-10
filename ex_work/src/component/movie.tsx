import { useParams } from 'react-router-dom';
import { useGetMovie } from '../query';
import {  Typography, Grid, Stack } from '@mui/material'
import DeletePage from './delete';

const Movie = () => {
  console.log('hello')
  const { id } = useParams();
  const { data } = useGetMovie(id)
  console.log(data)
  return (
    <>
      <Grid style={{ minHeight: '80vh', backgroundColor: '#4c4848', textAlign: 'center' }}>
        <Grid style={{ margin: 30 }}>
          <Typography variant="h2" color="white" >{data?.title}</Typography>
          <Typography variant="h5" color="white">{data?.genre}</Typography>
          <Typography color="white">{data?.desc}</Typography>
          <Typography variant="h1" color="initial">{data ? '' : 'No movie available'}</Typography>
        </Grid>

        <Stack direction="row-reverse"
          justifyContent="center"
          alignItems="flex-end"
          spacing={2}
        >

          {data && <DeletePage delete={ data.id } />}


        </Stack>
        <div style={{ height: 20 }}></div>
      </Grid>

    </>
  )
}

export default Movie