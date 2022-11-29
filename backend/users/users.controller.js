const {
  getAllGeneralDetails,
  getAllUsers,
  registerAlumnus,
  loginAlumnus,
  logoutAlumnus,
  getAlumnusById,
  deleteAlumnus,
  getAllAdmins,
  registerAdmin,
  getCurrentAlumnusDetails,
} = require("./users.service")
const { isAuthenticatedUser } = require("../middleware/auth")
const express = require("express")
const router = express.Router()

router.route("/users").get(getAllUsers)
router.route("/users/general").get(getAllGeneralDetails)
router
  .route("/users/alumnus")
  .get(isAuthenticatedUser, getCurrentAlumnusDetails)
router.route("/users/alumnus/login").post(loginAlumnus)
router.route("/users/alumnus/logout").post(isAuthenticatedUser, logoutAlumnus)
router.route("/users/alumnus/register").post(registerAlumnus)
router
  .route("/users/alumnus/delete")
  .delete(isAuthenticatedUser, deleteAlumnus, logoutAlumnus)
router.route("/users/alumnus/:user_id").get(getAlumnusById)

router.route("/users/admins").get(getAllAdmins)
router.route("/users/admins/register").post(registerAdmin)

module.exports = router
