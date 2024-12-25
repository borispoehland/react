import type { FC, PropsWithChildren } from 'react'

export function ConditionalWrapper({
  ifCondition,
  then,
  children,
  elseRender = ({ children }) => children,
}: PropsWithChildren<{
  ifCondition: boolean
  then: FC<PropsWithChildren>
  elseRender?: FC<PropsWithChildren>
}>) {
  const Render = ifCondition ? then : elseRender
  return <Render>{children}</Render>
}
