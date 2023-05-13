import { useEffect } from 'react'
import gsap from 'gsap'
import Footer from "components/Footer"
import Header from "components/Header"
import ContactForm from "components/ContactForm.jsx"

export default function Contact() {

	useEffect(() => {
		gsap.to('.main-image', { y: -20, duration: 1.5, repeat: -1, yoyo: true })
	}, [])


  return (
    <>
      <Header />
      <section className="px-4 py-8 pb-16">
          <div className="flex mt-6 justify-around">
            <div className="sm:w-1/3 pb-8">
              <h2 className="text-brand-green text-4xl font-bold mb-6 mt-4">
                Contactanos!
              </h2>
              <ContactForm />
            </div>
            
						<img 
							src="/contact.svg" 
							alt="contact.icon" 
							className="main-image sm:block hidden w-2/6 mr-4" />
          </div>
      </section>
      <Footer />
    </>
  );
}
