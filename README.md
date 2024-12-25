# @xweb3dev/react

Utility hooks and components for modern, RSC based React!

## ConditionalWrapper

``` JSX
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ConditionalWrapper } from "@xweb3dev/react/components/ConditionalWrapper";

export function ConditionalWrapperDemo() {
  const isMobile = useIsMobile();

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
  );
}
```
