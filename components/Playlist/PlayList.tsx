import cx from 'classnames'
import Link from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import styles from './playlist.module.scss'

type PlayListType = {
  list: string[]
}

function Videos({
  setIsLoading,
}: {
  setIsLoading: Dispatch<SetStateAction<boolean>>
}) {
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean[]>([false, false])

  useEffect(() => {
    if (isVideoLoaded[0] && isVideoLoaded[1]) setIsLoading(false)
  }, [isVideoLoaded, setIsLoading])

  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        className={cx(styles.BackgroundVideo)}
        muted
        autoPlay
        loop
        onLoadedData={() => setIsVideoLoaded((prev) => [true, prev[1]])}
      >
        <source src="/assets/mov/play3.mov" type="video/mp4" />
      </video>
      <video
        className={cx(styles.BackgroundVideo2)}
        muted
        autoPlay
        loop
        onLoadedData={() => setIsVideoLoaded((prev) => [prev[0], true])}
      >
        <source src="/assets/mov/play23.mov" type="video/mp4" />
      </video>
    </>
  )
}

function PlayList({ list }: PlayListType) {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  return (
    <div>
      <div className={cx(styles.PlaylistContainer)}>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <Videos setIsLoading={setIsLoading} />
            <div className={cx(styles.DetailLinkWrapper)}>
              {list.map((radio) => (
                <Link
                  key={radio}
                  href={`playlist/${radio.replace('Dongha Radio ', '')}`}
                >
                  <span className={cx(styles.DetailLink)}>{radio}</span>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default PlayList
