import { default as React, Component, createElement, PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { default as Accessible } from 'react-icons/lib/md/accessible'
import { Base, Heading, Text } from 'rebass'
import { default as Leaf } from 'react-icons/lib/fa/leaf'
import { default as MagicWand } from 'react-icons/lib/fa/magic'
import { connect } from 'react-redux'

const badgeSize = 280

const Badge = ({ heading, icon, iconSize, showTextOnSmall, width }, { rebass: { colors } }) =>
    <Base
        circle
        my={2}
        p={3}
        style={{
            alignItems: 'center',
            backgroundColor: colors.green,
            display: 'flex',
            color: colors.white,
            height: badgeSize,
            width: badgeSize
        }}
    >
        <Base
            style={{
                margin: 'auto',
                maxWidth: 200,
                textAlign: 'center'
            }}
        >
            <Heading
                level={3}
                mb={2}
            >
                {heading}
            </Heading>
            <Flex justify="center">
                {createElement(icon, { size: iconSize })}
            </Flex>
        </Base>
    </Base>

Badge.defaultProps = {
    iconSize: 80,
}

Badge.propTypes = {
    icon: PropTypes.func.isRequired,
    iconSize: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired
}

Badge.contextTypes = {
    breakpoints: PropTypes.object.isRequired,
    rebass: PropTypes.object.isRequired
}

@connect(({ app: { width } }) => ({ width }))

export default class Badges extends Component {

    static propTypes = {
        width: PropTypes.number.isRequired
    };

    render() {
        return (
            <Flex
                wrap
                justify="space-around"
            >
                <Badge
                    {...this.props}
                    heading="Discounts for seniors and disabled"
                    icon={Accessible}
                />
                <Badge
                    {...this.props}
                    heading="100% Green"
                    icon={Leaf}
                />
                <Badge
                    {...this.props}
                    heading="You'll love the results"
                    icon={MagicWand}
                />
            </Flex>
        )
    }
}
