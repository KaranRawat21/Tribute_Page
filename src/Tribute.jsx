import React from 'react'

function Tribute() {
  return (
    <div className='bg-[url("/images/bg.jpg")] bg-cover h-screen flex justify-end'>
      <div className='w-[1100px] h-full'>
        <div className='flex justify-center'>
          <h1 className='text-[40px] font-bold text-yellow-400 w-[60%] text-center mb-10'>A Tribute to the Nightingale of India: Lata Mangeshkar</h1>
        </div>
        <div className='flex'>
          <div className='w-[60%]'>
            <ul className='font-semibold flex flex-col gap-8'>
              <li>Lata Mangeshkar, often hailed as the "Nightingale of India," was more than just a legendary playback singer; she was the voice of an entire nation. Born on September 28, 1929, her voice transcended generations, touching the hearts of millions across the globe. With a career spanning over seven decades, Lataji's ethereal voice graced over 25,000 songs in more than 36 languages, making her one of the most prolific and celebrated singers in the world.</li>
              <li>Her songs, imbued with deep emotion and soul, have been an integral part of Indian cinema, resonating with audiences in moments of joy, sorrow, love, and patriotism. From timeless classics like "Aayega Aanewala" and "Lag Jaa Gale" to the stirring "Ae Mere Watan Ke Logon," Lataji's voice has left an indelible mark on Indian culture and history.</li>
              <li>Beyond her unparalleled contributions to music, Lata Mangeshkar was a symbol of grace, humility, and dedication. She broke barriers in a male-dominated industry, earning countless accolades, including the Bharat Ratna, India's highest civilian honor.</li>
              <li>Her passing on February 6, 2022, marked the end of an era, but her legacy continues to live on in the hearts of her fans. Lataji's voice will forever be a beacon of the rich cultural heritage of India, a reminder of the power of music to unite and uplift. Her melodies will continue to echo in the corridors of time, ensuring that the Nightingale's song never truly fades away.</li>
            </ul>
          </div>
          <div className='w-[40%] flex justify-center items-center'>
            <img src="/images/lata_mangeshkar.png" alt="Lata Mangeshkar" className='w-[350px] rounded-lg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tribute