import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Entertainment from './Entertainment';
import Contact from './Contact';
import FullPage, { FullPageSections, FullpageSection, FullpageNavigation } from '@ap.cx/react-fullpage';

function Home() {
    const navigate = useNavigate();
    const location = useLocation();

    const routes = ['/', '/about', '/projects', '/entertainment', '/contact'];
    const sections = document.querySelectorAll('section');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-item');
            const routes = ['/', '/about', '/projects', '/entertainment', '/contact'];

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLinks[index].classList.add('active');
                    navigate(routes[index], { replace: true });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navigate]);

    const scrollToSection = (id) => {
        console.log(id)
        const section = sections[id];
        console.log(section)
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const handleNavClick = (e, id) => {
        e.preventDefault();
        scrollToSection(id);
    };

    
    return (
        <FullPage>
            <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
                <a className="navbar-brand" href="#"></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-items" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 0)}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 1)}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 2)}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 3)}>Entertainment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 4)}>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <FullpageNavigation anchors={['home', 'about', 'projects', 'entertainment', 'contact']} />
            <FullPageSections>
                <FullpageSection id="home">
                    <Intro />
                </FullpageSection>
                <FullpageSection id="about">
                    <About />
                </FullpageSection>
                <FullpageSection id="projects">
                    <Projects />
                </FullpageSection>
                <FullpageSection id="entertainment">
                    <Entertainment />
                </FullpageSection>
                <FullpageSection id="contact">
                    <Contact />
                </FullpageSection>
            </FullPageSections>
        </FullPage>
    );
}

export default Home;
