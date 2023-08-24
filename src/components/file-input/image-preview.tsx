'use client'

import { User } from 'lucide-react'
import { useFileInput } from './root'
import { useMemo } from 'react'

export const ImagePreview = () => {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (!files || files?.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 shadow-sm">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={previewURL}
        className="h-16 w-16 rounded-full object-cover"
        alt=""
      />
    )
  }
}
