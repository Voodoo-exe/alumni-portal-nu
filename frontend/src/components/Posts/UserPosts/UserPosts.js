import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../../../features/userPosts/userPostsActions"
import { Box, Paper, Container, Typography } from "@mui/material"
import "./UserPosts.css"
import CircularProgressIndicator from "../../CircularProgressIndicator/CircularProgressIndicator"

const UserPosts = () => {
  let { loading, userPosts, error, success } = useSelector(
    (state) => state.userPosts
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  return (
    <Container maxWidth="lg">
      {loading ? (
        <CircularProgressIndicator />
      ) : error ? (
        <p>Error occured</p>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "100vh",
            width: "100%",
          }}
        >
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
              User posts
            </Typography>
          </Paper>
          {userPosts &&
            userPosts.data &&
            userPosts.data.map((item) => {
              return (
                <Paper
                  key={Number(userPosts.data.post_id)}
                  elevation={3}
                  sx={{
                    width: "100%",
                    marginTop: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <UserPost data={item}></UserPost>
                </Paper>
              )
            })}
        </Box>
      )}
    </Container>
  )
}

export const UserPost = ({ data }) => {
  /*
    {
        "full_name": "M Abhishek",
        "post_id": "2",
        "gp_user_id": "3",
        "content": "General post created by M.Abhishek",
        "media": null,
        "created_at": "2022-11-28T19:47:52.187Z"
    }
    */
  const created_at = new Date(data.created_at).toDateString()
  return (
    <div className="post-container">
      <div className="post-name">
        <div>
          <Typography variant="h5">{data.full_name}</Typography>
        </div>
      </div>
      <div className="post-content">
        <div>
          <Typography variant="body1">{data.content}</Typography>
        </div>
      </div>
      <div className="post-date">
        <div>
          <Typography variant="body2">Created at : {created_at}</Typography>
        </div>
      </div>
    </div>
  )
}

export default UserPosts
