import Head from 'next/head'
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen px-3">

      <Head>
        <title>Mukul Rajpoot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen flex flex-col items-center justify-center">
        <main className="container px-20 lg:px-56">
          <h3 className="text-success md:text-4xl">Hi, I am</h3>
          <h1 className="text-secondary-100 text-9xl md:text-9xl">Mukul Rajpoot</h1>
          <h1 className="text-secondary-900 text-4xl md:text-8xl">I speak in <span className="font-bold text-success">&lt;code /&gt;</span> so you don't have to</h1>
          <p className="text-secondary-900 text-3xl md:text-4xl max-w-6xl">I’m a Full-Stack Developer based in Barielly, India specializing in building exceptional digital experiences.</p>
          <button className="rounded-lg border-2 px-8 py-4 my-4 border-success text-success">Contact Now</button>
        </main>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
        <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
          <h1 className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;About /&gt; </h1>
          <h1 className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Mukul Rajpoot</h1>
        </div>
        <main className="container px-20 lg:px-56">
          <h3 className="text-success md:text-4xl">About Me</h3>
          <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">I am a full-stack creative developer based in Barielly, India. I am a <span>Computer Science</span> undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts.</h3>
          <h4 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">I enjoy using my skill-set to empower people to accomplish their goals. My development stack is focused on performance & accessibility with delightful interactions. I create lighting fast WebApps and Websites using MERN Stack with the help of NextJS.
          </h4>
          <Link href="/about">
            <button className="rounded-lg border-2 px-8 py-4 my-4 border-success text-success">Learn More</button>
          </Link>
        </main>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
        <div className="hidden h-1/4 container relative w-full md:flex justify-center items-center">
          <h1 className="absolute bottom-0 text-transparent" style={{ WebkitTextStrokeWidth: '.5px', WebkitTextStrokeColor: 'var(--main-yellow)', fontSize: '15rem', zIndex: '-1' }}>&lt;Work /&gt; </h1>
          <h1 className="text-secondary-100 font-extrabold" style={{ fontSize: '10rem' }} >Featured Projects</h1>
        </div>
        <main className="container px-20 lg:px-56">
          <h3 className="text-success md:text-4xl">Work</h3>
          <h3 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8">I am a full-stack creative developer based in Barielly, India. I am a <span>Computer Science</span> undergraduate from Chandigarh University and also did some coursework in Designing and Visual Arts.</h3>
          <h4 className="text-secondary-900 text-3xl md:text-4xl max-w-6xl my-8"> I enjoy using my skill-set to empower people to accomplish their goals.
            My development stack is focused on building incredible fast websites and WebApps with delightful interactions.
          </h4>
          <button className="rounded-lg border-2 px-8 py-4 my-4 border-success text-success">Learn More</button>
        </main>
      </div>

    </div>
  )
}
