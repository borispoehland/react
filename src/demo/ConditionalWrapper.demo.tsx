import ReactDOM from 'react-dom/client'

import { ConditionalWrapper } from '@/components/ConditionalWrapper'
import { useIsMobile } from '@/hooks/useIsMobile'
import { Button } from '@/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/ui/collapsible'
import { Dialog, DialogContent, DialogTrigger } from '@/ui/dialog'

import '@/styles/globals.css'

export function ConditionalWrapperDemo() {
  const isMobile = useIsMobile()

  return (
    <Dialog>
      <Collapsible>
        <ConditionalWrapper
          ifCondition={isMobile}
          then={({ children }) => (
            <CollapsibleTrigger asChild>{children}</CollapsibleTrigger>
          )}
          elseRender={({ children }) => (
            <DialogTrigger asChild>{children}</DialogTrigger>
          )}
        >
          <Button>About me</Button>
        </ConditionalWrapper>
        <DialogContent>You're on a desktop device</DialogContent>
        <CollapsibleContent>You're on a mobile device</CollapsibleContent>
      </Collapsible>
    </Dialog>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(<ConditionalWrapperDemo />)
