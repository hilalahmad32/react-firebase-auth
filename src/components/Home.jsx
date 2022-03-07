

import { Card, Container, CardContent,Grid, Typography } from '@mui/material'
import { auth } from '../firebase'

const Home = () => {
    return (
        <div className="my-50">
           <Container>
               <Grid container justifyContent="center">
                   <Grid item xl={6} lg={6} md={6} sm={8} xs={12}>
                       <Card>
                           <CardContent>
                               <Typography variant="h3" component="div">
                                   Hi {auth.currentUser?.email ?auth.currentUser?.email:"login"}
                               </Typography>
                           </CardContent>
                       </Card>
                   </Grid>
               </Grid>
           </Container>
        </div>
    )
}

export default Home