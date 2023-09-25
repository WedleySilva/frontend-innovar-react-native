import React from 'react';
import { View, StyleSheet} from 'react-native';
import HorariosBloqueadosList from '../components/HorariosBloqueadosList';
import SlideShow from '../components/SlideShow';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <HorariosBloqueadosList />
      <h2>Promoções</h2>
      <SlideShow /> 
    </View>
      

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00b5b2',
    display:'flex',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  contentText: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#555',
  },
  column: {
    alignItems: 'center',
  },
  vsText: {
    fontSize: 18,
    color: '#555',
    marginVertical: 5,
  },
});

export default HomeScreen;