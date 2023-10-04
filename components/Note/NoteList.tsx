import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type NoteListProps = {
  notes: FrontmatterType[]
}

function NoteList({ notes }: NoteListProps) {
  return (
    <div>
      <div>
        {notes.map((note) => (
          <ul>
            <li>
              <Link href="/">
                {note.title.split('').map((word) => (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.01, delay: Math.random() * 1.2 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </Link>
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export default NoteList
