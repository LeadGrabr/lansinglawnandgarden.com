import { default as React, Component, PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'
import { Base, Heading, Text } from 'rebass'
import { default as headShotOne } from './testimonial-headshot-1.jpg'
import { default as headShotTwo } from './testimonial-headshot-2.jpg'
import { default as headShotThree } from './testimonial-headshot-3.jpg'
import { default as headShotFour } from './testimonial-headshot-4.jpg'
import { connect } from 'react-redux'

const imgSize = 100

const sampleCopy = `
    Mauris accumsan eros eget libero posuere vulputate.
    Etiam elit elit, elementum sed varius at, adipiscing
    vitae est. Sed nec felis pellentesque, lacinia dui
    sed, ultricies sapien.
`

const Testimonial = ({ img, name, text, width }) =>
    <Flex
        align="center"
        column
        mb={2}
        style={{ width }}
    >
        <Box
            mb={2}
            px={2}
        >
            <Base
                circle
                style={{
                    backgroundImage: `url('${img}')`,
                    backgroundSize: 'cover',
                    height: imgSize,
                    width: imgSize
                }}
            />
        </Box>
        <Box px={2}>
            <Heading
                level={4}
                style={{
                    textAlign: 'center'
                }}
            >
                {name}
            </Heading>
            <Text
                style={{
                    textAlign: 'center'
                }}
            >
                {text}
            </Text>
        </Box>
    </Flex>

Testimonial.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string
    ]).isRequired
}

@connect(({ app: { width } }) => ({ width }))

export default class Testimonials extends Component {

    static propTypes = {
        width: PropTypes.number.isRequired
    };

    static contextTypes = {
        breakpoints: PropTypes.object.isRequired
    };

    render() {
        const { width } = this.props
        const { breakpoints } = this.context
        const { medium } = breakpoints
        const testimonialWidth = width > medium ? '50%' : '100%'
        return (
            <Flex wrap>
                <Testimonial
                    img={headShotOne}
                    name="Joe Schmoe"
                    text={sampleCopy}
                    width={testimonialWidth}
                />
                <Testimonial
                    img={headShotTwo}
                    name="Foo Bario"
                    text={sampleCopy}
                    width={testimonialWidth}
                />
                <Testimonial
                    img={headShotThree}
                    name="Katrina Green"
                    text={sampleCopy}
                    width={testimonialWidth}
                />
                <Testimonial
                    img={headShotFour}
                    name="Josephina Turducken"
                    text={sampleCopy}
                    width={testimonialWidth}
                />
            </Flex>
        )
    }
}
