import ContactInput from './molecule/contact.molecule'

const Contact= () => {
  return (
    <section id='project' className={`sm:px-28 px-10 bg-[#243642] sm:h-[100vh] h-auto w-[100vw] py-10`}>
        <h1 className='font-extralight text-4xl uppercase text-center text-white mb-5'>Contact</h1>

        {/* form */}
        <form className='flex flex-col items-start justify-start gap-5' action="">
            <ContactInput title='Your Name' required={true} placeholder='Austin Kleon'/>
            <ContactInput title='Company Name' required={false} placeholder='Galapagous'/>
            <ContactInput title='Your Email' required={true} placeholder='waqas@galapagous.com'/>
            <div className='text-white flex flex-col items-start justify-start'>
                <label className='text-xl uppercase font-thin' htmlFor="message">Your Message</label>
                <textarea className='p-2 bg-inherit border-b-2 outline-none text-lg font-thin w-[400px]' placeholder='Your Message'/>
            </div>
            <button className='text-lg font-thin hover:bg-white hover:text-[#243642] px-8 py-2 border-[1px] border-white text-white'>Send</button>
        </form>
    </section>
  )
}

export default Contact