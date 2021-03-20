import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Profile = () => {
  return (
    <div className="profile">
      <StaticImage
        src="../images/julia.jpg"
        alt="Saint Lawrence River"
        layout="constrained"
        placeholder="blurred"
        width={100}
      />
    </div>
  )
}

export default Profile
