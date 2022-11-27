import React, { useState } from "react"

const Mentions = () => {
  const [name, setName] = useState("")
  const [mention, setMention] = useState("")

  const [image, setImage] = useState(null)

  const handleSubmit = (e) => {
    alert(
      "Following Data has been submitted: Title --> " +
        name +
        " Description --> " +
        mention +
        " Image File --> " +
        image +
        
        " ."
    )
  }
  return (
    <>
      <div className="mentions-form">
        <h1>Mentions Update</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="mention">Mention</label>
          <input
            type="text"
            id="mention"
            onChange={(e) => setMention(e.target.value)}
          />

          <label htmlFor="image">Image</label>
          <input
            type="file"
            id="image"
            onChange={(e) => setImage(e.target.value)}
          />

          <input type="submit" />
        </form>
      </div>
    </>
  )
}

export default Mentions
