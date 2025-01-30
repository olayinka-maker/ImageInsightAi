import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' w-full border-b-2 flex justify-between items-center p-4'>
        <div className='text-2xl font-bold text-blue-400'>
            ImageInsightAi
        </div>
        <div className='flex space-x-4'>
            <Link className=' hover:text-blue-400' href="/">Home</Link>
            <Link className=' hover:text-blue-400'  href="#howitworks">How It Works</Link>
            <Link className=' hover:text-blue-400' href="#features">Features</Link>
        </div>
    </div>
  )
}

export default Header