'use client'

import { ChangeEvent, ComponentProps } from 'react'

import { useFileInput } from './root'

type RootProps = ComponentProps<'input'>

export const Control = (props: RootProps) => {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected && onFilesSelected(files)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      {...props}
    />
  )
}
