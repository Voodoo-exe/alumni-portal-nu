import { React, useState } from "react"
import TextField from "@mui/material/TextField"
import "./ConnectPage.css"
import data from "./ListData.json"
import Grid from "@mui/material/Grid"

function ConnectPage() {
  const [inputText, setInputText] = useState("")
  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase()
    setInputText(lowerCase)
  }

  return (
    <div className="main">
      <h1>Alumni Connect</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <Grid
        className="peoples-list"
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <UsersList input={inputText} />
      </Grid>
    </div>
  )
}

function UsersList({ input }) {
  const filteredData = data.filter((el) => {
    if (input === "") return el

    return el.name.toLowerCase().includes(input)
  })

  return (
    <>
      {filteredData.map((item) => (
        <Grid item>
          <ConnectCard batch={item.batch} name={item.name} photo={item.photo} />
        </Grid>
      ))}
    </>
  )
}

function ConnectCard({ batch, name, photo }) {
  const pic = photo ?? "/images/logo512.png"

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
