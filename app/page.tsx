import Image from 'next/image'

export default function Home() {
  return (
<main>
  <div className=''>hello world izaz</div>
  <Image
        src="next.svg" // Replace with the actual path to your image
        alt="Description of the image"
        width={100} // Set the width of the image
        height={100} // Set the height of the image
      />
      <div>oiii</div>

      <Image
       src="vercel.svg"  alt="Description of the image" width={100} 
        height={100}/>


       
</main>
  )
}