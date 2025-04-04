import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';

// Saatlik hava durumu verileri
const daysData = [
  { name: '09.00', temp: '25°C', icon: require("../assets/images/cloudy.png") },
  { name: '11.00', temp: '27°C', icon: require("../assets/images/gunes.png") },
  { name: '13.00', temp: '26°C', icon: require("../assets/images/rainy-day.png") },
  { name: '15.00', temp: '24°C', icon: require("../assets/images/rainy-day.png") },
  { name: '17.00', temp: '28°C', icon: require("../assets/images/snow.png") },
  { name: '19.00', temp: '29°C', icon: require("../assets/images/rainy-day.png") },
  { name: '21.00', temp: '30°C', icon: require("../assets/images/cloudy.png") }
];

// Sonraki günlerin hava durumu verileri
const nextDaysData = [
  { day: 'Pazartesi', temp: '26°C', icon: require("../assets/images/cloudy.png") },
  { day: 'Salı', temp: '28°C', icon: require("../assets/images/gunes.png") },
  { day: 'Çarşamba', temp: '25°C', icon: require("../assets/images/rainy-day.png") },
  { day: 'Perşembe', temp: '24°C', icon: require("../assets/images/rainy-day.png") },
  { day: 'Cuma', temp: '22°C', icon: require("../assets/images/snow.png") },
  { day: 'Cumartesi', temp: '30°C', icon: require("../assets/images/gunes.png") },
  { day: 'Pazar', temp: '27°C', icon: require("../assets/images/cloudy.png") },
];

const ScreenHome = () => {  
  return (
    <View style={styles.container}>
      <View style={styles.today}>
        <View style={styles.containerCity}>
          <Image style={styles.locationStyle} source={require("../assets/images/icons8-location-50.png")} />
          <Text style={styles.cityText}>İstanbul</Text>
        </View>

        <View style={styles.containerDegree}>
          <Image style={styles.sunImage} source={require("../assets/images/gunes.png")} />
          <Text style={styles.degreeText}>28</Text>
          <Text style={styles.degreeDayText}>Pazar</Text>
        </View>

        <View style={styles.containerHour}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {daysData.map((day, index) => (
              <View key={index} style={styles.dayContainer}>
                <Image style={styles.dayIcon} source={day.icon} />
                <Text style={styles.dayTemp}>{day.temp}</Text>
                <Text style={styles.dayName}>{day.name}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      
      <View style={styles.followingDays}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {nextDaysData.map((day, index) => (
            <View key={index} style={styles.nextDayContainer}>
              <Text style={styles.nextDayName}>{day.day}</Text>
              <Image style={styles.nextDayIcon} source={day.icon} />
              <Text style={styles.nextDayTemp}>{day.temp}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  today: {
    width: '100%',
    flex: 3,
    backgroundColor: '#137fad',
  },
  followingDays: {
    flex: 1,
    width: '100%',
    backgroundColor: '#1dd5db',
    borderWidth: 1,
    borderRadius: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  containerCity: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationStyle: {
    width: 40,
    height: 40,
    marginRight: 10,
    top: 12,
  },
  cityText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white',
    top: 12,
  },
  containerDegree: {
    flex: 3,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  degreeText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 180,
    lineHeight: 190,
    textAlign: 'center',
    padding: 40,
  },
  degreeDayText: {
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 40,
    position: 'absolute',
    alignItems: 'center',
    top: 8,
    color: 'white',
  },
  containerHour: {
    flex: 2,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayContainer: {
    height: '100%',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 0,
    marginHorizontal: 5,
    backgroundColor: '#ffffff55',
    borderRadius: 10,
  },
  dayIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  dayTemp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  dayName: {
    fontSize: 16,
    color: 'white',
  },
  sunImage: {
   // backgroundColor: 'white',
    width: '50%',
    height: '50%',
    resizeMode: 'contain',
    position: 'absolute',
    top: 15,
    left: -15,
  },

  nextDayContainer: {
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: '#ffffff55',
    borderRadius: 10,
  },
  nextDayName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  nextDayIcon: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  nextDayTemp: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 5,
  },
});

export default ScreenHome;
