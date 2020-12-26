import React from 'react'
import Markdown from 'react-markdown'
import aboutText from '../pages.json'
import Layout from '../components/layout'

const About = () => {
    return (
        <Layout>
            <div className="about">
                <h1>About Page</h1>
                <div className="page-content">
                    <Markdown source={aboutText[0].content} escapeHtml={false} />
                </div>
            </div>
        </Layout>
        
    )
}

export default About
