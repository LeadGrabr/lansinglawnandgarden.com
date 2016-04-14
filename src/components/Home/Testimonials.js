import { default as React, PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'
import { Base, Heading, Text } from 'rebass'
import { default as headShotOne } from './testimonial-headshot-1.jpg'
import { default as headShotTwo } from './testimonial-headshot-2.jpg'
import { default as headShotThree } from './testimonial-headshot-3.jpg'
import { default as headShotFour } from './testimonial-headshot-4.jpg'

const imgSize = 100

const sampleCopy = `
    Mauris accumsan eros eget libero posuere vulputate.
    Etiam elit elit, elementum sed varius at, adipiscing
    vitae est. Sed nec felis pellentesque, lacinia dui
    sed, ultricies sapien.
`

const Testimonial = ({ img, name, text }) =>
    <Flex
        mb={2}
        style={{ width: '50%' }}
    >
        <Box px={2}>
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
            <Heading level={4}>
                {name}
            </Heading>
            <Text>
                {text}
            </Text>
        </Box>
    </Flex>

Testimonial.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

const Testimonials = () => 
    <Flex wrap>
        <Testimonial
            img={headShotOne}
            name="Joe Schmoe"
            text={sampleCopy}
        />
        <Testimonial
            img={headShotTwo}
            name="Foo Bario"
            text={sampleCopy}
        />
        <Testimonial
            img={headShotThree}
            name="Katrina Green"
            text={sampleCopy}
        />
        <Testimonial
            img={headShotFour}
            name="Josephina Turducken"
            text={sampleCopy}
        />
    </Flex>

export default Testimonials
