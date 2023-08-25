import Image from 'next/image'
import Link from 'next/link'
import imagetest from "../../public/imagetest.webp"
export default function Home() {
  return (
    <>
      <h1>Welcome to home page</h1>
      {/* <Image src={imagetest}></Image> */}
      <Link href={"/products"}>Go to products</Link>

      {
        process.env.NODE_ENV == "development" ?
          <h1>U r in development mode</h1> :
          <h1>U r in production mode</h1>
      }

      <div>{process.env.DATA_NAME}</div>
    </>
  )
}
