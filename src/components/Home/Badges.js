import { default as React, Component, PropTypes } from 'react'
import { default as Accessible } from 'react-icons/lib/md/accessible'
import { default as Leaf } from 'react-icons/lib/fa/leaf'
import { default as MagicWand } from 'react-icons/lib/fa/magic'
import { connect } from 'react-redux'
import { default as BrandBadges } from '@leadgrabr/brand-badges'

@connect(({ app: { width } }) => ({ width }))

/* eslint-disable react/prefer-stateless-function */
export default class Badges extends Component {

    static propTypes = {
        width: PropTypes.number.isRequired
    };

    render() {
        return (
            <BrandBadges
                backgroundColor="primary"
                badges={[
                    {
                        ...this.props,
                        icon: Accessible,
                        heading: 'Discounts for seniors and disabled'
                    },
                    {
                        ...this.props,
                        icon: Leaf,
                        heading: '100% Green'
                    },
                    {
                        ...this.props,
                        icon: MagicWand,
                        heading: 'You\'ll love the results'
                    }
                ]}
                color="secondary"
            />
        )
    }
}
