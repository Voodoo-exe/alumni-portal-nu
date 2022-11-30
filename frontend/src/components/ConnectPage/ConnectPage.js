import { React, useState } from "react"
import { Grid, TextField, Container } from "@mui/material"
import { useGetOthersQuery } from "../../api/connectionsSlice"
import CircularProgressIndicator from "../CircularProgressIndicator/CircularProgressIndicator"
import "./ConnectPage.css"

function ConnectPage() {
  const [inputText, setInputText] = useState("")
  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  const { data, error, isLoading } = useGetOthersQuery()

  return isLoading ? (
    <CircularProgressIndicator />
  ) : error ? (
    <p>Error occured: {JSON.stringify(error)}</p>
  ) : (
    <Container
      maxWidth="xl"
      sx={{
        width: "100%",
        marginTop: "2rem",
        marginBottom: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      component="div"
    >
      <h1>Alumni Connect</h1>
      <div className="search">
        <TextField
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
          name="connect_search"
        />
      </div>
      <Grid
        className="peoples-list"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <UsersList data={data.data} input={inputText} />
      </Grid>
    </Container>
  )
}

function UsersList({ data, input }) {
  const filteredData = data.filter((el) => {
    if (input === "") return el

    return el.full_name.toLowerCase().includes(input)
  })

  return (
    <>
      {filteredData.map((item) => (
        <Grid item key={parseInt(item.usr_id)}>
          <ConnectCard
            batch={item.batch}
            name={item.full_name}
            photo={item.photo}
          />
        </Grid>
      ))}
    </>
  )
}

function ConnectCard({ batch, name, photo }) {
  const pic = photo ?? "logo512.png"

  return (
    <div className="MainCard">
      <div>
        <img src={pic} className="CardImage"></img>
      </div>

      <div className="Yo">
        <p className="Text">{name}</p>
        <p className="Text">{batch}</p>
        <button type="button" className="Card-Button">
          Connect
        </button>
      </div>
    </div>
  )
}

export default ConnectPage
