import React, { useState } from 'react'
import GiftList from '../components/giftList'
import Input from '../components/input'
import { useAuth } from '../context/AuthContext'
// import { isCurrentUser } from "../firebae/firebase";

const Home = () => {
  const [keyword, setKeyword] = useState()
  const { user, loading } = useAuth()

  console.log(user)
  if (loading) return <h1> loading </h1>

  function keywordSeacrh(newKeyword) {
    setKeyword(newKeyword)
  }

  return (
    <section className="bg-secondary w-100">
      <Input keywordSeacrh={keywordSeacrh} />
      <div className="mx-5">
        <GiftList keyword={keyword} />
      </div>
    </section>
  )
}

export default Home
