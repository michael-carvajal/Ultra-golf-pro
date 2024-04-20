import React from 'react';
import {StyleSheet, ImageBackground, Dimensions, Text, View} from 'react-native';
import {screenHeight, screenWidth} from '../utils/constants';

const backgroundImage = require('../assets/images/background.png');

export default function TermsAndConditionsPage() {
    return (
        <View>
            <ImageBackground source={backgroundImage} style={styles.backgroundImage}/>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sagittis nisi, nec suscipit mauris.
                Vivamus feugiat dapibus felis, ac malesuada nunc fermentum id. Integer id purus sed mauris lacinia
                luctus. Aliquam in turpis in nunc convallis tincidunt sit amet ac sapien. Suspendisse potenti. Morbi
                lacinia, enim non eleifend luctus, nisl elit venenatis metus, id dictum velit eros vitae ipsum.
                Nullam
                auctor eros et justo rutrum, id finibus lorem convallis. Duis vitae felis justo.
                {'\n'}{'\n'}
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla
                eu
                mi nec justo pellentesque lacinia. Ut nec sodales felis. Fusce suscipit nisi non lacus dictum, at
                ullamcorper orci posuere. Cras ultricies est id quam elementum, sed cursus magna laoreet. Donec
                volutpat
                urna id magna convallis, id ultricies quam lobortis. Mauris feugiat varius lacinia. Integer non
                lectus
                at lacus lacinia faucibus ut eu ipsum. Nullam posuere enim nec luctus vehicula. Vestibulum ante
                ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia Curae; Integer vitae dui et mi hendrerit
                ultrices.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        height: screenHeight,
        width: screenWidth,
        opacity: 0.7
    },
    text: {
        color: '#000000',
        fontSize: 18,
        padding: 20
    }
});
