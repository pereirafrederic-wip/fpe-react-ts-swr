import React, { Suspense } from 'react';
import useSWR from 'swr'

function Profile () {
  const { data } = useSWR(
    '/api/user',
    fetch,
    { suspense: true }
  )
  return <div>hello, {data.name}</div>
}

export default function App () {
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Profile/>
    </Suspense>
  )
}
