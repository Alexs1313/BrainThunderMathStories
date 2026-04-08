// loader

import WebView from 'react-native-webview';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';

import {useNavigation} from '@react-navigation/native';

import {Animated} from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const brainmathstorieeLoaderHTML = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: transparent;
      }

      .loader {
        --color-one: #ffbf48;
        --color-two: #be4a1d;
        --color-three: #ffbf4780;
        --color-four: #bf4a1d80;
        --color-five: #ffbf4740;
        --time-animation: 2s;
        position: relative;
        border-radius: 50%;
        width: 100px;
        height: 100px;
        box-shadow:
          0 0 25px 0 var(--color-three),
          0 20px 50px 0 var(--color-four);
        animation: colorize calc(var(--time-animation) * 3) ease-in-out infinite;
      }

      .loader::before {
        content: "";
        position: absolute;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border-top: solid 1px var(--color-one);
        border-bottom: solid 1px var(--color-two);
        background: linear-gradient(180deg, var(--color-five), var(--color-four));
        box-shadow:
          inset 0 10px 10px 0 var(--color-three),
          inset 0 -10px 10px 0 var(--color-four);
      }

      .box {
        width: 100px;
        height: 100px;
        background: linear-gradient(
          180deg,
          var(--color-one) 30%,
          var(--color-two) 70%
        );
        mask: url(#clipping);
        -webkit-mask: url(#clipping);
      }

      svg {
        position: absolute;
      }

      #clipping {
        filter: contrast(15);
        animation: roundness 1s linear infinite;
      }

      #clipping polygon {
        filter: blur(7px);
      }

      #clipping polygon:nth-child(2) {
        transform-origin: 50% 50%;
        animation: rotation 2s linear infinite reverse;
      }

      #clipping polygon:nth-child(3) {
        transform-origin: 50% 60%;
        animation: rotation 2s linear infinite;
        animation-delay: -0.6s;
      }

      #clipping polygon:nth-child(4) {
        transform-origin: 40% 40%;
        animation: rotation 2s linear infinite reverse;
      }

      #clipping polygon:nth-child(5) {
        transform-origin: 40% 40%;
        animation: rotation 2s linear infinite reverse;
        animation-delay: -1s;
      }

      #clipping polygon:nth-child(6) {
        transform-origin: 60% 40%;
        animation: rotation 2s linear infinite;
      }

      #clipping polygon:nth-child(7) {
        transform-origin: 60% 40%;
        animation: rotation 2s linear infinite;
        animation-delay: -1.3s;
      }

      @keyframes rotation {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      @keyframes roundness {
        0%,100% { filter: contrast(15); }
        40% { filter: contrast(3); }
      }

      @keyframes colorize {
        0% { filter: hue-rotate(0deg); }
        40% { filter: hue-rotate(-60deg); }
        80% { filter: hue-rotate(-45deg); }
        100% { filter: hue-rotate(0deg); }
      }
    </style>
  </head>

  <body>
    <div class="loader">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <defs>
          <mask id="clipping">
            <rect width="100" height="100" fill="black"/>
            <polygon points="25,25 75,25 50,75" fill="white"/>
            <polygon points="50,25 75,75 25,75" fill="white"/>
            <polygon points="35,35 65,35 50,65" fill="white"/>
            <polygon points="35,35 65,35 50,65" fill="white"/>
            <polygon points="35,35 65,35 50,65" fill="white"/>
            <polygon points="35,35 65,35 50,65" fill="white"/>
          </mask>
        </defs>
      </svg>
      <div class="box"></div>
    </div>
  </body>
  </html>
`;

const Brainmathstorieeloder = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const brainmathstorieeTimer = setTimeout(() => {
      navigation.replace('Brainmathstorieesonb' as never);
    }, 6000);

    return () => clearTimeout(brainmathstorieeTimer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../elements/i/brainmathstbg.png')}
      style={styles.brainmathstorieeImageBg}
      resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.brainmathstorieeWebviewDock}>
          <WebView
            originWhitelist={['*']}
            source={{html: brainmathstorieeLoaderHTML}}
            style={styles.brainmathstorieeWebview}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Brainmathstorieeloder;

const styles = StyleSheet.create({
  brainmathstorieeImageBg: {
    flex: 1,
  },
  brainmathstorieeWebviewDock: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  brainmathstorieeWebview: {
    backgroundColor: 'transparent',
    width: 260,
    height: 150,
  },
});
