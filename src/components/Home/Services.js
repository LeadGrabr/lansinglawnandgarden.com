import { default as React } from 'react'
import { Flex, Box } from 'reflexbox'
import { default as hedgeTrimming } from './hedge-trimming.jpg'
import { default as leafPickup } from './leaf-pickup-and-bagging.jpg'
import { default as brushRemoval } from './brush-removal.jpg'
import { default as mowing } from './mowing.jpg'
import { default as mulchTurning } from './mulch-turning.jpg'
import { default as flowerBedMulching } from './flower-bed-mulching.jpg'
import { Heading } from 'rebass'

const serviceSize = 275

const Service = ({ img, name }) =>
    <Flex
        align="flex-end"
        m={1}
        style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            height: serviceSize,
            width: serviceSize
        }}
    >
        <Heading
            backgroundColor="default"
            color="secondary"
            level={4}
            p={2}
            style={{
                width: '100%'
            }}
        >
            {name}
        </Heading>
    </Flex>

const Services = () =>
    <Flex
        justify="space-around"
        wrap
    >
        <Service
            img={hedgeTrimming}
            name="Hedge Trimming"
        />
        <Service
            img={leafPickup}
            name="Leaf Pickup & Bagging"
        />
        <Service
            img={brushRemoval}
            name="Brush Removal"
        />
        <Service
            img={mowing}
            name="Mowing"
        />
        <Service
            img={mulchTurning}
            name="Mulch Turning"
        />
        <Service
            img={flowerBedMulching}
            name="Flower-bed Mulching"
        />
    </Flex>


export default Services
