import React from 'react';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Entertainment from './Entertainment'
import FullPage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'



function Home() {

    return (
        <FullPage>
            <FullpageNavigation />
            <FullPageSections>
                <FullpageSection>
                    <Intro />
                </FullpageSection>

                <FullpageSection>
                    <About />
                </FullpageSection>

                <FullpageSection>
                    <Projects />
                </FullpageSection>

                <FullpageSection>
                    <Entertainment />
                </FullpageSection>
                    
            </FullPageSections>
        </FullPage>
    );
}

export default Home;
