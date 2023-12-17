import * as React from 'react'
import Lottie from 'lottie-react-native'
import { RefreshControl } from 'react-native-gesture-handler'
import { Platform, SafeAreaView, ScrollView } from 'react-native'

import { ThreadsContext } from '../../context/thread-context'
import ThreadsItem from '../../components/ThreadsItem'

export default function TabOneScreen() {
  const animationRef = React.useRef<Lottie>(null)
  const threads = React.useContext(ThreadsContext)

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              animationRef.current?.play()
            }}
            tintColor={'transparent'}
          />
        }
      >
        <Lottie
          ref={animationRef}
          source={require('../../lottie-animations/threads.json')}
          loop={false}
          autoPlay
          style={{ width: 90, height: 90, alignSelf: 'center' }}
        />
        {threads.map((thread) => (
          <ThreadsItem key={thread.id} {...thread} />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}
