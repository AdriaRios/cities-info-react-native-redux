import {Dimensions} from 'react-native';
const window = Dimensions.get('window');

export default {
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },

    background: {
        flex: 1,
        width: null,
        height: null
    },

    //HEADER
    header: {
        container: {
            flex: 2,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            marginTop: 25,
            marginLeft: 5
        },
        backBtn: {
            image: {
                width: 30,
                height: 30,
                marginRight: 10,
                marginTop: 10,
            }
        },
        text: {
            fontSize: 40,
            color: '#fff'
        }
    },

    //BODY
    body: {
        text: {
            fontSize: 20,
            marginLeft: 25,
            color: '#fff'
        },
        container : {
            flex: 8,
        },

        location: {
            marginTop: 20
        },

        mapView: {
            flex: 1,
            alignItems: 'center'
        },
        map: {
            marginTop: 15,
            width : window.width * 0.9,
            height : window.height * 0.58
        }

    }

};
