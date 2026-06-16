async function Home() {

  //! SSR - har bar naya data
  // const res = await fetch('http://localhost:3000/api/users', {
  //   cache: 'no-store'
  // })

  // const data = await res?.json()
  // console.log(data);

  //! SSG - cache ma data store kr lega

  // const res = await fetch('http://localhost:3000/api/users', {
  //   cache: 'force-cache'
  // })

  // const data = await res.json()
  // console.log(data);

  //! ISR - kuch time bad naya data

  const res = await fetch('http://localhost:3000/api/users', {
    next: {
      revalidate: 60
    }
  })

  const data = await res?.json()
  console.log(data);


  return (
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home