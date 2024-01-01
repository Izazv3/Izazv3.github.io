import Image from 'next/image'
import Link from 'next/link';

 

export default function Home() {
  return (
<main>
  <div className=''>hello world peter maaame</div>
  <Image
        src="next.svg" // Replace with the actual path to your image
        alt="Description of the image"
        width={100} // Set the width of the image
        height={100} // Set the height of the image
      />
      <div>oiii paiya</div>

      <Image
       src="vercel.svg"  alt="Description of the image" width={100} 
        height={100}/>
 <Link legacyBehavior href="/other-page">
    <a>Go to other page</a>
  </Link>

       
</main>
  )
}