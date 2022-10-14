import { FaFacebookF } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaShoppingCart } from 'react-icons/fa'
import image from './images/Vector.png'
import JohnBook from './images/IMAGE.png'
import Atomic from './images/IMAGE(1).png'
import ThreePerson from './images/IMAGE(2).png'
import Scanner from './images/IMAGE(3).png'
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
          <div className='two-header'>
            <h1>The Author’s Book</h1>
            <span></span>
          </div>
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
            <span></span>
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
              <div className='number-info-auth'>
                <h2>4.5</h2>
                <p>User reviews</p>
              </div>
              <div className='number-info-auth'>
                <h2>04</h2>
                <p>Best seller awards</p>
              </div>
            </div>
            <div className='scan-box'>
              <img src={Scanner} alt='' />
              <div className='auth-social-info'>
                <p className='auth-name'></p>
                <p>
                  <span>Mail:</span>background: #1B3764;
                </p>
                <p>
                  <span>Phone:</span>(+2) 123 545 9000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
