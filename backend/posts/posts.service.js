const config = require("../config/config")
const sql = require("mssql")

const createEventPost = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    const post_user_id = req.user.usr_id
    // const event_type = 1
    const title = req.body.title
    const event_description = req.body.event_description
    const event_start_time = req.body.event_start_time // 2022-10-10
    const event_end_time = req.body.event_end_time
    const venue = req.body.venue

    console.log("post_user_id = ", post_user_id)
    const query = `INSERT INTO user_posts (post_user_id) VALUES (${post_user_id});
    INSERT INTO event_posts (post_id, ep_user_id, title, event_description, event_start_time, event_end_time, venue) VALUES (SCOPE_IDENTITY(), ${post_user_id}, '${title}', '${event_description}', '${event_start_time}', '${event_end_time}', '${venue}');`

    await pool.request().query(query)

    res.status(201).json({
      success: true,
      message: "Event post created",
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `${err}`,
    })
  }
}

const getAllEventPosts = async (req, res) => {
  try {
    let pool = await sql.connect(config)

    const query =
      "SELECT EP.* FROM users U, event_posts EP WHERE U.usr_id = EP.ep_user_id;"

    const event_posts = await pool.request().query(query)

    res.status(201).json({
      success: true,
      data: event_posts.recordset,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `${err}`,
    })
  }
}

const getEventPostsByUserId = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    const user_id = req.params.user_id
    const query = `SELECT EP.* FROM users U, event_posts EP
WHERE U.usr_id = ${user_id} AND EP.ep_user_id = U.usr_id;`
    const event_posts = await pool.request().query(query)
    res.status(201).json({
      success: true,
      data: event_posts.recordset,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `${err}`,
    })
  }
}

const createGeneralPost = async (req, res) => {
  try {
    const post_user_id = req.user.usr_id
    const content = req.body.content
    // const media = req.body.media ?? null

    const query = `INSERT INTO user_posts (post_user_id) VALUES (${post_user_id});
INSERT INTO general_posts (post_id, gp_user_id, content) VALUES (SCOPE_IDENTITY(), ${post_user_id}, '${content}');`

    let pool = await sql.connect(config)
    await pool.request().query(query)
    res.status(201).json({
      success: true,
      message: "General Post created",
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `${err}`,
    })
  }
}

const getAllGeneralPosts = async (req, res) => {
  try {
    const query =
      "SELECT GP.* FROM users U, general_posts GP WHERE U.usr_id = GP.gp_user_id;"
    let pool = await sql.connect(config)
    const general_posts = await pool.request().query(query)

    res.status(201).json({
      success: true,
      data: general_posts.recordset,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `${err}`,
    })
  }
}

const getGeneralPostsByUserId = async (req, res) => {
  try {
    const gp_user_id = req.params.user_id
    const query = `SELECT GP.* FROM users U, general_posts GP WHERE U.usr_id = ${gp_user_id} and GP.gp_user_id = U.usr_id;`

    let pool = await sql.connect(config)
    const general_posts = await pool.request().query(query)
    res.status(201).json({
      success: true,
      data: general_posts.recordset,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `${err}`,
    })
  }
}

const addPostComment = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    const pc_user_id = req.user.usr_id
    const post_id = req.body.post_id
    const content = req.body.content
    const query = `INSERT INTO post_comments (post_id, pc_user_id, content) VALUES (${post_id}, ${pc_user_id}, '${content}');`
    await pool.request().query(query)
    res.status(201).json({
      success: true,
      message: "Comment added!",
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `${err}`,
    })
  }
}

const getAllPostComments = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    const query_EP =
      "SELECT PC.*, EP.title AS post_title FROM post_comments PC, event_posts EP, users U WHERE PC.post_id = EP.post_id AND PC.pc_user_id = U.usr_id;"
    const event_posts_comments = await pool.request().query(query_EP)

    const query_GP =
      "SELECT PC.*, GP.content as post_content FROM post_comments PC, general_posts GP, users U WHERE PC.post_id = GP.post_id AND PC.pc_user_id = U.usr_id;"
    const general_posts_comments = await pool.request().query(query_GP)

    res.status(201).json({
      success: true,
      data: {
        event_posts_comments: event_posts_comments.recordset,
        general_posts_comments: general_posts_comments.recordset,
      },
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `${err}`,
    })
  }
}

const getPostCommentsOfPostById = async (req, res) => {
  try {
    let pool = await sql.connect(config)
    const post_id = parseInt(req.params.post_id, 10)
    const query = `SELECT PC.* FROM users U, post_comments PC WHERE PC.post_id = ${post_id} AND PC.pc_user_id = U.usr_id;`
    const post_comments = await pool.request().query(query)
    res.status(201).json({
      success: true,
      data: post_comments.recordset,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      error: `${err}`,
    })
  }
}

module.exports = {
  getAllEventPosts,
  createEventPost,
  getEventPostsByUserId,
  createGeneralPost,
  getGeneralPostsByUserId,
  getAllGeneralPosts,
  addPostComment,
  getAllPostComments,
  getPostCommentsOfPostById,
}
