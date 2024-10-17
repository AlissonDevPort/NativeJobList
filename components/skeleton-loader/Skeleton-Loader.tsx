import React from 'react';
import { View, StyleSheet, Animated } from 'react-native';

const SkeletonLoader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerSkeleton}>
        <Animated.View style={styles.headerSkeleton} />
      </View>
      <View style={styles.listContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <View key={index} style={styles.itemSkeleton}>
            <Animated.View style={styles.imageSkeleton} />
            <View style={styles.nameSkeleton} />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
},
headerSkeleton: {
    width:335,
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#e0e0e0',
  },
  imageSkeleton: {
    width: 34,
    height: 34,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
    marginRight: 15,
  },
  nameSkeleton: {
    width: '50%',
    height: 20,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginBottom: 5,
  },
  jobSkeleton: {
    width: '30%',
    height: 16,
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
  },
  listContainer: {
    width: 335,
  },
  itemSkeleton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default SkeletonLoader;
