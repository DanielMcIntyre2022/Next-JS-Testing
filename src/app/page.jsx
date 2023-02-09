
export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const response = await data.json()
  console.log(response)
  return (
    <main>
      <h1 className='text-lg'>Hello Next!</h1>
    </main>
  )
}
