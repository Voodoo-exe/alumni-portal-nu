import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ReactPhoneInput from "react-phone-input-material-ui"
import { TextField, withStyles } from "@material-ui/core"
import { useState } from "react"
import { Typography } from "@material-ui/core"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import "./Login.scss"
import Stack from "@mui/material/Stack"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import InputAdornment from "@mui/material/InputAdornment"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { loginUser } from "../../features/user/userActions"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getLoggedInUserDetails } from "../../features/profile/profileActions"

const styles = (theme) => ({
  field: {
    margin: "10px 0",
  },
  countryList: {
    ...theme.typography.body1,
  },
})

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
      height: "100%",
    },
  },
}))

const validationSchema = yup.object().shape({
  email_address: yup
    .string()
    .required("email_address is required")
    .email("email_address is invalid"),
  password: yup.string().required("Password is required"),
})

function Register() {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    // redirect user to login page if registration was successful
    // if (success) navigate("/")
    // redirect authenticated user to profile screen
    if (userInfo) {
      dispatch(getLoggedInUserDetails())
      navigate("/profile")
    }
  }, [navigate, userInfo, success])

  const classes = useStyles()

  const [passwordState, setPasswordState] = React.useState({
    password: "",
    showPassword: false,
  })

  const handleClickShowPassword = () => {
    setPasswordState({
      ...passwordState,
      showPassword: !passwordState.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const onSubmit = (data) => {
    data.email_address = data.email_address.toLowerCase()
    console.log(JSON.stringify(data, null, 2))
    dispatch(loginUser(data))
  }

  return (
    <div id="centerDiv">
      <h1 id="h1">Login</h1>
      <form
        id="survey-form"
        className={classes.root}
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack direction="column" alignItems="flex-start" spacing={2}>
          <div>
            <TextField
              label="email_address"
              variant="outlined"
              {...register("email_address")}
              error={errors.email_address ? true : false}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.email_address?.message}
            </Typography>
          </div>
          <div id="password">
            <TextField
              label="Password"
              type={passwordState.showPassword ? "text" : "password"}
              variant="outlined"
              {...register("password")}
              error={errors.password ? true : false}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {passwordState.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <Typography variant="inherit" color="textSecondary">
              {errors.password?.message}
            </Typography>
          </div>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => {
              console.log(errors)
            }}
          >
            Login
          </Button>
          <Typography>{errors?.content}</Typography>
          <Typography>{error && `${error}`}</Typography>
        </Stack>
      </form>
    </div>
  )
}

export default withStyles(styles)(Register)
