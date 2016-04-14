import { default as React, PropTypes } from 'react'
import { Base, Section, SectionHeader, Text } from 'rebass'
import { BottomBar, Page, GoogleMap } from 'components'
import { default as Banner } from './Banner'
import { default as Badges } from './Badges'
import { default as Services } from './Services'
import { default as Testimonials } from './Testimonials'

const Home = () =>
    <Page>
        <Banner/>
        <Page.Content>
            <Section>
                <SectionHeader heading="Welcome to Lansing Lawn Care"/>
                <Text style={{ textAlign: 'center' }}>
                    Mauris accumsan eros eget libero posuere vulputate.
                    Etiam elit elit, elementum sed varius at, adipiscing vitae est.
                    Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.
                </Text>
            </Section>
            <Section>
                <Badges/>
            </Section>
            <Section>
                <SectionHeader heading="Our Services"/>
                <Services/>
            </Section>
            <Section>
                <SectionHeader heading="Customer Testimonials"/>
                <Testimonials/>
            </Section>
        </Page.Content>
        <Base>
            <GoogleMap style={{ height: 300 }}/>
        </Base>
        <BottomBar/>
    </Page>

Home.contextTypes = {
    rebass: PropTypes.object.isRequired
}

export default Home
