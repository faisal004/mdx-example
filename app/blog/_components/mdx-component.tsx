import { useMDXComponent } from 'next-contentlayer/hooks'
import { Callout } from './components/Callout'

const components = {
  Callout,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
