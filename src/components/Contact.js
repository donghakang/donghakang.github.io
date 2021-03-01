import Nav from './Nav'

import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import "../App.scss";

export default function Contact() {
    const m_size = 40;
    const m_style = { color: '#dddddd' };
    return (
        
        <div>
            <Nav />
            <div className={'contact'}> 
                <ul>
                    <li>
                        <a href="https://www.github.com/donghakang"><FaGithub size={m_size} style={m_style}/></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/donghakang"><FaFacebook size={m_size} style={m_style}/></a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/dkang0602"><FaInstagram size={m_size} style={m_style}/></a>
                    </li>
                    <li>
                        <a href="mailto:dkang0602@gmail.com"><FiMail size={m_size} style={m_style}/></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}