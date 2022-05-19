import * as React from 'react';
import Layout from '../components/layout/layout';
import Glitch from '../components/Glitch/glitch';
import Social from '../components/Social Link/social';

const IndexPage = () => {
    return(
        <Layout pageTitle = 'Coming Soon'>
            <Glitch></Glitch>
            <Social/>
        </Layout>
    )
};

export default IndexPage;