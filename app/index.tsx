import {
  Box,
  Button,
  Heading,
  Link,
  LinkText,
  Text,
} from '@gluestack-ui/themed'
import { Image } from 'expo-image'
import { useState } from 'react'

export default function Page() {
  const [youtubeFeed, setYouTubeFeed] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean | undefined>(undefined)

  async function getYouTubeFeed() {
    setLoading(true)
    const feed = await fetch('/api/youtube')
    const { youtubeFeed } = await feed.json()
    setYouTubeFeed(youtubeFeed)
    setLoading(false)
  }

  return (
    <Box alignItems="center" flex={1} marginTop={36}>
      <Image
        source="https://avatars.githubusercontent.com/u/133729730"
        style={{ height: 115, width: 115 }}
      />
      <Heading marginBottom={16}>YouTube feed</Heading>
      <Button color="white" marginBottom={16} onPress={getYouTubeFeed}>
        Fetch feed
      </Button>
      {loading === undefined ? null : loading ? (
        <Text>Loading...</Text>
      ) : (
        youtubeFeed.map((link) => (
          <Box key={link}>
            <Link href={link} isExternal>
              <LinkText>{link}</LinkText>
            </Link>
          </Box>
        ))
      )}
      {/* <Box>
        <Text>
          <Link href="https://reactnative.dev/" isExternal>
            <LinkText>React Native docs</LinkText>
          </Link>
        </Text>
      </Box> */}
    </Box>
  )
}
