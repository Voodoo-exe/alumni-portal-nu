import React from "react"
import "./Docs.scss"
import { useState } from "react"


function Docs() {
  const [name, setName] = useState("")
  const [category, setCategory] = useState(null)
  const [file, setFile] = useState(null)
  const [desc, setDesc] = useState("")
  const handleSubmit = (e) => {
    alert(
      "Following Data has been submitted: Title --> " +
        name +
        " Description --> " +
        desc +
        " Image File --> " +
        file +
        " Category --> " +
        category +
        " ."
    )
  }
  
  return (
    <>
      <div className="docs-form">
        <h1>Documents Upload</h1>
        <form
          onSubmit={(e) => {
            handleSubmit(e)
          }}
        >
          <label htmlFor="category">Category</label>
          <select
            name="category"
            id="category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="policy">Policy</option>
            <option value="newsletter">Newsletter</option>
          </select>
          <label htmlFor="name">Title</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="desc">Desc</label>
          <textarea
            type="text"
            id="desc"
            onChange={(e) => setDesc(e.target.value)}
          />

          <label htmlFor="file">Image</label>
          <div className="inputArea">
            {!file && (
              <label for="file" className="fileLabel">
                Drag and Drop
              </label>
            )}
            <input
              type="file"
              id="file"
              onChange={(e) => setFile(e.target.value)}
            />
          </div>

          <div className="buttonHolder">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Docs
