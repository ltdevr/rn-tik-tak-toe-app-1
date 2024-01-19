import { StyleSheet, Text, View, SafeAreaView, Pressable, Image, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const windowWidth = Dimensions.get('window').width;
const App = () => {
  const [active_player, setActive_player] = useState('Android')
  const [markers, setMarkers] = useState([
    null, null, null,
    null, null, null,
    null, null, null
  ])

  const markPosition = (position) => {
    if (!markers[position]) {
      let temp = [...markers]
      temp[position] = active_player
      setMarkers(temp)
      if (active_player === 'Android') { //transfer chances to next player
        setActive_player('Apple')
      } else {
        setActive_player('Android')
      }
    }
  }

  // restart the game
  const resetMarkers = () => {
    setMarkers([
      null, null, null,
      null, null, null,
      null, null, null
    ])
  }

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]
      }
    }
    return null;
  }

  useEffect(() => {
    const winner = calculateWinner(markers);
    if (winner === 'Android') {
      alert("Android Won!")
      resetMarkers()
    } else if (winner === 'Apple') {
      alert("Apple Won!")
      resetMarkers()
    } 
  }, [markers])
  return (

    <SafeAreaView style={styles.body}>
      <LinearGradient
        colors={['#3498db', '#ffffff']}
      // style={styles.container}
      style={styles.body}
      >
        <View style={[styles.playerinfo, { backgroundColor: active_player === 'Android' ? '#007ff4' : '#b82c6f' }]}>
          <Text style={styles.playerTxt}>{active_player}'s turn</Text>
        </View>
        <View style={styles.mainContainer}>

          {/* Top Left Cell */}
          <Pressable style={styles.cell_top_left} onPress={() => markPosition(0)}>
            {markers[0] === 'Android' && <Image source={require('./assets/img/android3.png')} style={styles.icon} />}
            {markers[0] === 'Apple' && <Image source={require('./assets/img/apple3.png')} style={styles.icon} />}
          </Pressable>

          {/* Top Mid Cell */}
          <Pressable style={styles.cell_top_mid} onPress={() => markPosition(1)}>
            {markers[1] === 'Android' && <Image source={require('./assets/img/android3.png')} style={styles.icon} />}
            {markers[1] === 'Apple' && <Image source={require('./assets/img/apple3.png')} style={styles.icon} />}
          </Pressable>

          {/* Top Right Cell */}
          <Pressable style={styles.cell_top_right} onPress={() => markPosition(2)}>
            {markers[2] === 'Android' && <Image source={require('./assets/img/android3.png')} style={styles.icon} />}
            {markers[2] === 'Apple' && <Image source={require('./assets/img/apple3.png')} style={styles.icon} />}
          </Pressable>

          {/* Middle Left Cell */}
          <Pressable style={styles.cell_mid_left} onPress={() => markPosition(3)}>
            {markers[3] === 'Android' && <Image source={require('./assets/img/android3.png')} style={styles.icon} />}
            {markers[3] === 'Apple' && <Image source={require('./assets/img/apple3.png')} style={styles.icon} />}
          </Pressable>

          {/* Middle Mid Cell */}
          <Pressable style={styles.cell_mid_mid} onPress={() => markPosition(4)}>
            {markers[4] === 'Android' && <Image source={require('./assets/img/android3.png')} style={styles.icon} />}
            {markers[4] === 'Apple' && <Image source={require('./assets/img/apple3.png')} style={styles.icon} />}
          </Pressable>

          {/* Middle Right Cell */}
          <Pressable style={styles.cell_mid_right} onPress={() => markPosition(5)}>
            {markers[5] === 'Android' && <Image source={require('./assets/img/android3.png')} style={styles.icon} />}
            {markers[5] === 'Apple' && <Image source={require('./assets/img/apple3.png')} style={styles.icon} />}
          </Pressable>

          {/* Bottom Left Cell */}
          <Pressable style={styles.cell_bottom_left} onPress={() => markPosition(6)}>
            {markers[6] === 'Android' && <Image source={require('./assets/img/android3.png')} style={styles.icon} />}
            {markers[6] === 'Apple' && <Image source={require('./assets/img/apple3.png')} style={styles.icon} />}
          </Pressable>

          {/* Bottom Mid Cell */}
          <Pressable style={styles.cell_bottom_mid} onPress={() => markPosition(7)}>
            {markers[7] === 'Android' && <Image source={require('./assets/img/android3.png')} style={styles.icon} />}
            {markers[7] === 'Apple' && <Image source={require('./assets/img/apple3.png')} style={styles.icon} />}
          </Pressable>

          {/* Bottom Right Cell */}
          <Pressable style={styles.cell_bottom_right} onPress={() => markPosition(8)}>
            {markers[8] === 'Android' && <Image source={require('./assets/img/android3.png')} style={styles.icon} />}
            {markers[8] === 'Apple' && <Image source={require('./assets/img/apple3.png')} style={styles.icon} />}
          </Pressable>
        </View>

        {/* <Pressable style={styles.cancelBTN} onPress={resetMarkers}> */}
        <Pressable style={styles.resetButton} onPress={resetMarkers}>
          {/* {markers[9] === 'X' && <Image source={require('./assets/img/cross.png')} style={styles.icon} />}
        {markers[9] === 'O' && <Image source={require('./assets/img/zero.png')} style={styles.icon} />} */}
          {/* <Image source={require('./assets/img/replay.png')} style={styles.cancelIcon} /> */}
          <Text style={styles.resetButtonText}>Reset</Text>
        </Pressable>
      </LinearGradient >
    </SafeAreaView>

  )
}

export default App

const styles = StyleSheet.create({
  body: {
    flex: 1,
    bodygroundColor: '#fff'
  },
  playerinfo: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    marginTop: 30,
    borderWidth: 2
  },
  playerTxt: {
    fontSize: 40,
    // fontWeight: 'bold',
    letterSpacing: 1.2,
    color: '#fff'
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 50
  },
  cell_top_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderBottomWidth: 6
  },
  cell_top_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 6
  },
  cell_top_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderBottomWidth: 6
  },
  cell_mid_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
  },
  cell_mid_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell_mid_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
  },
  cell_bottom_left: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 6,
    borderTopWidth: 6
  },
  cell_bottom_mid: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 6
  },
  cell_bottom_right: {
    width: windowWidth / 3.2,
    height: windowWidth / 3.2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 6,
    borderTopWidth: 6
  },
  icon: {
    height: 62,
    width: 62
  },
  cancelBTN: {
    position: 'absolute',
    bottom: 15,
    right: 15
  },
  cancelIcon: {
    height: 70,
    width: 70
  },
  resetButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginTop: 60,
    width: 100,
   position: 'absolute',
   bottom: 15,
   marginLeft: 140
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})