import React from 'react'
import Image from 'next/image'; // Import the 'Image' component

const register = () => {
  return (
    <div className='flex h-screen max-h-screen'>
        <section className="remove-scrollbar container">
            <div className='sub-container max-w-[860px] flex-1 flex-col py-18'>
            <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />
            </div>
        </section>
    </div>
  )
}

export default register