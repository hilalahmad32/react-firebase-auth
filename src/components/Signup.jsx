import { Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { GlobalContext } from '../context-api/GlobalContext'
const Signup = () => {
  const navigate=useNavigate()
  const {signUp,isLoading} = useContext(GlobalContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const signup=async(e)=>{

    e.preventDefault();

    const data={
      email,password
    }
    signUp(data);
    navigate("/login")
  }

  return (
    <div className="my-50">
      <Container>
        <Grid container justifyContent="center">
          <Grid item xl={6} lg={6} md={6} sm={8} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h3" component="div">
                  Signup Form
                </Typography>
              </CardContent>
              <CardActions>
                <form action="" style={{ width: '100%' }} onSubmit={signup}>
                  <TextField label="Enter Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}} style={{ width: '100%', margin: "10px 0px" }} type="email" />
                  <TextField label="Enter Your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{ width: '100%', margin: "10px 0px" }} type="password" />
                  <Button variant="contained" style={{ margin: "10px 0px" }} type="submit" color="primary">{isLoading ? "Signup...":"Signup"}</Button> <br />
                  <Typography component="span" variant="span">
                   Alrady account ? <Link to="/login" style={{ color: "blue !important" }}>Login</Link>
                  </Typography>
                </form>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default Signup