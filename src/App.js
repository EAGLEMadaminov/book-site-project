import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import { BsInstagram } from 'react-icons/bs'
import image from './images/Vector.png'
import JohnBook from './images/IMAGE.png'
import Atomic from './images/IMAGE(1).png'
import ThreePerson from './images/IMAGE(2).png'
import Scanner from './images/IMAGE(3).png'
import FloverBook from './images/IMAGE(4).png'
import Image5 from './images/IMAGE(5).png'
import LogoIamge1 from './images/companilogo-image1.png'
import LogoIamge2 from './images/companilogo-image2.png'
import LogoIamge3 from './images/companilogo-image3.png'
import LogoIamge4 from './images/companilogo-image4.png'
import SearcleImage1 from './images/IMAGE(6).png'
import SearcleImage2 from './images/IMAGE(7).png'
import SearcleImage3 from './images/IMAGE(8).png'
import NineImage1 from './images/IMAGE.jpg'
import NineImage2 from './images/IMAGE(1).jpg'
import NineImage3 from './images/IMAGE(2).jpg'
import React from 'react'
function App() {
  return (
    <div className='app'>
      <section className='section-one'>
        <div className='header'>
          <div className='logo'>
            <img src={image} alt='Book image' />
            <h2>Pages</h2>
          </div>
          <ul className='social-list'>
            <li className='social-link first-icon'>
              <a href='#' className='social-icon'>
                <FaFacebookF />
              </a>
            </li>
            <li className='social-link'>
              <a href='#' className='social-icon'>
                <IoLogoTwitter />
              </a>
            </li>
            <li className='social-link'>
              <a href='#' className='social-icon'>
                <FaLinkedinIn />
              </a>
            </li>
          </ul>

          <ul className='site-list'>
            <li className='site-item'>
              <a href='#' className='site-link active'>
                Home
              </a>
            </li>
            <li className='site-item'>
              <a href='#' className='site-link'>
                About
              </a>
            </li>
            <li className='site-item'>
              <a href='#' className='site-link'>
                Pages
              </a>
            </li>
            <li className='site-item'>
              <a href='#' className='site-link'>
                Contact Us
              </a>
            </li>
            <li className='site-item'>
              <a href='#' className='site-link'>
                <FaShoppingCart className='shooping-cart' />
              </a>
            </li>
          </ul>
          <button type='button' className='order-btn'>
            Order Today
          </button>
        </div>
        <div className='one-body container'>
          <div className='header-left-info'>
            <div className='welcome-box'>
              <span className='header-tiny-line'></span>
              <p>Welcome to Pages!!!</p>
            </div>
            <h1 className=''>Your book from the best writer</h1>
            <p>
              We believe that reading books are essential to a healthy culture.
            </p>
            <p>They’re where authors can connect with readers.</p>
            <div className='one-body-btn'>
              <button type='button' className='body-order-btn order-btn'>
                order today
              </button>
              <a href='#'>Read free demo</a>
            </div>
            <div className='body-one-add-info'>
              <div className='add-info'>
                <p>
                  <span className='searcle'></span>
                  Pages:
                </p>
                <span className='numbers-size'>250pages</span>
              </div>
              <div className='add-info'>
                <p>
                  <span className='searcle'></span>
                  Length:
                </p>
                <span className='numbers-size'>10 Hours</span>
              </div>
              <div className='add-info'>
                <p>
                  <span className='searcle'></span>
                  Rating:
                </p>
                <span className='numbers-size'>4.5/5 305 ratings</span>
              </div>
            </div>
          </div>
          <div className='header-right'>
            <img src={JohnBook} alt='' />
          </div>
        </div>
      </section>
      <section className='section-two'>
        <div className='container'>
          <h1>The Author’s Book</h1>
          <span className='section-head-line'></span>
          <div className='two-books'>
            <div className='section-two-body'>
              <img src={Atomic} alt='Atomic ones book' />
            </div>
            <div className='section-two-body'>
              <h2>Atomic One’s</h2>
              <p className='book-price'>$ 13.84 USD</p>
              <p className='book-info'>
                As the book contains theoretical content as well as solved
                questions.
              </p>
              <p className='two-print-book'>
                <span></span>Printed Book
              </p>
              <button className='book-order-btn'>order now</button>
            </div>
            <div className='section-two-body'>
              <img src={JohnBook} alt='' />
            </div>
            <div className='section-two-body'>
              <h2>The Dark Light</h2>
              <p className='book-price'>$ 86.11 USD</p>
              <p className='book-info'>
                As the book contains theoretical content as well as solved
                questions.
              </p>
              <p className='two-print-book'>
                <span></span>Printed Book
              </p>
              <button className='book-order-btn'>order now</button>
            </div>
          </div>
        </div>
      </section>
      <section className='section-three'>
        <div className='container three-body'>
          <div className='three-left'>
            <div className='three-image-box'>
              <img src={ThreePerson} alt='' />
            </div>
          </div>
          <div className='three-right-info'>
            <h2>About the Author</h2>
            <span className='line-auth'></span>
            <p>
              We believe that bookstores are essential to a healthy culture.
              They’re where authors can connect with readers, where we discover
              new writers, where children get hooked on the thrill of reading
              that can last a lifetime.
            </p>
            <div className='three-number-info'>
              <div className='number-info-auth'>
                <h2>02</h2>
                <p>Books published</p>
              </div>
              <div className='number-info-auth-line'></div>
              <div className='number-info-auth'>
                <h2>4.5</h2>
                <p>User reviews</p>
              </div>
              <div className='number-info-auth-line'></div>
              <div className='number-info-auth'>
                <h2>04</h2>
                <p>Best seller awards</p>
              </div>
            </div>
            <div className='scan-box'>
              <img src={Scanner} alt='' />
              <div className='auth-social-info'>
                <p className='auth-name'>John Abraham , Ph.d</p>
                <p>
                  <span>Mail:</span>johnabraham@gmail.com
                </p>
                <p>
                  <span>Phone:</span>(+2) 123 545 9000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-four'>
        <div className='container'>
          <h1>Trusted By The Best</h1>
          <span className='section-head-line'></span>
          <div className='four-body'>
            <div className='four-item'>
              <img src={LogoIamge1} alt='logo image' />
              <h3>Amazen corp</h3>
              <p>
                They has been helping readers, music lovers, and videophiles
                find quality material.
              </p>
            </div>
            <div className='four-item'>
              <img src={LogoIamge2} alt='logo image' />
              <h3>Megan books</h3>
              <p>
                We help physical bookstores manage their overstock to the book
                inventory.
              </p>
            </div>
            <div className='four-item'>
              <img src={LogoIamge3} alt='logo image' />
              <h3>Megank</h3>
              <p>
                Bookstore serving up the full spectrum of Black literature and
                wine black books.
              </p>
            </div>
            <div className='four-item'>
              <img src={LogoIamge4} alt='logo image' />
              <h3>Urban store</h3>
              <p>
                We also carry the latest records, issues of all of your favorite
                comic books.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='section-five'>
        <div className='container five-body'>
          <div className='five-left'>
            <h2>Get Book Copy Today!</h2>
            <span className='five-line'></span>
            <p>
              We believe that bookstores are essential to a healthy culture.
              They’re where authors can connect with readers.
            </p>
            <button type='button' className='five-order-btn'>
              <a href='#'>Order Today</a>
            </button>
          </div>
          <div className='five-right'>
            <img src={FloverBook} alt='' />
          </div>
        </div>
      </section>
      <section className='section-six'>
        <div className='container'>
          <h1>What Will You Learn?</h1>
          <span className='section-head-line'></span>
          <div className='six-body'>
            <div className='six-left'>
              <div className='six-left-box'>
                <div className='six-mini'>
                  <span>01</span>
                  <p>
                    Use HDFS & Map Reduce for storing & analyzing data at scale.
                  </p>
                </div>
                <div className='six-mini'>
                  <span>02</span>
                  <p>
                    Consume streaming data using Spark Streaming, Flink, and
                    Storm.
                  </p>
                </div>
              </div>
              <div className='six-left-box'>
                <div className='six-mini'>
                  <span>03</span>
                  <p>
                    Choose an appropriate data storage technology for your
                    application
                  </p>
                </div>
                <div className='six-mini'>
                  <span>04</span>
                  <p>
                    Analyze non-relational data using HBase, Cassandra, and
                    MongoDB.
                  </p>
                </div>
              </div>
            </div>
            <div className='six-right'>
              <img src={Image5} alt='girl read book' />
            </div>
          </div>
        </div>
      </section>
      <section className='section-seven'>
        <div className='container seven-container'>
          <h1>Enhance knowledge & Vision</h1>
          <span className='section-head-line'></span>
          <div className='seven-body'>
            <div className='seven-boxes seven-boxes-top'>
              <div className='seven-box'>
                <h3>Chapter-1 Get Started Intro</h3>
                <p>
                  You can double your knowledge by reading this ever needed book
                  that can last a lifetime.
                </p>
                <div className='size-boxs'>
                  <div className='size-box'>
                    <span></span>
                    <p>Pages :</p>
                    <dd>106pages</dd>
                  </div>
                  <div className='size-box'>
                    <span></span>
                    <p>Length :</p>
                    <dd>2 Hours</dd>
                  </div>
                </div>
              </div>
              <div className='seven-box'>
                <h3>Chapter-2 The Roman Culture</h3>
                <p>
                  It will help to improve your life career with the perfect and
                  needed knowledge about your life.
                </p>
                <div className='size-boxs'>
                  <div className='size-box'>
                    <span></span>
                    <p>Pages :</p>
                    <dd>180pages</dd>
                  </div>
                  <div className='size-box'>
                    <span></span>
                    <p>Length :</p>
                    <dd>3 Hour</dd>
                  </div>
                </div>
              </div>
            </div>
            <div className='seven-boxes'>
              <div className='seven-box'>
                <h3>Chapter-3 How They Servived</h3>
                <p>
                  We wanted to create an easy, convenient way for you to get
                  your books & support.
                </p>
                <div className='size-boxs'>
                  <div className='size-box'>
                    <span></span>
                    <p>Pages :</p>
                    <dd>250pages</dd>
                  </div>
                  <div className='size-box'>
                    <span></span>
                    <p>Length :</p>
                    <dd>4 Hours</dd>
                  </div>
                </div>
              </div>
              <div className='seven-box'>
                <h3>Chapter-4 The End Of Romans</h3>
                <p>
                  Promote your book via Pages shop to support your writing &
                  reading career.
                </p>
                <div className='size-boxs'>
                  <div className='size-box'>
                    <span></span>
                    <p>Pages :</p>
                    <dd>175pages</dd>
                  </div>
                  <div className='size-box'>
                    <span></span>
                    <p>Length :</p>
                    <dd>2 Hours</dd>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='seven-footer'>
            <button className='seven-footer-btn'>
              <a href='#'>Start a 15-Days Free Trail</a>
            </button>
            <p>Short description about each chapter</p>
            <p>
              <a href='#' className='seven-question'>
                Have any questions?
              </a>
              Contact us
            </p>
          </div>
        </div>
      </section>
      <section className='section-eight'>
        <div className='container eight-body'>
          <div className='eight-left-info'>
            <h2>Words From Our</h2>
            <h2>Readers</h2>
            <span className='eight-line'></span>
            <p>
              We believe that bookstores are essential to a healthy culture.
              They’re where authors can connect with readers, where we discover
              new writers, where children get hooked on the thrill of reading
              that can last a lifetime.
            </p>
            <div className='mini-searcles'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div className='left-single-box'>
                <span></span>
              </div>{' '}
              <dd>(4.8/5)</dd>
              <p>Overall Customer Ratings</p>
            </div>
          </div>
          <div className='eight-right'>
            <div className='eight-image-box'>
              <div className='eight-single-box'>
                <div className='eight-auth-info'>
                  <div className='searcle-img'>
                    <img src={SearcleImage1} alt='searcle image 1' />
                  </div>
                  <div className='searcle-info'>
                    <h3>James Williams</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className=' right-single-box'></span>
                  </div>
                </div>
                <q> Great Books Collections</q>
                <p>
                  I was searching this book for many years and I was happy that
                  I could find it here.
                </p>
              </div>
              <div className='eight-single-box'>
                <div className='eight-auth-info'>
                  <div className='searcle-img'>
                    <img src={SearcleImage2} alt='searcle image 2' />
                  </div>
                  <div className='searcle-info'>
                    <h3>Chris Adams</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className='single-searcle'></span>
                  </div>
                </div>
                <q> Perfect Response Author</q>
                <p>
                  I had a question about the book and the author response was
                  great & comfort.
                </p>
              </div>
            </div>
            <div className='eight-image-box'>
              <div className='eight-single-box'>
                <div className='eight-auth-info'>
                  <div className='searcle-img'>
                    <img src={SearcleImage3} alt='searcle image 3' />
                  </div>
                  <div className='searcle-info'>
                    <h3>Angeline Flora</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className='right-single-box '></span>
                  </div>
                </div>
                <q> Creative Writing Skill</q>
                <p>
                  Sent an email after to books arrived to ask about the author &
                  I received a reply.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-nine'>
        <h1>Articles & Resources</h1>
        <span className='section-head-line'></span>
        <div className='container'>
          <div className='nine-boxes'>
            <div className='nine-body-info'>
              <img src={NineImage1} alt='image' />
              <h3>Significant reading has more info number</h3>
              <p>
                Override the digital divide with additional clickthroughs from
                DevOps for real-time schemas.
              </p>
              <div className='nine-box-link'>
                <a href='#'>Readmore</a>
                <p>October 6, 2021</p>
              </div>
            </div>
            <div className='nine-body-info'>
              <img src={NineImage2} alt='image' />
              <h3>Many variations of pass majority have suffered</h3>
              <p>
                Capitalize on low-hanging fruit to identify a ballpark
                value-added activity to beta test.
              </p>
              <div className='nine-box-link'>
                <a href='#'>Readmore</a>
                <p>October 6, 2021</p>
              </div>
            </div>
            <div className='nine-body-info'>
              <img src={NineImage3} alt='image' />
              <h3>Words which don’t look even slightly believable</h3>
              <p>
                Podcasting operational change management inside of workflows to
                establish a framework.
              </p>
              <div className='nine-box-link'>
                <a href='#'>Readmore</a>
                <p>October 6, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='section-ten'>
        <div className='container ten-body'>
          <h1>Get The Best Updates</h1>
          <span className='section-head-line'></span>
          <p>
            Subscribe with your mail id to know the current update in book
            edition at your fingertip with in a minute.
          </p>
          <div className='ten-btn'>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your Email ID...'
            />
            <button className='ten-btn'>Subscribe</button>
          </div>
        </div>
      </section>
      <section className='section-footer'>
        <div className='footer'>
          <div className='footer-box'>
            <div className='footer-social-icon'>
              <img src={image} alt='' />
              <h3>Pages</h3>
            </div>
            <div className='footer-social-icon'>
              <a href='#'>
                <FaFacebookF />
              </a>
              <a href='#'>
                <IoLogoTwitter />
              </a>
              <a href='#'>
                <FaLinkedinIn />
              </a>
              <a href='#'>
                <BsInstagram />
              </a>
            </div>
          </div>
          <div className='footer-box'>
            <h2>Explore</h2>
            <div className='footer-link'>
              <span></span>
              <span></span>
              <span></span> <a href='#'>Home</a>
            </div>
            <div className='footer-link'>
              <span></span>
              <span></span>
              <span></span>
              <a href='#'>About</a>
            </div>
            <div className='footer-link'>
              <span></span>
              <span></span>
              <span></span>
              <a href='#'>Articles</a>
            </div>
            <div className='footer-link'>
              <span></span>
              <span></span>
              <span></span>
              <a href='#'>Our Store</a>
            </div>
            <div className='footer-link'>
              <span></span>
              <span></span>
              <span></span>
              <a href='#'>Contact Us</a>
            </div>
          </div>
          <div className='footer-box'>
            <h2>Utility Pages</h2>
            <div className='footer-link'>
              <span></span>
              <span></span>
              <span></span> <a href='#'>Style Guide</a>
            </div>
            <div className='footer-link'>
              <span></span>
              <span></span>
              <span></span>
              <a href='#'>404 Not Found</a>
            </div>
            <div className='footer-link'>
              <span></span>
              <span></span>
              <span></span>
              <a href='#'>Password Protected</a>
            </div>
            <div className='footer-link'>
              <span></span>
              <span></span>
              <span></span>
              <a href='#'>Licenses</a>
            </div>
            <div className='footer-link'>
              <span></span>
              <span></span>
              <span></span>
              <a href='#'>Changelog</a>
            </div>
          </div>
          <div className='footer-box'>
            <h2>Keep in Touch</h2>
            <div className='footer-right-box'>
              <div className='address-box'>
                <b>Address:</b>
                <b className='mail'>Mail:</b>
                <b>Phone:</b>
              </div>
              <div className='address-box'>
                <p>24A Kingston St, Los Vegas NC 28202, USA.</p>
                <p>support@pages.com</p>
                <p>(+22) 123 - 4567 - 900</p>
              </div>
            </div>
          </div>
        </div>
        <div className='last-footer-info'>
          <p>© Drafted by VictorFlow - Powered by Webflow</p>
        </div>
      </section>
    </div>
  )
}
export default App
