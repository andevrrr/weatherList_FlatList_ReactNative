import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const WeatherForecastListItem = ({ day, temperature, windSpeed, icon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{day}</Text>
      <Image source={{ uri: icon }} style={styles.icon} />
      <Text style={styles.temperature}>{temperature}°C</Text>
      <Text style={styles.windSpeed}>Wind: {windSpeed} km/h</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  day: {
    fontSize: 12,
  },
  icon: {
    width: 40,
    height: 40,
  },
  temperature: {
    fontSize: 12,
  },
  windSpeed: {
    fontSize: 12,
  },
});

export default WeatherForecastListItem;
