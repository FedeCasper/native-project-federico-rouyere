import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Categories from '../components/Categories';
import HorizontalFlatList from '../components/HorizontalFlatList';
import movies from '../utils/data/movies.json'
import { useEffect, useState } from 'react'
import fonts from '../utils/globals/fonts';




const Home = ({ navigation }) => {

  const [ topTenMovies, setTopTenMovies ] = useState([])
  const [ recentAdded, setRecentAdded ] = useState([])

  const getTopTenMovies = () => {
    const topTen = movies.filter( movie => movie.web_calification && movie.clasification === 'movie' ).sort( ( a, b ) => b.web_calification - a.web_calification ).slice(0, 10)
    setTopTenMovies( topTen )
  }

  const getRecent = () => {
    const recentFilter = movies.filter( movie => movie.add_date ).sort( ( a, b ) => Date(a.add_date) - Date(b.add_date) )
    const recent = recentFilter.reverse().slice(0, 20)
    setRecentAdded( recent )
  }
  
  useEffect(() => {
    getTopTenMovies()
    getRecent()
  }, [])

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Categories</Text>
          <Text style={styles.subtitle}>Choose a category to see all the stories</Text>
          <Categories navigation={navigation} />
        </View>    
        <View style={styles.container}>
          <HorizontalFlatList arrayData={recentAdded} sectionTitle="Recently Added" />
        </View>
        <HorizontalFlatList arrayData={topTenMovies} sectionTitle="Top 10 movies" />
      </ScrollView>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    paddingVertical: 20,
    marginVertical: 20
  },
  title: {
    fontSize: 28,
    color: 'indigo',
    fontFamily: fonts.PoppinsRegular,
    paddingLeft: 20,
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    paddingLeft: 20,
    marginBottom: 10,
    fontFamily: fonts.PoppinsItalic
  }
})