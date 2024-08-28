"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import Template from './_components/Template'

function Dashboard() {
  const [userSearchInput, setuserSearchInput] = useState<string>("")

  return (
    <div>
      {/* Search section */}
      <SearchSection onSearchInput={(value: string) => setuserSearchInput(value)} />

      {/* Template section */}
      <Template userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard
