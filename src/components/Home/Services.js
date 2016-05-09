import { default as React } from 'react'
import { default as hedgeTrimming } from './hedge-trimming.jpg'
import { default as leafPickup } from './leaf-pickup-and-bagging.jpg'
import { default as brushRemoval } from './brush-removal.jpg'
import { default as mowing } from './mowing.jpg'
import { default as mulchTurning } from './mulch-turning.jpg'
import { default as flowerBedMulching } from './flower-bed-mulching.jpg'
import { default as ServicesComponent } from '@leadgrabr/services'

const Services = () =>
    <ServicesComponent
        services={[
            {
                img: hedgeTrimming,
                name: 'Hedge Trimming'
            },
            {
                img: leafPickup,
                name: 'Leaf Pickup & Bagging'
            },
            {
                img: brushRemoval,
                name: 'Brush Removal'
            },
            {
                img: mowing,
                name: 'Mowing'
            },
            {
                img: mulchTurning,
                name: 'Mulch Turning'
            },
            {
                img: flowerBedMulching,
                name: 'Flower-bed Mulching'
            }
        ]}
    />


export default Services
