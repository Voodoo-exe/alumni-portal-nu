import React, {useState} from "react"
import './Jobs.scss'

const Jobs = () => {
  const [position, setPosition] = useState("")
  const [desc, setDesc] = useState("")
  const [link, setLink] = useState("")
  const [org, setOrg] = useState("")

  const handleSubmit = (e) => {
    alert(
      "Following Data has been submitted: Title --> " +
        position +
        " Description --> " +
        desc +
        " Image File --> " +
        org +
        " link --> " +
        link +
        " ."
    )
  }
  return (
    <>
      <div className="docs-form">
        <h1>Jobs Update</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <label htmlFor="position">Position</label>
          <input
            type="text"
            id="position"
            onChange={(e) => setPosition(e.target.value)}
          />

          <label htmlFor="org">Organisation</label>
          <input
            type="text"
            id="org"
            onChange={(e) => setOrg(e.target.value)}
          />

          <label htmlFor="desc">Description</label>
          <input
            type="text"
            id="desc"
            onChange={(e) => setDesc(e.target.value)}
          />

          <label htmlFor="link">Link</label>
          <input
            type="text"
            id="link"
            onChange={(e) => setLink(e.target.value)}
          />

          <input type="submit" />
        </form>
      </div>
    </>
  )
}

export default Jobs;
