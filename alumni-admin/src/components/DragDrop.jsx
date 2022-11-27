import React from "react"
import { useState, useRef } from "react"
import "./DragDrop.scss"

function DragDrop() {
  const [dragActive, setDragActive] = useState(false)

  const inputRef = useRef(null)

  const handleDrag = function (e) {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = function (e) {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        alert("files Accepted")
    }
  }

  const handleChange = function (e) {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
    }
  }

  const onButtonClick = () => {
    inputRef.current.click()
  }

  return (
    <div className="drag-drop">
      <form
        id="form-file-uplaod"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="file"
          ref={inputRef}
          id="input-file-upload"
          multiple={true}
          onChange={handleChange}
        />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={dragActive ? "drag-active" : ""}
        >
          <div>
            <p>Drag and drop your file here or</p>
            <button className="upload-button" onClick={onButtonClick}>
              Upload a file
            </button>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>
    </div>
  )
}

export default DragDrop
