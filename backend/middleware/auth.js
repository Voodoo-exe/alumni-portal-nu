const jwt = require("jsonwebtoken")
const sql = require("mssql")
const config = require("../config/config")

exports.isAuthenticatedUser = async (req, res, next) => {
  const { accessToken } = req.cookies
  if (!accessToken) {
    return next(
      res.status(401).json({
        success: false,
        message: "Please login to access this resource",
      })
    )
  }

  const decodedData = jwt.verify(accessToken, process.env.JWT_SECRET)
  // console.log("decoded data : ", decodedData)

  let pool = await sql.connect(config)
  const user = await pool
    .request()
    .query(`SELECT usr_id FROM users WHERE usr_id = '${decodedData.user_id}'`)

  // console.log("user: ", user.recordset[0])
  req.user = user.recordset[0]
  next()
}
