import { useGetMovies } from '../query'
import { Box, Card, Grid } from '@mui/material'
import FormDialog from './addedmovie'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

export default function Movis() {
    const { data } = useGetMovies()
    return (
        <>
            <Grid container style={{ justifyContent: 'center', alignItems: 'center', height: 200 }} >
                <FormDialog />
            </Grid>
            <Grid container style={{ justifyContent: 'center' }} spacing={10}>
                {
                    data && data.map((a, index) => (<>
                        <Grid key={index} item >
                            <Link to={`/movie/${a.id}`}>
                                <Card style={{ marginTop: 100, backgroundColor: '#4c4848', width: 400, height: 200 }} key={index} >
                                    <div style={{ margin: 30 }}>
                                        <Typography variant='h6' color={'white'}>{a.id}</Typography>
                                        <Typography variant='h5' color={'white'}>{a.title}</Typography>
                                        <Typography color={'white'} >{a.genre}</Typography>
                                    </div>
                                </Card>
                            </Link>
                        </Grid>

                    </>))
                }
            </Grid>

        </>
    )
}
