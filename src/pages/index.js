import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.scss'
import config from '../configs/config.yaml'

const App = () => {
  const [url, setUrl] = useState('');
  const [text, setText] = useState('');
  const [src, setSrc] = useState('');
  const [isOpened, setIsOpened] = useState(false);

  const refreshBtr = () => {
    const item = config.items[Math.floor(Math.random() * config.items.length)];
    setUrl(item.image);
    setSrc(item.src);
    setText(item.word);
    return ('');
  };
  const selectBtr = (id) => {
    const item = config.items.find(v => v.id == id);
    setUrl(item.image);
    setSrc(item.src);
    setText(item.word);
    return ('');
  };
  const switchSidebar = () => {
    setIsOpened(!isOpened);
  };
  useEffect(() => refreshBtr(), []);
  const imgList = config.items.map((item) => {
    return <img src={`${item.image}:small`} onClick={() => selectBtr(item.id)} className={styles.select_img} key={item.id} />
  });

  return (
    <>
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
                <img src={`${url}:medium`} />
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
              <a href={`https://twitter.com/intent/tweet?hashtags=ぼっち・ざ・ろっく！&url=${config.appurl}&text=${src}`}
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
      <div>
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
        <div className={`${styles.sidebar} ${isOpened ? styles.slide_out : ''}`}>
          { imgList }
        </div>
      </div>
    </>
  )
}

export default App
