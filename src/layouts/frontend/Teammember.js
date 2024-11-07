import React from 'react'


const teamMembers = [
  {
    name: "Tom Cruise",
    title: "Founder & Chairman",
    image: "image 47.png", // Replace with actual image path
    social: { twitter: "#", instagram: "#", linkedin: "#" }
  },
  {
    name: "Emma Watson",
    title: "Managing Director",
    image: "image 51.png", // Replace with actual image path
    social: { twitter: "#", instagram: "#", linkedin: "#" }
  },
  {
    name: "Will Smith",
    title: "Product Designer",
    image: "Frame 874.png", // Replace with actual image path
    social: { twitter: "#", instagram: "#", linkedin: "#" }
  },
  {
    name: "Emma Watson",
    title: "Managing Director",
    image: "image 51.png", // Replace with actual image path
    social: { twitter: "#", instagram: "#", linkedin: "#" }
  },
  {
    name: "Emma Watson",
    title: "Managing Director",
    image: "image 51.png", // Replace with actual image path
    social: { twitter: "#", instagram: "#", linkedin: "#" }
  },
];

const Teammember = () => {
  return (
    <>
 <div className="flex justify-center space-x-8 py-12 bg-gray-50">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-4"
        >
          {/* Card with Image */}
          <div className="bg-white rounded-lg shadow-lg w-full p-0">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-64 object-cover "
            />
          </div>

          {/* Text and Social Links below the Card */}
          <div className="text-center">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-gray-500 text-sm mb-2">{member.title}</p>
            <div className="flex justify-center space-x-4 text-gray-600">
              <a href={member.social.twitter} aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={member.social.instagram} aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href={member.social.linkedin} aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default Teammember