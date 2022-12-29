import React, { useState } from 'react';
import styles from '../styles/App.module.scss'

const items = [
  {
    id: 0,
    word: 'だいじょうぶ',
    image: 'https://pbs.twimg.com/media/FejlYgRVsAAbKxY.jpg:medium',
    src: 'pic.twitter.com/YMYv8PYbX6'
  },
  {
    id: 1,
    word: 'すみません',
    image: 'https://pbs.twimg.com/media/FejnL6DUcAEKWLz.jpg:medium',
    src: 'pic.twitter.com/LfpCuQtsC0'
  },
];
const App = () => {
  const [url, setUrl] = useState('https://pbs.twimg.com/media/FejnL6DUcAEKWLz.jpg:medium');
  const [text, setText] = useState('すみません');
  const [src, setSrc] = useState('pic.twitter.com/YMYv8PYbX6');
  const [isOpened, setIsOpened] = useState(false);

  const refreshBtr = () => {
    const item = items[Math.floor(Math.random() * items.length)];
    setUrl(item.image);
    setSrc(item.src);
    setText(item.word);
    return ('');
  };
  const selectBtr = (id) => {
    const item = items[id];
    setUrl(item.image);
    setSrc(item.src);
    setText(item.word);
    setIsOpened(false);
    return ('');
  };
  const switchSidebar = () => {
    setIsOpened(!isOpened);
  };
  const imgList = items.map((item) => {
    <img src={item.image} onClick={() => selectBtr(item.id)} className={styles.select_img} key={item.id} />
  })

  return (
    <>
      <div style={{zIndex: 2}}>
        <span>
          <button onClick={switchSidebar}
                  className={`${styles.select_arrow} ${styles.plain_button} ${isOpened ? styles.arrow_slide : ''} ${styles.btrcolor}`}>
            <span className="fa-stack fa-2x">
              <i className="far fa-square fa-stack-2x"></i>
              {isOpened ? (
                  <i className={'fa fa-stack-1x fa-chevron-left'}></i>
                ) : (
                  <i className={'fa fa-stack-1x fa-chevron-right'}></i>
                )
              }
            </span>
          </button>
        </span>
        <div className={`${styles.sidebar} ${isOpened ? styles.slide_out : ''}`}>
          { imgList }
        </div>
      </div>
      <div className="container">
        <header>
          <h1 className="has-text-centered">
            <button onClick={refreshBtr}
                    className={`${styles.plain_button} title is-2 m-5 mb-2 has-text-weight-bold ${styles.btrcolor}`}>
              btr
            </button>
          </h1>
        </header>
        <main className="block p-4 m-4 columns is-mobile is-centered is-3">
          <div className="column is-three-quarters-desktop is-two-thirds-tablet  is-full-mobile card">
            <div className="card-image">
              <figure className="image">
                <img src={url} />
              </figure>
            </div>
            <div className="card-content columns is-centered is-mobile m-5">
              <span className="icon-text is-size-3">
                <span>{text}&nbsp;</span>
                <span className="icon  is-size-4">
                  <i className="fa fa-chevron-right"></i>
                </span>
                &nbsp;&nbsp;
              </span>
              <a href={`https://twitter.com/intent/tweet?hashtags=ぼっち・ざ・ろっく！&url=http://btr.vercel.app&text=${src}`}
                 className="icon-text is-size-4" style={{color: '#1da1f2'}}
                 target="_blank" rel="noopener noreferrer">
                <span className="icon">
                  <i className="fab fa-twitter"></i>
                </span>
                <span>tweet</span>
              </a>
            </div>
          </div>
        </main>
        <footer className="m-5">
          <div className="columns is-mobile is-flex-direction-column is-align-items-center">
            <a href="https://www.amazon.co.jp/dp/B07N3NRSKF" target="_blank" rel="noopener noreferrer"
               className="column">
              <img src="https://m.media-amazon.com/images/P/B07N3NRSKF.01._SCLZZZZZZZ_SX500_.jpg"
                   style={{height : '250px'}} />
            </a>
            <h3>
              <a href="https://www.amazon.co.jp/dp/B07N3NRSKF" target="_blank" rel="noopener noreferrer"
                 className={'column has-text-weight-bold is-size-4 ' + styles.btrcolor}>
                BOCCHI THE ROCK!
              </a>
            </h3>
          </div>
        </footer>
      </div>
    </>
  )
}

export default App
