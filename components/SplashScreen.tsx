import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';
import { Colors } from '@/constants/theme/theme';
import { PRJOECT_NAME } from '@/constants/names';

export default function SplashScreen() {
  const scheme = useColorScheme();
  const colors = Colors[scheme ?? 'light'];

  // Animation values
  const iconScale      = useRef(new Animated.Value(0.6)).current;
  const iconOpacity    = useRef(new Animated.Value(0)).current;
  const titleOpacity   = useRef(new Animated.Value(0)).current;
  const titleY         = useRef(new Animated.Value(24)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const taglineY       = useRef(new Animated.Value(16)).current;
  const dotsOpacity    = useRef(new Animated.Value(0)).current;

  const dot1 = useRef(new Animated.Value(0)).current;
  const dot2 = useRef(new Animated.Value(0)).current;
  const dot3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.spring(iconScale,   { toValue: 1, tension: 60, friction: 8, useNativeDriver: true }),
        Animated.timing(iconOpacity, { toValue: 1, duration: 400, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(titleOpacity, { toValue: 1, duration: 500, useNativeDriver: true }),
        Animated.timing(titleY,       { toValue: 0, duration: 500, useNativeDriver: true }),
      ]),
      Animated.parallel([
        Animated.timing(taglineOpacity, { toValue: 1, duration: 400, delay: 80, useNativeDriver: true }),
        Animated.timing(taglineY,       { toValue: 0, duration: 400, delay: 80, useNativeDriver: true }),
      ]),
      Animated.timing(dotsOpacity, { toValue: 1, duration: 350, useNativeDriver: true }),
    ]).start();

    const pulseDot = (anim: Animated.Value, delay: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, { toValue: 1, duration: 600, useNativeDriver: true }),
          Animated.timing(anim, { toValue: 0, duration: 600, useNativeDriver: true }),
        ])
      );

    setTimeout(() => {
      Animated.parallel([
        pulseDot(dot1, 0),
        pulseDot(dot2, 250),
        pulseDot(dot3, 500),
      ]).start();
    }, 1600);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'}
        backgroundColor={colors.background}
      />
      {/* Header */}
      <View style={styles.center}>
        {/* Logo */}
        <Animated.View style={[styles.iconCard, { opacity: iconOpacity, transform: [{ scale: iconScale }] }]}>
          <View style={[
            styles.iconInner,
            {
              backgroundColor: colors.surfaceContainerLowest,
              shadowColor:     colors.text,
            }
          ]}>
            <MaterialIcons
              name="menu-book"
              size={72}
              color={colors.primary}
            />
          </View>
        </Animated.View>
          {/* Logo */}
        {/* Brand Name */}
        <Animated.Text style={[
          styles.brandName,
          { color: colors.primary, opacity: titleOpacity, transform: [{ translateY: titleY }] },
        ]}>
          {PRJOECT_NAME}
        </Animated.Text>

        {/* Tagline */}
        <Animated.Text style={[
          styles.tagline,
          { color: colors.textVariant, opacity: taglineOpacity, transform: [{ translateY: taglineY }] },
        ]}>
          رحلتك في رحاب القرآن
        </Animated.Text>
        {/* Header */}

        {/* Dot Loader */}
        <Animated.View style={[styles.dotsRow, { opacity: dotsOpacity }]}>
          {[dot1, dot2, dot3].map((dot, i) => (
            <Animated.View
              key={i}
              style={[
                styles.dot,
                {
                  backgroundColor: colors.primary,
                  opacity:   dot.interpolate({ inputRange: [0, 1], outputRange: [0.2, 0.7] }),
                  transform: [{ scale: dot.interpolate({ inputRange: [0, 1], outputRange: [1, 1.4] }) }],
                },
              ]}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  iconCard: {
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconInner: {
    borderRadius: 32,
    padding: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset:   { width: 0, height: 12 },
    shadowOpacity:  0.06,
    shadowRadius:   40,
    elevation:      4,
  },
  brandName: {
    fontFamily:          'Tajawal',
    fontWeight:          '700',
    fontSize:            72,
    textAlign:           'center',
    letterSpacing:       -1,
    marginBottom:        12,
    includeFontPadding:  false,
    writingDirection:    'rtl',
  },
  tagline: {
    fontFamily:       'Tajawal',
    fontWeight:       '400',
    fontSize:         20,
    textAlign:        'center',
    opacity:          0.8,
    writingDirection: 'rtl',
  },
  dotsRow: {
    flexDirection: 'row',
    gap:           10,
    marginTop:     96,
    alignItems:    'center',
  },
  dot: {
    width:        6,
    height:       6,
    borderRadius: 3,
  },
});