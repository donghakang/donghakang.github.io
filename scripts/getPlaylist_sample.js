const fs = require('fs')

// ACCESS TOKEN has to be authorized with scopes
const ACCESS_TOKEN = '<ACCESS TOKEN>'
const USER_ID = '<USER ID>'
const USER_ENDPOINT = `https://api.spotify.com/v1/users/${USER_ID}/playlists?limit=50`

const PLAYLIST_ENDPOINT = (token) =>
  `https://api.spotify.com/v1/playlists/${token}`

function padTo2Digits(num) {
  return num.toString().padStart(2, '0')
}
function convertTime(ms) {
  let seconds = Math.floor(ms / 1000)
  let minutes = Math.floor(seconds / 60)
  let hours = Math.floor(minutes / 60)

  seconds = seconds % 60
  minutes = minutes % 60

  hours = hours % 24

  return `${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`
}

const getUserPlaylists = async () => {
  const res = await fetch(USER_ENDPOINT, {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }),
  })

  if (res.statusText === 'OK') {
    // success

    const data = await res.json()

    const playlists = data.items // array

    const allPlaylists = playlists.map((playlist) => ({
      id: playlist.id,
      name: playlist.name,
    }))

    const filteredWithRadio = allPlaylists.filter((playlist) => {
      return playlist.name.includes('Dongha')
    })

    return filteredWithRadio
  }

  return []
}

const getSongList = async (key) => {
  const res = await fetch(PLAYLIST_ENDPOINT(key), {
    method: 'GET',
    headers: new Headers({
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    }),
  })

  if (res.statusText === 'OK') {
    const data = await res.json()

    const EXPORT_DATA = {
      name: data.name,

      tracks: data.tracks.items.map((item) => {
        const track = item.track

        return {
          track: track.name,
          artists: track.artists.map((artist) => artist.name),
          duration: convertTime(track.duration_ms),
        }
      }),
      spotify_url: data.external_urls.spotify,
      apple_url: '',
      youtube_url: '',
    }

    return EXPORT_DATA
  }

  return {}
}

const deploy = (data) => {
  const stringify = JSON.stringify(data)

  fs.writeFile(`./constants/playlist/${data.name}.json`, stringify, (err) => {
    if (err) console.log(err)
    else {
      console.log(`${data.name} File written successfully\n`)
    }
  })
}

const run = async () => {
  const playlists = await getUserPlaylists()

  Promise.all(
    playlists.map(async (playlist) => {
      const songData = await getSongList(playlist.id)
      console.log(songData)
      deploy(songData)
    }),
  )
}

run()
