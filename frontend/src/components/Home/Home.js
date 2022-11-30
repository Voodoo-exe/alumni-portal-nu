import React from "react"
import Testimonials from "../Testimonials/Testimonials"
import "./Home.css"

const text = `At NIIT University (NU), our endeavour is to create a vibrant
          intellectual environment that nurtures the free thinker, the
          pro-active problem solver, the “I’ll do it on my own!” entrepreneur.
          Their journeys begin at our gates, and we are proud of their
          successes. We are only as strong as the bonds that nurture us,
          support us when we are weak, and cheer us on when we flag. Which is
          why a dedicated team of volunteers works to create lifelong linkages
          between alumni and the university. Our excellent alumni network
          refreshes these bonds, brings alumni together, supports them in
          their endeavours and connects them to opportunities for professional
          development and networking. So, whether you are seeking to expand
          your skill sets or changing career lanes, whether you want to
          celebrate your success or share how your failures made you stronger,
          whether you want an opportunity to connect with your faculty mentor
          or just relive your campus memories, we are here for you. Remember,
          the bonds forged on campus are strong and long-lasting. Welcome back
          home! Contrary to popular belief, Lorem Ipsum is not simply random
          text. It has roots in a piece of classical Latin literature from 45
          BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of
          the more obscure Latin words, consectetur, from a Lorem Ipsum
          passage, and going through the cites of the word in classical
          literature, discovered the undoubtable source. Lorem Ipsum comes
          from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
          (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
          book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham.`

const Home = () => {
  return (
    <>
      <div className="top">
        <img src="images/alumni.jpg" width="100%" />
      </div>
      <div>
        <div className="text">
          <p>{text}</p>
        </div>
        <Testimonials className="testimonials"></Testimonials>
      </div>
    </>
  )
}

export default Home
