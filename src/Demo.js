import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Slide } from '@mui/material';
import logo from './logo.svg';
import './App.css';
export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar la autenticación
    console.log('Login submitted');
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el registro
    console.log('Register submitted');
  };




  
  return (
    <Container
    
      component="main"
      maxWidth="false"
      sx={{
        
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '16px',
        border: '2px solid #1976d2', // Opcional: agrega un padding para no tener contenido pegado al borde
          }}
    >
      <Box
        sx={{
          width: '400px',
          maxWidth: '400px', // Ajusta el ancho máximo de la caja
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'absolute',
          
        }}
      >
        
      

        <Slide direction="down" in={isLogin} mountOnEnter unmountOnExit>
          <Box
            component="form"
            noValidate
            onSubmit={handleLoginSubmit}
            sx={{
              width: '90%',
              position: 'relative',
              top: 0,
              left: 0,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              border: '2px solid #1976d2', // Borde de 2px de color azul
              padding: '16px',
              borderRadius: '8px', // Opcional: agrega bordes redondeados
              backdropFilter: 'blur(5px)', // Aplica el desenfoque

            }}
          ><Typography variant="h5" component="h1" gutterBottom>
          {'Login'}
          <div style={{ margin: "-40px 0" }}>
          <img src={logo} width={"300px"}  className="App-logo" alt="logo" />
          </div>
          
        </Typography>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              sx={{ mb: 2 ,'& .MuiFormLabel-root': {
            color: 'white', // Cambia el color del label aquí
          },'& .MuiInputLabel-shrink': {
            color: 'white', // Cambia el color del label cuando el TextField está enfocado
          },
               }} // Margin bottom para separar el campo del siguiente
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              sx={{ mb: 2 ,'& .MuiFormLabel-root': {
            color: 'white', // Cambia el color del label aquí
          },
              }} // Margin bottom para separar el campo del siguiente
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }} // Margin top para separar el botón del campo de entrada
            >
              Login
            </Button>
            <Button
              onClick={() => setIsLogin(false)}
              variant="text"
              color="secondary"
              fullWidth
              sx={{ mt: 2 ,
                border: '2px solid #1976d2',
              }} // Margin top para separar el botón del campo de entrada
            >
              Register
            </Button>
          </Box>
        </Slide>

        <Slide direction="up" in={!isLogin} mountOnEnter unmountOnExit>
          <Box
            component="form"
            noValidate
            onSubmit={handleRegisterSubmit}
            sx={{
              width: '90%',
              position: 'relative',
              top: 0,
              left: 0,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              border: '2px solid #1976d2', // Borde de 2px de color azul
              padding: '16px',
              borderRadius: '8px', // Opcional: agrega bordes redondeados
              backdropFilter: 'blur(10px)', // Aplica el desenfoque

            }}
          >
            <Typography variant="h5" component="h1" gutterBottom>
            {'Register'}<div style={{ margin: "-40px 0" }}>
          <img src={logo} width={"300px"}  className="App-logo" alt="logo" />
          </div>
          </Typography>
            <TextField
              label="Username"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              sx={{ mb: 2,'& .MuiFormLabel-root': {
            color: 'white', // Cambia el color del label aquí
          },
               }} // Margin bottom para separar el campo del siguiente
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              sx={{ mb: 2 ,'& .MuiFormLabel-root': {
            color: 'white', // Cambia el color del label aquí
          },
               }} // Margin bottom para separar el campo del siguiente
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              sx={{ mb: 2 ,'& .MuiFormLabel-root': {
            color: 'white', // Cambia el color del label aquí
          },
               }} // Margin bottom para separar el campo del siguiente
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }} // Margin top para separar el botón del campo de entrada
            >
              Register
            </Button>
            <Button
              onClick={() => setIsLogin(true)}
              variant="text"
              color="secondary"
              fullWidth
              sx={{ mt: 2, 
                border: '2px solid #1976d2',
              }} // Margin top para separar el botón del campo de entrada
            >
              Login
            </Button>
          </Box>
        </Slide>
      </Box>
    </Container>
  );
}
