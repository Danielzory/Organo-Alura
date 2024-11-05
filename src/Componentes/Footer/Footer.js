import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className='footerEnd'>
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://x.com/" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/logo.png" alt="" />
        </section>
            <p>Desenvolvido por Daniel Batista</p>
    </footer>
  ) 
}

export default Footer
