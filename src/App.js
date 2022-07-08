import React, { useRef } from 'react';
import './style.css';

export default function App() {
  const issue6 = useRef(null);
  const issue5 = useRef(null);
  const issue4 = useRef(null);
  const issue3 = useRef(null);
  const issue2 = useRef(null);
  const issue1 = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <nav className="nav">
        <a href="/" className="site-title">
          Backstage Talks
        </a>
        <ul>
          <li onClick={() => scrollToSection(issue6)} className="link">
            Issue 6
          </li>
          <li onClick={() => scrollToSection(issue5)} className="link">
            Issue 5
          </li>
          <li onClick={() => scrollToSection(issue4)} className="link">
            Issue 4
          </li>
          <li onClick={() => scrollToSection(issue3)} className="link">
            Issue 3
          </li>
          <li onClick={() => scrollToSection(issue2)} className="link">
            Issue 2
          </li>
          <li onClick={() => scrollToSection(issue1)} className="link">
            Issue 1
          </li>
        </ul>
      </nav>
      {/* Hero */}
      <div className="hero">
        <p>
          <b>
            Backstage Talks is a magazine of casual, but in depth dialogues on
            design and business. Our decisions shape and influence this complex
            world—to have a chance to make the right ones, we need to talk.
          </b>
        </p>
        <p className="copyright">© 2022 Published by studio Milk</p>
        <button>
          <a href="#">info@backstagetalks.com</a>
        </button>
      </div>

      {/* Sections*/}
      <div ref={issue6} className="issue-6">
        <h3>Issue 6</h3>
        <img src="https://backstagetalks.com/img/backstagetalks_cover_issue_6.png" />
        <p>
          <a href="https://brot.sk/collections/magazines/products/backstage-talks-issue-6">
            BUY HERE
          </a>
        </p>
        <p>
          Or in{' '}
          <a href="http://backstagetalks.com/stocklist.php">selected stores.</a>
        </p>
      </div>
      <div ref={issue5} className="issue-5">
        <h3>Issue 5</h3>
        <img src="https://backstagetalks.com/img/backstagetalks_cover_issue_5.png" />
        <p>
          <a href="https://www.bruil.info/product/backstage-talks-5/">
            BUY HERE
          </a>
        </p>
        <p>
          Or in{' '}
          <a href="http://backstagetalks.com/stocklist.php">selected stores.</a>
        </p>
      </div>
      <div ref={issue4} className="issue-4">
        <h3>Issue 4</h3>
        <img src="https://backstagetalks.com/img/backstagetalks_cover_issue_4.png" />
        <p>
          <a href="https://www.bruil.info/product/backstage-talks-4/">
            BUY HERE
          </a>
        </p>
        <p>
          Or in{' '}
          <a href="http://backstagetalks.com/stocklist.php">selected stores.</a>
        </p>
      </div>
      <div ref={issue3} className="issue-3">
        <h3>Issue 3</h3>
        <img src="https://backstagetalks.com/img/backstagetalks_cover_issue_3.png" />
        <p>
          <a href="https://www.bruil.info/product/backstage-talks-3/">
            BUY HERE
          </a>
        </p>
        <p>
          Or in{' '}
          <a href="http://backstagetalks.com/stocklist.php">selected stores.</a>
        </p>
      </div>
      <div ref={issue2} className="issue-2">
        <h3>Issue 2</h3>
        <img src="https://backstagetalks.com/img/backstagetalks_cover2017.png" />
        <p>
          <a href="https://www.bruil.info/product/backstage-talks-2/">
            BUY HERE
          </a>
        </p>
        <p>
          Or in{' '}
          <a href="http://backstagetalks.com/stocklist.php">selected stores.</a>
        </p>
      </div>
      <div ref={issue1} className="issue-1">
        <h3>Issue 1</h3>
        <img src="https://backstagetalks.com/img/backstagetalks_cover2016_n.png" />
        <p>Issue #1 is sold out.</p>
        <p>
          If you are lucky, you may get the last pieces in{' '}
          <a href="http://backstagetalks.com/stocklist.php">selected stores.</a>
        </p>
      </div>
    </div>
  );
}
