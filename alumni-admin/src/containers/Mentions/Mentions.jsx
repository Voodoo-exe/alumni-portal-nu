import React, { useState } from "react"
import './Mentions.scss'

const Mentions = () => {
  const [name, setName] = useState("")
  const [mention, setMention] = useState("")
  const [imageUrl, setImageUrl] = useState(null)
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
          <div className="inputArea">
            {!image && (
              <label for="image" className="imageLabel">
                Drag and Drop
              </label>
            )}
            <input
              type="file"
              id="image"
              onChange={(e) => {
                setImage(e.target.value)
                setImageUrl(URL.createObjectURL(e.target.files[0]))
              }}
            />
            {image && <img className="inputImage" src={imageUrl} />}
          </div>

          <div className="buttonHolder">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Mentions
