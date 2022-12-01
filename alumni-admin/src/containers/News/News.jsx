import React, { useState } from "react"
import "./News.scss"

const News = () => { 
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
      <div className="news-form">
        <h1>News Update</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <label htmlFor="title">Headline</label>
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
            {!image && <label for="image" className="imageLabel">Drag and Drop</label>}
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

export default News
