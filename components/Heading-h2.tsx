import React from 'react'

type Props = {
    children: string,
}

export default function SectionHeading({children}: Props) {
  return (
    <h2 className='font-bold text-3xl capitalize mb-8 text-center'>{children}</h2>
  )
}
