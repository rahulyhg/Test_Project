import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Avatar, Badge, Button } from 'react-native-elements';
import { normalize } from '../../../../Constant';

class TopSix extends Component {
    render() {
        const { source, logo, resourceGpr } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View>
                        <Avatar
                            rounded
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            source={source[0]}
                            size="large"
                        />

                        <Badge
                            status="success"
                            badgeStyle={{ height: normalize(27), width: normalize(27), borderRadius: normalize(27) }}
                            containerStyle={{ position: 'absolute', top: 1, right: -20 }}
                            value={resourceGpr[0] ? resourceGpr[0].toFixed(1) : null}
                        />

                        <Avatar
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            source={logo[0]}
                            rounded
                            size={normalize(25)}
                            overlayContainerStyle={{ backgroundColor: '#fff' }}
                            imageProps={{ resizeMode: 'contain' }}
                            containerStyle={{ position: 'absolute', bottom: 1, left: -20 }}
                            avatarStyle={{ }}
                        />
                    </View>
                    <View>
                        <Avatar
                            rounded
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            source={source[1]}
                            size="large"
                        />

                        <Badge
                            status="success"
                            badgeStyle={{ height: normalize(27), width: normalize(27), borderRadius: normalize(27) }}
                            containerStyle={{ position: 'absolute', top: 1, right: -20 }}
                            value={resourceGpr[1]? resourceGpr[1].toFixed(1) : null}
                        />

                        <Avatar
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            source={logo[1]}
                            rounded
                            size={normalize(25)}
                            overlayContainerStyle={{ backgroundColor: '#fff' }}
                            imageProps={{ resizeMode: 'contain' }}
                            containerStyle={{ position: 'absolute', bottom: 1, left: -20 }}
                        />
                    </View>
                    <View>
                        <Avatar
                            rounded
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            source={source[2]}
                            size="large"
                        />

                        <Badge
                            status="success"
                            badgeStyle={{ height: normalize(27), width: normalize(27), borderRadius: normalize(27) }}
                            containerStyle={{ position: 'absolute', top: 1, right: -20 }}
                            value={resourceGpr[2]? resourceGpr[2].toFixed(1) : null}
                        />

                        <Avatar
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            source={logo[2]}
                            rounded
                            size={normalize(25)}
                            overlayContainerStyle={{ backgroundColor: '#fff' }}
                            imageProps={{ resizeMode: 'contain' }}
                            containerStyle={{ position: 'absolute', bottom: 1, left: -20 }}
                        />
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    {this.props.renderButton()}
                </View>
                <View style={styles.row}>
                    <View>
                        <Avatar
                            rounded
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            source={source[3]}
                            size="large"
                        />

                        <Badge
                            status="success"
                            badgeStyle={{ height: normalize(27), width: normalize(27), borderRadius: normalize(27/2) }}
                            containerStyle={{ position: 'absolute', top: 1, right: -20 }}
                            value={resourceGpr[3]? resourceGpr[3].toFixed(1) : null}
                        />

                        <Avatar
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            
                            rounded
                            size={normalize(25)}
                            overlayContainerStyle={{ backgroundColor: '#fff' }}
                            imageProps={{ resizeMode: 'contain' }}
                            containerStyle={{ position: 'absolute', bottom: 1, left: -20 }}
                            source={logo[3]}
                        />
                    </View>
                    <View>
                        <Avatar
                            rounded
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            source={source[4]}
                            size="large"
                        />

                        <Badge
                            status="success"
                            badgeStyle={{ height: normalize(27), width: normalize(27), borderRadius: normalize(27) }}
                            containerStyle={{ position: 'absolute', top: 1, right: -20 }}
                            value={resourceGpr[4]? resourceGpr[4].toFixed(1) : null}
                        />

                        <Avatar
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            source={logo[4]}
                            rounded
                            size={normalize(25)}
                            overlayContainerStyle={{ backgroundColor: '#fff' }}
                            imageProps={{ resizeMode: 'contain' }}
                            containerStyle={{ position: 'absolute', bottom: 1, left: -20 }}
                            avatarStyle={{ }}
                        />
                    </View>
                    <View>
                        <Avatar
                            rounded
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            source={source[5]}
                            size="large"
                        />

                        <Badge
                            status="success"
                            badgeStyle={{ height: normalize(27), width: normalize(27), borderRadius: normalize(27) }}
                            containerStyle={{ position: 'absolute', top: 1, right: -20 }}
                            value={resourceGpr[5]? resourceGpr[5].toFixed(1) : null}
                        />

                        <Avatar
                            // source={{
                            //     uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            // }}
                            source={logo[5]}
                            rounded
                            size={normalize(25)}
                            overlayContainerStyle={{ backgroundColor: '#fff' }}
                            imageProps={{ resizeMode: 'contain' }}
                            containerStyle={{ position: 'absolute', bottom: 1, left: -20 }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
    },

    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    }, 

    buttonContainer: {
        marginVertical: normalize(20),
    }
})

export default TopSix;