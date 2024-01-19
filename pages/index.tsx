import Head from "next/head";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CodeHype</title>
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="mediaqueries.css" />
      </Head>

      {/* <!-- top banner  --> */}
      <div className="top-banner">
      <div className="container">
        <div className="small-bold-text banner-text">
          <a
            href="#"
            className="small-banner-text"
            id="top-banner-text"
            >📣 Join our telegram channel for free coding resources →</a>
           
        </div>
        {/* nav bar */}
        <nav>
      <div className="container main-nav flex">
        <a href="#" className="company-logo">
          <img src="Images/CodeHype.svg" alt="company logo" />
        </a>
        <div className="nav-links" id="nav-links">
          <ul className="flex">
            <li>
              <a href="#" className="hover-link">Products</a>
            </li>
            <li>
              <a href="#" className="hover-link">Customer</a>
            </li>
            <li>
              <a href="#" className="hover-link">Pricing</a>
            </li>
            <li>
              <a href="#" className="hover-link">Resources</a>
            </li>
            <li>
              <a href="#" className="hover-link secondary-button">Sign in</a>
            </li>
            <li>
              <a href="#" className="hover-link primary-button">Sign up</a>
            </li>
          </ul>
        </div>
        <a href="#" className="nav-toggle hover-link" id="nav-toggle"
          ><i className="fa-solid fa-bars"></i></a>
      </div>
    </nav>
    {/* <!-- header  --> */}
    <header>
      <div className="container header-section flex">
        <div className="header-left">
          <h1>Design confidently</h1>
          <p>
            UsabilityHub is a remote user research platform that takes the
            guesswork out of design decisions by validating them with real
            users.
          </p>
          <a href="#" className="primary-button get-started-button">Get Started</a>
        </div>
        <div className="header-right">
            <a href="https://ibb.co/M6QzkkT"><img src="https://i.ibb.co/6BLK00h/asset-2.jpg" alt="asset-2"/></a>
        </div>
      </div>
    </header>
    {/* <!-- companies section  --> */}

    <section className="companies-section">
      <div className="container">
        <div className="small-bold-text companies-header">
          The world’s best companies rely on UsabilityHub to make better design
          decisions.
        </div>
        <div className="logos flex">
        <a className="logo" href="https://ibb.co/cv59THC"><img className="logo" src="https://i.ibb.co/4fyLNGY/asset-0.png" alt="asset-0" /></a>
      
          <img className="logo" src="/Images/asset 5.png" alt="company logo" />
          <img className="logo" src="/Images/asset 6.png" alt="company logo" />
          <img className="logo" src="/Images/asset 7.png" alt="company logo" />
          <img className="logo" src="/Images/asset 8.svg" alt="company logo" />
          <img className="logo" src="/Images/asset 9.png" alt="company logo" />
        </div>
      </div>
    </section>
    {/* <!-- features section  --> */}

     <section  className="features-section">
      <div  className="container">
        <div  className="features-header">
          <h2>Your user research Swiss Army knife</h2>
          <a href="#"  className="secondary-button"
            >See all features <i  className="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div  className="features-area flex">
          <div  className="features-card flex">
            <img src="/Images/asset 11.svg" alt="card sorting" />
            <h3>Card Sorting</h3>
            <p>Discover how people group and label information.</p>
            <a href="#"  className="secondary-button"
              >Learn More <i  className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div  className="features-card flex">
            <img src="/Images/asset 13.svg" alt="card sorting" />
            <h3>Prototype tests</h3>
            <p>Discover how people navigate your Figma prototypes.</p>
            <a href="#"  className="secondary-button"
              >Learn More <i  className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div  className="features-card flex">
            <img src="/Images/asset 14.svg" alt="card sorting" />
            <h3>First click tests</h3>
            <p>Test interaction with first click and navigation tests.</p>
            <a href="#"  className="secondary-button"
              >Learn More <i  className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div  className="features-card flex">
            <img src="/Images/asset 15.svg" alt="card sorting" />
            <h3>Design surveys</h3>
            <p>Get feedback on images, videos or audio files.</p>
            <a href="#"  className="secondary-button"
              >Learn More <i  className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div  className="features-card flex">
            <img src="/Images/asset 16.svg" alt="card sorting" />
            <h3>Preference tests</h3>
            <p>Find out which designs users prefer and why.</p>
            <a href="#"  className="secondary-button"
              >Learn More <i  className="fa-solid fa-arrow-right-long"></i></a>
          </div>
          <div  className="features-card flex">
            <img src="/Images/asset 17.svg" alt="card sorting" />
            <h3>Five second tests</h3>
            <p>Test comprehensibility by measuring first impressions.</p>
            <a href="#"  className="secondary-button"
              >Learn More <i  className="fa-solid fa-arrow-right-long"></i></a>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- big feature section  --> */}

    <section className="big-feature-section">
      <div className="container flex big-feature-container">
        <div className="feature-img">
          <img src="/Images/asset 18.png" alt="" />
        </div>
        <div className="feature-text flex">
          <h4>Effortless validation for</h4>
          <h3>Design Professionals</h3>
          <p>
            Test interfaces, interaction flows, iconography and more, to help
            you create intuitive and delightful experiences for your users.
          </p>
        </div>
      </div>
    </section>
    <section className="big-feature-section">
      <div className="container flex big-feature-container" id="second-big-feature">
        <div className="feature-img">
          <img src="/Images/asset 21.png" alt="" />
        </div>
        <div className="feature-text flex">
          <h4>Optimisation for</h4>
          <h3>Marketers</h3>
          <p>
            Fine-tune landing pages, messaging, and creative, helping you
            optimise conversion rates on marketing campaigns and product
            launches.
          </p>
        </div>
      </div>
    </section>
    <section className="big-feature-section">
      <div className="container flex big-feature-container">
        <div className="feature-img">
          <img src="/Images/asset 24.png" alt="" />
        </div>
        <div className="feature-text flex">
          <h4>Easier decision making for</h4>
          <h3>Product managers</h3>
          <p>
            Ensure you’re delivering the right features to the right customers
            by validating product concepts with your target audience.
          </p>
        </div>
      </div>
    </section>

    <section className="examples-section">
      <div className="container">
        <div className="examples-header flex">
          <h2 className="examples-heading-text">
            One platform, endless possibilities
          </h2>
          <a href="#" className="secondary-button"
            >See more examples <i className="fa-solid fa-arrow-right-long"></i></a>
        </div>
        <div className="examples-area flex">
          <a href="#" className="examples-card ex-card-img1">
            <h3 className="card-text">
              Can users complete a task in my software interface?
            </h3>
          </a>
          <a href="#" className="examples-card ex-card-img2">
            <h3 className="card-text">
              Can users find important pages on my website?
            </h3>
          </a>
          <a href="#" className="examples-card ex-card-img3">
            <h3 className="card-text">Is my website's intended audience clear?</h3>
          </a>
          <a href="#" className="examples-card ex-card-img4">
            <h3 className="card-text">
              Do visitors understand what a page is about? Starting from
            </h3>
          </a>
        </div>
      </div>
    </section>
    <section className="cta-section">
      <div className="container flex cta-section-container">
        <h2>Start testing today</h2>
        <p>Take the decision</p>
        <a href="#" className="primary-button">Get Started</a>
      </div>
    </section>

    {/* <!-- footer  --> */}

    <footer>
      <div className="container flex footer-container">
        <a href="#" className="company-logo">
          <img src="/Images/CodeHype.svg" alt="company logo" />
        </a>
        <div className="link-column flex">
          <h4>Product</h4>
          <a href="#" className="hover-link">Overview</a>
          <a href="#" className="hover-link">Pricing</a>
          <a href="#" className="hover-link">CodeHype hub</a>
          <a href="#" className="hover-link">Customers page</a>
          <a href="#" className="hover-link">Status page</a>
        </div>
        <div className="link-column flex">
          <h4>Methodologies</h4>
          <a href="#" className="hover-link">Card sorting</a>
          <a href="#" className="hover-link">Prototype Testing</a>
          <a href="#" className="hover-link">First click tests</a>
          <a href="#" className="hover-link">Preference tests</a>
          <a href="#" className="hover-link">Five second tests</a>
        </div>
        <div className="link-column flex">
          <h4>Resources</h4>
          <a href="#" className="hover-link">Blog</a>
          <a href="#" className="hover-link">Testing guides</a>
          <a href="#" className="hover-link">Research panel</a>
          <a href="#" className="hover-link">Contact us</a>
          <a href="#" className="hover-link">Careers</a>
        </div>
      </div>
    </footer>

    <div className="subfooter">
      <div className="container flex subfooter-container">
        <a href="#" className="hover-link">Privacy Policy</a>
        <a href="#" className="hover-link">Terms & Condition</a>
        <a href="#" className="hover-link">Security Information</a>
        <a href="#" className="hover-link"><i className="fa-brands fa-linkedin"></i></a>
        <a href="#" className="hover-link"
          ><i className="fa-brands fa-square-instagram"></i></a>
      </div>
    </div>
      </div>
    </div>

    </>
  );
}
