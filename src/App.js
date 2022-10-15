import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
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
import React from 'react'
function App() {
  return (
    <div className='app'>
      <section className='section-one'>
        <div className='header'>
          <div className='logo'>
            <img src={image} alt='Book image' />
            <h1>Pages</h1>
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
        <div className='container'>
          <h1>Enhance knowledge & Vision</h1>
          <span className='section-head-line'></span>
          <div className='seven-body'>
            <div className='seven-box'>
              <h3>Chapter-1 Get Started Intro</h3>
              <p>
                You can double your knowledge by reading this ever needed book
                that can last a lifetime.
              </p>
              <div className='size-boxs'>
                <div className='size-box'>
                  <span></span>
                  <p></p>
                </div>
                <div className='size-box'>
                  <span></span>
                  <p></p>
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
                  <p></p>
                </div>
                <div className='size-box'>
                  <span></span>
                  <p></p>
                </div>
              </div>
            </div>
            <div className='seven-box'>
              <h3>Chapter-3 How They Servived</h3>
              <p>
                We wanted to create an easy, convenient way for you to get your
                books & support.
              </p>
              <div className='size-boxs'>
                <div className='size-box'>
                  <span></span>
                  <p></p>
                </div>
                <div className='size-box'>
                  <span></span>
                  <p></p>
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
                  <p></p>
                </div>
                <div className='size-box'>
                  <span></span>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default App
