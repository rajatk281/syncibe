import React from 'react'

const Features = () => {
  return (
    <div className="h-screen p-20 flex justify-center items-center">
  <div className="w-full h-[90%] bg-white rounded-4xl shadow-2xl flex overflow-hidden">

    <div className="w-1/2 h-full ">
      <video
        className="w-full h-full object-cover"
        src="./spidervid.mp4"
        autoPlay
        muted
        loop
      />
    </div>

    <div className="w-1/2 h-full flex items-center justify-center p-10">
      <div>
        <h1 className="text-4xl font-bold mb-4">Your Content</h1>
        <p className="text-gray-600">
          Add your description, buttons, or anything here.
        </p>
      </div>
    </div>

  </div>
</div>
  )
}

export default Features