/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Navigation from '../Navbar'
import style from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={style.layout}>
      <Navigation />
      <main>{children}</main>
      <footer className={style.footer}>
        <p className={style.logo}>
          <Link href='/'>
            <a>
              <Image src='/rundevs.png' alt='Rundevs' width={150} height={150} />
            </a>
          </Link>
        </p>
        <p className={style.downloadFooter}>
          <button>Download MDPreview</button>
        </p>
        <div className={style.footerContent}>
          <p className={style.socialFooter}>
            <Link href='https://github.com/rundevs/rundev'>
              <a target='_blank'>GitHub</a>
            </Link>
            <Link href='/'>
              <a target='_blank'>Twitter</a>
            </Link>
            <img src='https://badgen.net/github/release/rundevs/rundev' alt='latest release Rundev' title='Latest release' />
          </p>
          <p>Copyright © 2022 <Link href='/'><a>Rundev</a></Link></p>
          <p className={style.dev}>Developer <Link href='https://sauterdev.vercel.app/'><a>Luis Gabriel Janco</a></Link></p>
        </div>
      </footer>
    </div>
  )
}

export default Layout
