import React, { useContext } from 'react'
import { AppBar, Button, Container, Toolbar } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../context-api/GlobalContext'
const Navbar = () => {
  const navigate=useNavigate();
  const {token,signout}=useContext(GlobalContext)
  const logout=()=>{
    signout();
    navigate("/")
  }
  return (
    <div>
        <AppBar position="static" className="bg-dark">
                <Container>
                    <div className="flex">
                        <Toolbar>
                        <Link to="/" style={{color:"white"}}>Home</Link>
                        </Toolbar>
                        <Toolbar>
                          {token ? (
                            <Button variant="contained" onClick={logout} color="error">Logout</Button>
                          ):(
                            <>
                             <Link to="/login" style={{color:"white"}} className="mx-4">Login</Link>
                            <Link to="/signup" style={{color:"white"}}>Signup</Link>
                            </>
                          )}
                           
                        </Toolbar>
                    </div>
                </Container>
            </AppBar>
    </div>
  )
}

export default Navbar