import React from 'react'

const footer = () => {
  const currentyear = new Date().getFullYear()
  return (
    <footer className='bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] text-white flex items-center justify-center px-4 pb-6 h-12'>
        <p className='text-center'>Copyright &copy; {currentyear}&nbsp;
      Get Me A Chai - All rights are reserved!
        </p>

    </footer>
  )
}

export default footer
