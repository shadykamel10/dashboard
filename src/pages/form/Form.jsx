// @ts-nocheck
import { Alert, Box, Button, MenuItem, Stack } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import  React from "react";
import Snackbar from '@mui/material/Snackbar';


const Form = () => {
  const Role = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manger",
      label: "Manger",
    },
    {
      value: "User",
      label: "user",
    },
  ];


  const [open, setOpen] = React.useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const handleClick = () => {
    setOpen(true);
  };
  
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const onSubmit = (data) => {
    console.log(data)
    handleClick()
  }
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  

  
  
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        display: "flex",
        gap: 2,
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      <Stack direction="row" spacing={2}>
        <TextField
          sx={{ flex: 1 }}
          label="firstName"
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "firstName is required" : null}
          {...register("firstName", { required: true, minLength: 3 })}
          variant="filled"
        />

        <TextField
          sx={{ flex: 1 }}
          label="lastName"
          variant="filled"
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "lastName is required" : null}
          {...register("lastName", { required: true, minLength: 3 })}
        />
      </Stack>

      <TextField
        label="Email"
        error={Boolean(errors.email)}
        helperText={errors.email ? "email is not " : null}
        {...register("email", {
          required: true,
          minLength: 3,
          pattern: emailRegex,
        })}
        variant="filled"
      />

      <TextField
        label="contact number"
        error={Boolean(errors.phoneNumber)}
        helperText={errors.phoneNumber ? "phoneNumber is not " : null}
        {...register("phoneNumber", {
          required: true,
          minLength: 3,
          // pattern: phoneRegex,
        })}
        variant="filled"
      />

      <TextField label="address1" variant="filled" />
      <TextField label="address2" variant="filled" />
      <TextField
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
      >
        {Role.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button variant="contained" type="submit">
          create user
        </Button>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          User created successfully
        </Alert>
      </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
