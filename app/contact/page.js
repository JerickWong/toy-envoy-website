import Navbar from "@/components/Navbar"
import ContactForm from "@/components/ContactForm"

export default function Contact() {
  return (
    <div className='max-h-screen min-h-screen flex flex-col'>
      <Navbar />
      <section className="flex min-h-screen justify-between">
        <div className="flex flex-col justify-start items-center max-w-half-screen w-full mt-44 gap-3">
          <div className="space-y-4 font-montserrat">
            <h1 className="text-4xl italic font-bold dark:text-white">Are you interested?</h1>
            <p>Send us your contact information or</p>
            <p>Feel free to email us at insertemail@email.com!</p>
          </div>
        </div>
        <hr className="w-px h-screen inline-block bg-slate-950"></hr>
        <div className="flex flex-col justify-start items-center max-w-half-screen w-full mt-14 gap-5">
          {/* <form>
            <h1 className="text-4xl">CONTACT INFORMATION</h1>
            <input type="text" placeholder="Name"></input>
            <input type="email" placeholder="Email"></input>
            <select></select>
            <textarea id="message" rows="4" class="block p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message..."></textarea>
            <button type="button" class="button-interested font-montserrat">Submit</button>
          </form> */}
          <ContactForm />
        </div>
      </section>
    </div>
  )
}