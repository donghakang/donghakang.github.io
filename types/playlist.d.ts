type PlaylistTrack = {
  track: string
  artists: string[]
  duration: string
}

type Playlist = {
  name: string
  tracks: PlaylistTrack[]
  spotify_url: string
  apple_url: string
  youtube_url: string
  theme: {
    color: string
    background: string
    opacity: number
  }
}
