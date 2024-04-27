import imgDab from './assets/images/rocketdab.png'
import imgPeace from './assets/images/rocketman.png'
import imgRide from './assets/images/rocketride.png'
import imgLaunch from './assets/images/rocketlaunch.png'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const App = () => {
  const [showMenu, setShowMenu] = useState()

  return (
    <div className='min-h-screen bg-slate-50 dark:bg-black dark:text-white'>
      <header className='sticky top-0 z-10 bg-teal-700 text-white'>
        <section className='mx-auto flex max-w-4xl items-center justify-between p-4'>
          <h1 className='text-3xl font-medium'>
            <a href='#hero'>🚀 Acme Rockets</a>
          </h1>
          {showMenu ? (
            <motion.button
              id='hamburger-button'
              key='open'
              className='w-9 cursor-pointer text-3xl sm:hidden'
              onClick={() => setShowMenu((prevState) => !prevState)}
              initial={{ rotate: '360deg' }}
              animate={{ rotate: 0 }}
              exit={{ rotate: '-360deg' }}
              transition={{ ease: 'easeIn' }}
            >
              &times;
            </motion.button>
          ) : (
            <motion.button
              id='hamburger-button'
              key='close'
              className='w-9 cursor-pointer text-3xl sm:hidden'
              onClick={() => setShowMenu((prevState) => !prevState)}
              initial={{ rotate: '-360deg' }}
              animate={{ rotate: 0 }}
              exit={{ rotate: '360deg' }}
              transition={{ ease: 'easeIn' }}
            >
              &#9776;
            </motion.button>
          )}
          <nav className='hidden space-x-8 text-xl sm:block' aria-label='main'>
            <a href='#rockets' className='hover:opacity-80'>
              Our Rockets
            </a>
            <a href='#testimonials' className='hover:opacity-80'>
              Testimonials
            </a>
            <a href='#contact' className='hover:opacity-80'>
              Contact Us
            </a>
            <a href='#footer' className='hover:opacity-80'>
              Legal
            </a>
          </nav>
        </section>
        <AnimatePresence>
          {showMenu ? (
            <motion.section
              id='mobile-menu'
              className='justify-content-center absolute top-0 mt-[68px] w-full flex-col bg-black text-5xl md:hidden'
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              exit={{ x: '-100vw' }}
              transition={{ ease: 'easeOut' }}
            >
              <nav
                aria-label='mobile'
                className='flex min-h-screen flex-col items-center py-8'
              >
                <a
                  href='#hero'
                  className='w-full py-6 text-center hover:opacity-90'
                  onClick={() => setShowMenu(false)}
                >
                  Home
                </a>
                <a
                  href='#rockets'
                  className='w-full py-6 text-center hover:opacity-90'
                  onClick={() => setShowMenu(false)}
                >
                  Our Rockets
                </a>
                <a
                  href='#testimonials'
                  className='w-full py-6 text-center hover:opacity-90'
                  onClick={() => setShowMenu(false)}
                >
                  Testimonials
                </a>
                <a
                  href='#contact'
                  className='w-full py-6 text-center hover:opacity-90'
                  onClick={() => setShowMenu(false)}
                >
                  Contact Us
                </a>
                <a
                  href='#footer'
                  className='w-full py-6 text-center hover:opacity-90'
                  onClick={() => setShowMenu(false)}
                >
                  Legal
                </a>
              </nav>
            </motion.section>
          ) : null}
        </AnimatePresence>
      </header>
      <main className='mx-auto max-w-4xl'>
        <section
          id='hero'
          className='mb-12 flex min-h-screen scroll-mt-40 flex-col-reverse items-center justify-center gap-8 p-6 sm:flex-row'
        >
          <article className='sm:w-1/2'>
            <h2 className='max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl'>
              We Boldly Go{' '}
              <span className='text-indigo-700 dark:text-indigo-300'>
                Where No Rocket
              </span>{' '}
              Has Gone Before...
            </h2>
            <p className='mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left'>
              We're building rockets for the next century today. From the moon
              to Mars, Jupiter and beyond...
            </p>
            <p className='mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left'>
              Think Acme Rockets.
            </p>
          </article>
          <img
            src={imgDab}
            alt='cartoon of astronaut in dabbing pose standing on a rocket'
            className='w-1/2'
          />
        </section>
        <hr className='mx-auto w-1/2 bg-black dark:bg-white' />
        <section
          id='rockets'
          className='my-12 flex scroll-mt-20 flex-col items-center justify-center p-6 md:my-0 md:min-h-screen md:scroll-mt-0'
        >
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl'>
            Our Rockets
          </h2>
          <ul className='m-y-12 mx-auto flex list-none flex-col items-center gap-8 sm:flex-row'>
            <li className='flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6'>
              <img
                src={imgPeace}
                alt='cartoon of astronaut making peace hand sign sitting on a rocket'
                className='mb-6 w-1/2'
              />
              <h3 className='text-center text-3xl text-slate-900 dark:text-white'>
                Explorer
              </h3>
              <p className='mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block'>
                $
              </p>
              <p className='mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden'>
                Affordable Exploration
              </p>
            </li>
            <li className='flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6'>
              <img
                src={imgRide}
                alt='cartoon of astronaut waving while sitting on a rocket'
                className='mb-6 w-1/2'
              />
              <h3 className='text-center text-3xl text-slate-900 dark:text-white'>
                Adventurer
              </h3>
              <p className='mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block'>
                $$
              </p>
              <p className='mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden'>
                Best Selling Rocket!
              </p>
            </li>
            <li className='flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6'>
              <img
                src={imgLaunch}
                alt='cartoon of rocket launching'
                className='mb-6 w-1/2'
              />
              <h3 className='text-center text-3xl text-slate-900 dark:text-white'>
                Infinity
              </h3>
              <p className='mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block'>
                $$$
              </p>
              <p className='mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden'>
                Luxury Starship
              </p>
            </li>
          </ul>
        </section>
        <hr className='mx-auto w-1/2 bg-black dark:bg-white' />
        <section
          id='testimonials'
          className='my-12 min-h-screen scroll-mt-20 p-6'
        >
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl'>
            Testimonials
          </h2>
          <figure className='my-12'>
            <blockquote className='relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black'>
              <p className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['“'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['”'] dark:text-slate-400 sm:text-3xl">
                Acme has always been there for me. Their Explorer rocket arrived
                in a wooden crate as expected. Life-long customer! A++ shopping
                experience.
              </p>
            </blockquote>
            <figcaption className='text-slate-500:dark:text-slate-400 mt-2 text-right text-xl italic sm:text-2xl'>
              &#8212;Wile E. Coyote, Genius
            </figcaption>
          </figure>
          <figure className='my-12'>
            <blockquote className='relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black'>
              <p className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['“'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['”'] dark:text-slate-400 sm:text-3xl">
                The Acme Adventurer Rocket has thwarted my Illudium Q-36
                Explosive Space Modulator on several occassions.{' '}
                <span className='italic'>This makes me very, very angry!</span>{' '}
                Nevertheless, K-9 and I have awarded Acme the Martian contract
                for space exploration rockets based on Acme's quality and sturdy
                designs.
              </p>
            </blockquote>
            <figcaption className='text-slate-500:dark:text-slate-400 mt-2 text-right text-xl italic sm:text-2xl'>
              &#8212;Marvin The Martian &amp; K-9
            </figcaption>
          </figure>
          <figure className='my-12'>
            <blockquote className='relative rounded-3xl bg-teal-600 py-12 pl-14 pr-8 dark:bg-black'>
              <p className="mt-2 text-left text-2xl text-white before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-white before:opacity-25 before:content-['“'] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-white after:opacity-25 after:content-['”'] dark:text-slate-400 sm:text-3xl">
                I knew I not only wanted &#8212;{' '}
                <span className='italic'>I needed</span> &#8212; Acme's Infinity
                Rocket for my mission in space. Acme delivered in one day!
                Nothing says <q className='italic'>Take me to your leader</q>{' '}
                like Acme's Infinity Rocket! 💯
              </p>
            </blockquote>
            <figcaption className='text-slate-500:dark:text-slate-400 mt-2 text-right text-xl italic sm:text-2xl'>
              &#8212;Buzz Lightyear, Space Ranger
            </figcaption>
          </figure>
        </section>
        <hr className='mx-auto w-1/2 bg-black dark:bg-white' />
        <section id='contact' className='my-12 scroll-mt-20 p-6'>
          <h2 className='mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl'>
            Contact Us
          </h2>
          <form
            action=''
            className='items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl'
          >
            <label htmlFor='subject'>Subject:</label>
            <input
              type='text'
              id='subject'
              name='subject'
              required
              minLength='3'
              maxLength='60'
              placeholder='Your Subject'
              className='w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl'
            />
            <label htmlFor='message'>Message:</label>
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Your Message'
              required
              className='w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl'
            />
            <button className='w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none'>
              Submit
            </button>
          </form>
        </section>
      </main>
      <footer
        id='footer'
        className='min-h-screen bg-teal-700 pt-[68px] text-xl text-white'
      >
        <section className='mx-auto flex max-w-4xl flex-col gap-12 p-6 sm:flex-row sm:justify-between'>
          <address>
            <h2>Acme Rocket-Powered Products, Inc.</h2>
            555 Astro Way
            <br />
            Fairfield, New Jersey 12345-5555
            <br />
            Email:{' '}
            <a href='mailto:inquiries@acmerockets.com'>
              Inquires@AcmeRockets.com
            </a>
            <br />
            Phone: <a href='tel:+15555555555'>(555) 555-5555</a>
          </address>
          <nav aria-label='footer' className='hidden flex-col gap-2 md:flex'>
            <a href='#hero' className='hover:opacity-90'>
              Home
            </a>
            <a href='#rockets' className='hover:opacity-90'>
              Our Rockets
            </a>
            <a href='#testimonials' className='hover:opacity-90'>
              Testimonials
            </a>
            <a href='#contact' className='hover:opacity-90'>
              Contact Us
            </a>
          </nav>
          <div className='flex flex-col sm:gap-2'>
            <p>
              Copyright &copy; <span id='year'>2023</span>
            </p>
            <p>All Rights Reserved</p>
          </div>
        </section>
      </footer>
    </div>
  )
}

export { App }
