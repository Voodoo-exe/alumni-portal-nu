import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import ReactPhoneInput from "react-phone-input-material-ui"
import { TextField, withStyles } from "@material-ui/core"
import PhotoCamera from "@mui/icons-material/PhotoCamera"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import {
  Paper,
  Container,
  Typography,
  Button,
  IconButton,
  InputAdornment,
  Stack,
} from "@mui/material"
import * as yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerUser } from "../../features/user/userActions"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getLoggedInUserDetails } from "../../features/profile/profileActions"
import "./Register.css"

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
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  email_address: yup
    .string()
    .required("email_address is required")
    .email("email_address is invalid"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .max(40, "Password must not exceed 40 characters"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password"), null], "Confirm Password does not match"),
  mobile_number: yup.string().required("Phone number is required"),
  user_bio: yup.string(),
  batch: yup
    .number()
    .min(2009, "Batch cannot precede 2009")
    .max(9999, "Batch cannot exceed 9999"),
  user_company: yup.string(),
  user_location: yup.string(),
  user_job: yup.string(),
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
    // redirect authenticated user to profile screen
    dispatch(getLoggedInUserDetails())
    if (userInfo) {
      navigate("/profile")
    }
  }, [navigate, userInfo, success])

  const [mobile_number, setmobile_number] = useState("")
  const classes = useStyles()

  const [passwordState, setPasswordState] = React.useState({
    password: "",
    confirmPassword: "",
    showPassword: false,
  })

  const handlePhoneChange = (data) => {
    // console.log(data)
    setmobile_number(data)
    setValue("mobile_number", data)
  }

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
    /*
    {
      "user_job": "SDE Intern",
      "user_location": "Bangalore",
      "user_company": "Big Basket",
      "batch": 2019,
      "user_bio": "I work at Big Basket",
      "mobile_number": "919817293847",
      "confirmPassword": "avisinha",
      "password": "avisinha",
      "email_address": "avi@gmail.com",
      "last_name": "sinha",
      "first_name": "avi"
    }
    */
    delete data.confirmPassword
    console.log(JSON.stringify(data, null, 2))
    dispatch(registerUser(data))
  }

  return (
    <Container maxWidth="lg">
      <div id="centerDiv">
        <Paper
          elevation={3}
          sx={{
            width: "100%",
            margin: "1.2rem auto",
            paddingTop: "1.2rem",
            paddingBottom: "1.2rem",
          }}
        >
          <Typography component="div" className="title-text" variant="h3">
            Register
          </Typography>
        </Paper>
        <form
          id="survey-form"
          className={classes.root}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack direction="column" alignItems="flex-start" spacing={2}>
            <div>
              <TextField
                label="First Name"
                variant="outlined"
                {...register("first_name")}
                error={errors.first_name ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.first_name?.message}
              </Typography>
            </div>
            <div>
              <TextField
                label="Last Name"
                variant="outlined"
                {...register("last_name")}
                error={errors.last_name ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.last_name?.message}
              </Typography>
            </div>
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
            <div>
              <Controller
                name="mobile_number"
                control={control}
                render={({ field }) => (
                  <ReactPhoneInput
                    country="IN"
                    value={mobile_number}
                    onChange={handlePhoneChange}
                    component={TextField}
                    {...field}
                  />
                )}
              />
            </div>
            <br></br>
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
            <div id="password">
              <TextField
                label="Confirm Password"
                type={passwordState.showPassword ? "text" : "password"}
                variant="outlined"
                {...register("confirmPassword")}
                error={errors.confirmPassword ? true : false}
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
                {errors.confirmPassword?.message}
              </Typography>
            </div>
            <TextField
              label="User Bio"
              multiline
              minRows={4}
              defaultValue=""
              variant="outlined"
              fullWidth
              {...register("user_bio")}
              error={errors.user_bio ? true : false}
            />
            <TextField
              label="Batch"
              variant="outlined"
              type="number"
              {...register("batch")}
              error={errors.batch ? true : false}
            />
            <TextField
              label="user_company"
              variant="outlined"
              {...register("user_company")}
              error={errors.user_company ? true : false}
            />
            <TextField
              label="user_location"
              variant="outlined"
              {...register("user_location")}
              error={errors.user_location ? true : false}
            />
            <TextField
              label="Job Role"
              variant="outlined"
              {...register("user_job")}
              error={errors.user_job ? true : false}
            />
            <Button variant="contained" component="label">
              Resume Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
            Profile Picture:
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input hidden accept="image/*" type="file" />
              <PhotoCamera />
            </IconButton>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => {
                console.log(errors)
              }}
            >
              Register
            </Button>
            <Typography>{errors?.content}</Typography>
            <Typography>{error && `${error}`}</Typography>
          </Stack>
        </form>
      </div>
    </Container>
  )
}

export default withStyles(styles)(Register)
