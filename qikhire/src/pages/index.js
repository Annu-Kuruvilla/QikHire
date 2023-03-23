import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../components/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>QikHire</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <section className="w-[50%] mx-auto flex flex-col gap-5">
          <div className="title">
            <h1 className="text-black text-4xl font-bold py-4 ">QikHire</h1>
          </div>
          <form className="flex flex-col items center gap-2">
            <div className="flex items center rounded-full p-2">
              <button
                type="submit"
                className="bg-black text-white rounded-full p-2 w-full h-[60px]"
              >
                Hire Now
              </button>
            </div>
            <div className="flex items-center">
              <p className="w-full">Or</p>
            </div>
            <div className="flex items center rounded-full p-2">
              <button
                type="submit"
                className="border border-black rounded-full p-2 w-full h-[60px]"
              >
                Find Jobs
              </button>
            </div>
          </form>
        </section>
      </Layout>
    </>
  );
}