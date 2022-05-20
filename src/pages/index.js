import * as React from 'react';
import Layout from '../components/layout/layout';
import Canvas from '../components/Glitch/canva';
import Social from '../components/Social Link/social';


const IndexPage = () => {
    return(
        <Layout pageTitle = 'Coming Soon' description='Site Web de SkullyfoxTV -- En Développement'>
            <Canvas />
            <Social/>
        </Layout>
    )
};

export default IndexPage;