import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-3">
      <Head>
        <title>Mukul Rajpoot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container px-20 lg:px-56">
        <h3 className="text-success md:text-4xl">Hi, I am</h3>
        <h1 className="text-secondary-100 text-7xl md:text-9xl">Mukul Rajpoot</h1>
        <h1 className="text-secondary-900 text-4xl md:text-8xl">I am a Full-Stack Developer</h1>
        <p className="text-secondary-900 text-2xl md:text-3xl max-w-3xl">I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.</p>
        <button className="rounded-lg border-2 px-8 py-4 my-4 border-success text-success">Contact Now</button>
      </main>

    </div>
  )
}
