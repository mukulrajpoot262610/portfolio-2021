import Head from "next/head";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Head>
        <title>Blogs - Mukul Rajpoot</title>
      </Head>

      <section className="pt-32 flex justify-center items-center flex-col">
        <div className="w-10/12 lg:w-8/12 ">
          <h1 className="text-7xl lg:text-9xl font-bold mt-56 text-info">
            mukul&apos; blogs!
          </h1>
          <p className="w-full lg:w-1/2 text-2xl mt-8">We focus on industry leading platforms so that you can be prepared for your next skill. Then we teach all we can about them.</p>
          <hr className="w-full border-white my-16" />

          <div className="grid grid-cols-2 gap-10">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>

        </div>
      </section>
    </main>
  )
}