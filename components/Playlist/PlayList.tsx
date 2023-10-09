import cx from 'classnames'
import Link from 'next/link'
import styles from './playlist.module.scss'

type PlayListType = {
  list: string[]
}

function Videos() {
  return (
    <>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video className={cx(styles.BackgroundVideo)} muted autoPlay loop>
        <source src="/assets/mov/play.mov" type="video/mp4" />
      </video>
      <video className={cx(styles.BackgroundVideo2)} muted autoPlay loop>
        <source src="/assets/mov/play2.mov" type="video/mp4" />
      </video>
    </>
  )
}

function PlayList({ list }: PlayListType) {
  return (
    <div className={cx(styles.PlaylistContainer)}>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <Videos />
      <div className={cx(styles.DetailLinkWrapper)}>
        {list.map((radio) => (
          <Link href={`playlist/${radio.replace('Dongha Radio ', '')}`}>
            <span className={cx(styles.DetailLink)}>{radio}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default PlayList
