import { Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { Link,useNavigate} from 'react-router-dom'
import { GlobalContext } from '../context-api/GlobalContext'

const Login = () => {
  const navigate=useNavigate()
  const {signIn,isLoading} = useContext(GlobalContext);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const signin=async(e)=>{

    e.preventDefault();

    const data={
      email,password
    }
    signIn(data);
    navigate("/")
  }

  return (
    <div className="my-50">
      <Container>
        <Grid container justifyContent="center">
          <Grid item xl={6} lg={6} md={6} sm={8} xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h3" component="div">
                  Login Form
                </Typography>
              </CardContent>
              <CardActions>
                <form action="" style={{ width: '100%' }} onSubmit={signin}>
                  <TextField label="Enter Your Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  style={{ width: '100%', margin: "10px 0px" }} type="email" />
                  <TextField label="Enter Your Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}  style={{ width: '100%', margin: "10px 0px" }} type="password" />
                  <Button variant="contained" type="submit" style={{ margin: "10px 0px" }} color="primary">{isLoading ? "Login...":"Login"}</Button> <br />
                  <Typography component="span" variant="span">
                    If you have Not Account ? <Link to="/signup" style={{ color: "blue !important" }}>Signup</Link>
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

export default Login