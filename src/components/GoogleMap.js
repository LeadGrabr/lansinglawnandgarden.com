import { default as React, Component } from 'react'
import { default as update } from 'react-addons-update'
import { default as canUseDOM } from 'can-use-dom'
import { throttle } from 'lodash'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps'
import { triggerEvent } from 'react-google-maps/lib/utils'

const lat = 42.7325
const lng = -84.5555

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
export default class _GoogleMap extends Component {

    constructor(props, context) {
        super(props, context)
        this.handleWindowResize = throttle(::this.handleWindowResize, 500)
    }

    state = {
        markers: [
            {
                position: { lat, lng },
                key: 'Lansing',
                defaultAnimation: 2,
            }
        ]
    };

    componentDidMount() {
        if (!canUseDOM) {
            return
        }
        window.addEventListener('resize', this.handleWindowResize)
    }

    componentWillUnmount() {
        if (!canUseDOM) {
            return
        }
        window.removeEventListener('resize', this.handleWindowResize)
    }

    handleWindowResize() {
        console.log('handleWindowResize', this.map)
        triggerEvent(this.map, 'resize')
    }

    /*
    * This is called when you click on the map.
    * Go and try click now.
    */
    handleMapClick(event) {
        let { markers } = this.state
        markers = update(markers, {
            $push: [
                {
                    position: event.latLng,
                    defaultAnimation: 2,
                    key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
                },
            ],
        })

        this.setState({ markers })
    }

    handleMarkerRightclick(index) {
        /*
        * All you modify is data, and the view is driven by data.
        * This is so called data-driven-development. (And yes, it's now in
        * web front end and even with google maps API.)
        */
        let { markers } = this.state
        markers = update(markers, {
            $splice: [
                [index, 1],
            ],
        })
        this.setState({ markers })
    }

    render() {
        return (
            <GoogleMapLoader
                containerElement={
                    <div
                        style={{
                            height: '100%',
                        }}
                        {...this.props}
                    />
                }
                googleMapElement={
                    <GoogleMap
                        defaultCenter={{ lat, lng }}
                        defaultZoom={10}
                        onClick={::this.handleMapClick}
                        options={{
                            mapTypeControl: false,
                            scrollwheel: false,
                            streetViewControl: false,
                            zoomControl: false
                        }}
                        ref={(map) => {
                            this.map = map
                        }}
                    >
                    {this.state.markers.map((marker, index) =>
                        <Marker
                            {...marker}
                            key={index}
                            onRightclick={this.handleMarkerRightclick.bind(this, index)}
                        />
                    )}
                    </GoogleMap>
                }
            />
        )
    }
}
