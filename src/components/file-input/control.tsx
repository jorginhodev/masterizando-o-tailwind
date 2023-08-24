import { ComponentProps } from 'react'

type RootProps = ComponentProps<'input'>

export const Control = (props: RootProps) => {
  return <input type="file" className="sr-only" {...props} />
}
