import React from 'react'
import cx from 'classnames'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { BsSpotify } from 'react-icons/bs'
import { SiYoutubemusic, SiApplemusic } from 'react-icons/si'
import styles from './playlist.module.scss'
import Circles from '../animation'

function PlaylistBackground({
  src,
  alt,
  background,
  opacity,
}: {
  src: string
  alt: string
  background: string
  opacity: number
}) {
  return (
    <>
      <motion.div className={cx(styles.PlaylistDetailBackground)}>
        <Image src={src} alt={alt} objectFit="cover" fill />
      </motion.div>
      <motion.div
        style={{
          background,
          position: 'absolute',
          opacity: 0.4,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity }}
        transition={{ duration: 0.2, delay: 0.4 }}
      />
    </>
  )
}

function PlayDetail({ content }: { content: string }) {
  const songlist: Playlist = JSON.parse(content)
  return (
    <div className={cx(styles.PlaylistDetail)}>
      <PlaylistBackground
        src={`/assets/png/playlist/${songlist.name.replace(
          'Dongha Radio ',
          '',
        )}.png`}
        alt={songlist.name}
        background={songlist.theme.background}
        opacity={songlist.theme.opacity}
      />

      <motion.div
        className={cx(styles.PlaylistItemWrapper)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 1 }}
        style={{ color: songlist.theme.color }}
      >
        {songlist.tracks.map((track: PlaylistTrack) => (
          <div key={track.track} className={cx(styles.TrackWrapper)}>
            <div className={cx(styles.song)}>
              {track.track}
              <div className={cx(styles.CircleWrapper)}>
                <Circles.Circle color={songlist.theme.color} />
              </div>
              {track.artists.join(' / ')}
            </div>
            <span className={cx(styles.duration)}>{track.duration}</span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className={cx(styles.LinkWrapper)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 1 }}
      >
        {songlist.spotify_url && (
          <a
            className={cx(styles.link)}
            style={{ color: songlist.theme.color }}
            href={songlist.spotify_url}
          >
            <BsSpotify size={40} />
          </a>
        )}
        {songlist.apple_url && (
          <a
            className={cx(styles.link)}
            style={{ color: songlist.theme.color }}
            href={songlist.apple_url}
          >
            <SiApplemusic size={40} />
          </a>
        )}
        {songlist.youtube_url && (
          <a
            className={cx(styles.link)}
            style={{ color: songlist.theme.color }}
            href={songlist.youtube_url}
          >
            <SiYoutubemusic size={40} />
          </a>
        )}
      </motion.div>
    </div>
  )
}

export default PlayDetail
