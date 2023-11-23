import React, { useEffect, useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import axios from "axios";
import WeatherForecastListItem from "../Components/WeatherForecastListItem";

const WeatherForecastScreen = () => {
  const [forecast, setForecast] = useState([]);

  async function fetchWeatherData() {
    try {
      const response = await axios.get(
        "https://api.weatherapi.com/v1/forecast.json",
        {
          params: {
            key: "4dd92c06b63e4535bc893519232211",
            q: "Tampere",
            days: 7,
            aqi: "no",
          },
        }
      );
      setForecast(response.data.forecast.forecastday);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchWeatherData();
  }, []);

  useEffect(() => {
    console.log("Forecast updated:", forecast);
  }, [forecast]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Weekly Weather Forecast</Text>
      <FlatList
        style={styles.list}
        data={forecast}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <WeatherForecastListItem
            day={new Date(item.date).toLocaleDateString("en", {
              weekday: "long",
            })}
            temperature={item.day.avgtemp_c}
            windSpeed={item.day.maxwind_kph}
            icon={`https:${item.day.condition.icon}`}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
  }
});

export default WeatherForecastScreen;
