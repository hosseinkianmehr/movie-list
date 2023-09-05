import { useGetMovies, useGetMoviesPage } from '../query'
import { Card, Grid, Pagination, PaginationItem, Stack } from '@mui/material'
import FormDialog from './addedmovie'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useSearchParams , useLocation  } from 'react-router-dom';

import * as React from "react";
export default function Movis() {
    //const { data } = useGetMovies()
    const { search } = useLocation();
    const s =()=> {return  search ? Number(search.match(/(\d+)/)[1]) : 1}
    const pagesearch = s()
    const [page, setPage] = React.useState(pagesearch);
    const [searchParams, setSearchParams] = useSearchParams() 
    const {data} =  useGetMoviesPage(page)
    const handleChange = (event, value) => {
        setPage(value);
        console.log(value,'value',event)
    };
    React.useEffect(() => {
            setSearchParams({ page: page })
    }, [page])
    
    
    return (
        <>
            <Grid container style={{ justifyContent: 'center', alignItems: 'center', height: 200 }} >
                <FormDialog />
            </Grid>
            <Grid container style={{ justifyContent: 'center' }} spacing={10}>
                {
                    data && data.map((a) => (
                        <Grid key={a.id} item >
                            <Link to={`/movie/${a.id}`}>
                                <Card style={{ marginTop: 100, backgroundColor: '#4c4848', width: 400, height: 200 }} >
                                    <div style={{ margin: 30 }}>
                                        <Typography variant='h6' color={'white'}>{a.id}</Typography>
                                        <Typography variant='h5' color={'white'}>{a.title}</Typography>
                                        <Typography color={'white'} >{a.genre}</Typography>
                                    </div>
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }
            </Grid>
            <Stack spacing={2} sx={{justifyContent:'center',alignItems:'center'}}>
      <Pagination
        count={10}
        page={page}
        onChange={handleChange}
        renderItem={(item) => (
            <>
           
            {/* {console.log(item,'item')} */}
          <PaginationItem
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
           </>
        )}
      />
    </Stack>
        </>
    )
}
