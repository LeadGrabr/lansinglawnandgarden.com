import { default as React, PropTypes } from 'react'
import { Base, Heading, Section, SectionHeader, Text } from 'rebass'
import { BottomBar, Page, GoogleMap } from 'components'
import { default as Banner } from './Banner'
import { default as Gallery } from 'Gallery'
import { default as About } from 'About'

const Home = (props, { rebass: { colors } }) =>
    <Page>
        <Banner/>
        <Page.Content>
            <Heading
                level={2}
                mb={2}
                style={{ textAlign: 'center' }}
            >
                Welcome to Lansing Lawn Care
            </Heading>
            <Text style={{ textAlign: 'center' }}>
                Mauris accumsan eros eget libero posuere vulputate.
                Etiam elit elit, elementum sed varius at, adipiscing vitae est.
                Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.
            </Text>
            <Gallery
                count={6}
                imgProps={{
                    m: 2 // eslint-disable-line id-length
                }}
                size={250}
            />
        </Page.Content>
        <Section style={{ backgroundColor: colors.info }}>
            <Page.Content>
                <SectionHeader
                    heading="Some other alternate heading"
                    style={{ textAlign: 'center' }}
                />
                <About/>
            </Page.Content>
        </Section>
        <Base>
            <GoogleMap style={{ height: 300 }}/>
        </Base>
        <BottomBar/>
    </Page>

Home.contextTypes = {
    rebass: PropTypes.object.isRequired
}

export default Home
