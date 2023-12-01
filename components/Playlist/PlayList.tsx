import cx from 'classnames'
import Link from 'next/link'
import styles from './playlist.module.scss'

type PlayListType = {
  list: string[]
}

function PlayList({ list }: PlayListType) {
return (
    <div>
      <div className={cx(styles.PlaylistContainer)}>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
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
      </div>
    </div>
  )
}

export default PlayList
