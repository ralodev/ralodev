import React from 'react'

const SkillCard = ({img, name}) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-105 duration-300">
      <img className="my-2 sm:my-4 sm:max-h-20 max-h-10 max-w-20 mx-auto" src={img} alt={name} />
      <p className="my-2 sm:my-4 text-base">{name}</p>
    </div>
  )
}

export default SkillCard