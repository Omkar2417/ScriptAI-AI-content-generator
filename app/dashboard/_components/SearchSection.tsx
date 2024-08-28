import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to-blue-600 flex flex-col justify-center items-center text-white'>
      <h2 className='text-3xl font-bold flex flex-col justify-center items-center text-white'>Browse all templates</h2>
      <p>Tell us what would you like to create..?</p>
      <div className='w-full flex justify-center'>
        <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[60%]'>
          <Search className='text-primary' />
          <input
            type="text"
            placeholder='Search..'
            onChange={(event) => onSearchInput(event.target.value)}
            className='bg-transparent text-black w-full outline-none'
          />
        </div>
      </div>
    </div>
  )
}

export default SearchSection
