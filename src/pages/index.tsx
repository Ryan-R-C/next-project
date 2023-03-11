import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <header id="header">
          <div id="bold-button"></div>
          <div id="links">
            <button className="button"></button>
            <button className="button"></button>
            <button className="button"></button>
            <button className="button"></button>
          </div>
        </header>
        <section id="landing">
          <div id="image"></div>
          <div id="container">
            <div id="text">
              <h1 id="title">
                Lorem ipsum dolor sit amet consectetur.
                </h1>
              <h2 id="subtitle">Lorem ipsum dolor sit.
              </h2>
              <p id="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cum ducimus minima, voluptate officiis commodi!
              </p>
            </div>
            <div id="buttons-container">
              <div id="button-light"></div>
              <div id="button-bold"></div>
            </div>
          </div>
        </section>
        <section id="heroes">
          <div className="hero-item"></div>
          <div className="hero-item"></div>
          <div className="hero-item"></div>
          <div className="hero-item"></div>
        </section>
        <section id="image-grid">
          <div className="image"></div>
          <div className="image"></div>
          <div className="image"></div>
        </section>
        <section id="scroller-grid">
          <div id="text-container">
            <h2 id="title">
              Lorem ipsum dolor sit amet consectetur.
            </h2>
            <p id="description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cum ducimus minima, voluptate officiis commodi!
            </p>
          </div>
          <div id="scroller-container">
            <div id="scroll-item"></div>
            <div id="scroll-item"></div>
            <div id="scroll-item"></div>
            <div id="scroll-item"></div>
          </div>
        </section>
        <section id="vertical-grid">
          <div className="grid-item">
            <div className="text-container">
              <h2 id="title">
                Lorem ipsum dolor sit.
              </h2>
              <p id="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cum ducimus minima, voluptate officiis commodi!
              </p>
            </div>
            <div id="image"></div>
          </div>
          <div className="grid-item">
            <div className="text-container">
              <h2 id="title">
                Lorem ipsum dolor sit.
              </h2>
              <p id="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cum ducimus minima, voluptate officiis commodi!
              </p>
            </div>
            <div id="image"></div>
          </div>
          <div className="grid-item">
            <div className="text-container">
              <div id="title">
                Lorem ipsum dolor sit.
              </div>
              <p id="description">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus cum ducimus minima, voluptate officiis commodi!
              </p>
            </div>
            <div id="image"></div>
          </div>
        </section>
        <section id="featured-container">
          <div id="text-container">
            <div id="title">Lorem ipsum dolor sit amet consectetur.</div>
            <div id="subtitle">Lorem ipsum dolor sit.</div>
            <button id="button"></button>
          </div>
          <div id="image"></div>
        </section>
        <section id="div">
          <div id="links">
            <div id="image">
              <div id="title"></div>
              <ul>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
              </ul>
            </div>
            <div id="learn">
              <div id="title"></div>
              <ul>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
              </ul>
            </div>
            <div id="support">
              <div id="title"></div>
              <ul>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
              </ul>
            </div>
            <div id="company">
              <div id="title"></div>
              <ul>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
              </ul>
            </div>
            <div id="api">
              <div id="title"></div>
              <ul>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
              </ul>
            </div>
            <div id="page-divs">
              <div id="title"></div>
              <ul>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
                <li className="link">
                  <a href=""></a>
                </li>
              </ul>
            </div>
          </div>
          <div id="container-buttons">
            <div id="button-featured-container">
              <button className="button-featured"></button>
              <button className="button-featured"></button>
              <button className="button-featured"></button>
            </div>
            <div id="container-default-buttons">  
              <button className="button"></button>
              <button className="button"></button>
              <button className="button"></button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
