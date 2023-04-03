import Image from 'next/image';


const PeppiStart = () => {
  return (
    <div className='center-image'>
      <Image src="/images/MASSIVE_PEPPI.svg" alt="My SVG Image" width={30} height={30}/>
      <style jsx>{`
      .center-image{
        display: block;
        margin: 0 auto;
      }
      `}</style>
    </div>
 
  )
}

export default PeppiStart;
