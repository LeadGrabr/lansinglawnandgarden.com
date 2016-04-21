/* eslint-disable react/prefer-stateless-function */
import { default as React, Component, PropTypes } from 'react'
import { Heading, Section, SectionHeader, Text } from 'rebass'
import { BottomBar, Page, GoogleMap } from 'components'
import { default as Banner } from './Banner'
import { default as Services } from './Services'
import { default as Testimonials } from '@leadgrabr/testimonials'
import { default as headShotOne } from './testimonial-headshot-1.jpg'
import { default as headShotTwo } from './testimonial-headshot-2.jpg'
import { default as headShotThree } from './testimonial-headshot-3.jpg'
import { default as headShotFour } from './testimonial-headshot-4.jpg'
import { connect } from 'react-redux'
import { default as BrandBadges } from '@leadgrabr/brand-badges'
import { default as Accessible } from 'react-icons/lib/md/accessible'
import { default as Leaf } from 'react-icons/lib/fa/leaf'
import { default as MagicWand } from 'react-icons/lib/fa/magic'

const sampleText = `
    Mauris accumsan eros eget libero posuere vulputate.
    Etiam elit elit, elementum sed varius at, adipiscing vitae est.
    Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.
`

@connect(({ app: { width } }) => ({ width }))

export default class Home extends Component {

    static propTypes = {
        width: PropTypes.number.isRequired
    };

    static contextTypes = {
        rebass: PropTypes.object.isRequired
    };

    render() {
        return (
            <Page>
                <Banner/>
                <Page.Content>
                    <Section>
                        <Heading
                            level={2}
                            style={{ textAlign: 'center' }}
                        >
                            Welcome to Lansing Lawn & Garden
                        </Heading>
                        <Text style={{ textAlign: 'center' }}>
                            Mauris accumsan eros eget libero posuere vulputate.
                            Etiam elit elit, elementum sed varius at, adipiscing vitae est.
                            Sed nec felis pellentesque, lacinia dui sed, ultricies sapien.
                        </Text>
                        <BrandBadges
                            backgroundColor="primary"
                            badges={[
                                {
                                    heading: 'Discounts for seniors and disabled',
                                    icon: <Accessible size={60}/>
                                },
                                {
                                    heading: '100% Green',
                                    icon: <Leaf size={60}/>
                                },
                                {
                                    heading: 'You\'ll love the results',
                                    icon: <MagicWand size={60}/>
                                }
                            ]}
                            circle
                            color="secondary"
                            height={250}
                            mb={1}
                            p={2}
                            width={250}
                        />
                    </Section>
                    <Section>
                        <SectionHeader heading="Our Services"/>
                        <Services/>
                    </Section>
                    <Section>
                        <SectionHeader heading="Customer Testimonials"/>
                        <Testimonials
                            testimonials={[
                                {
                                    img: headShotOne,
                                    name: 'Joe Schmoe',
                                    text: sampleText
                                },
                                {
                                    img: headShotTwo,
                                    name: 'Foo Bario',
                                    text: sampleText
                                },
                                {
                                    img: headShotThree,
                                    name: 'Katrina Green',
                                    text: sampleText
                                },
                                {
                                    img: headShotFour,
                                    name: 'Josephina Turducken',
                                    text: sampleText
                                }
                            ]}
                            width={this.props.width}
                        />
                    </Section>
                </Page.Content>
                <GoogleMap style={{ height: 300 }}/>
                <BottomBar/>
            </Page>
        )
    }
}
