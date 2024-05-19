import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Entertainment from './Entertainment'
import Contact from './Contact'
import FullPage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';



function Home() {

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-item');

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    navLinks[index].classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const routes = ['/', '/about', '/projects', '/entertainment', 'contact'];

            sections.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;

                if (window.scrollY >= sectionTop - sectionHeight / 3) {
                    navigate(routes[index]);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [navigate]);
    

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
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
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse navbar-items" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 'about')}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 'projects')}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 'entertainment')}>Entertainment</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <FullpageNavigation />
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
