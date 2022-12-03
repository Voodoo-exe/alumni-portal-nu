import React, { useState } from "react"
import './Events.scss'

const Events = () => {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [link, setLink] = useState("")
  const [image, setImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  const handleSubmit = (e) => {
    alert(
      "Following Data has been submitted: Title --> " +
        title +
        " Description --> " +
        desc +
        " Image File --> " +
        image +
        " link --> " +
        link +
        " ."
    )
  }
  return (
    <>
      <div className="events-form">
        <h1>Event Update</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={(e) => setTitle(e.target.value)}
          />

          <label htmlFor="desc">Desc</label>
          <textarea
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

export default Events
