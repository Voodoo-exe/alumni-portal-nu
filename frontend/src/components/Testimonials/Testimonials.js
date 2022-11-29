import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import "./Testimonials.css"

const sample_details = [
  {
    image_path: "images/r2.jpeg",
    name: "Daniel Keystone",
    role: "Designer",
    bio: "The simple and intuitive design makes it easy for me use. I highly recommend Fetch to my peers.",
  },
  {
    image_path: "images/r1.jpeg",
    name: "Shirley Fultz",
    role: "Designer",
    bio: "It's freeing to be able to catch up on customized news and not be distracted by a social media element on the same site",
  },
  {
    image_path: "images/r3.jpeg",
    name: "Theo Sorel",
    role: "Designer",
    bio: "I enjoy catching up with Fetch on my laptop, or on my phone when I'm on the go!",
  },
]

const Testimonials = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
    >
      {sample_details.map((detail) => (
        <div>
          <img src={detail.image_path} />
          <div className="myCarousel">
            <h3>{detail.name}</h3>
            <h4>{detail.role}</h4>
            <p>{detail.bio}</p>
          </div>
        </div>
      ))}
    </Carousel>
  )
}

export default Testimonials
