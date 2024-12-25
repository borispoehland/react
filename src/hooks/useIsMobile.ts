import { useEffect, useState } from 'react'

import { mobileCheck, mobileOrTabletCheck } from '@/lib/utils'

export function useIsMobile({
  mode = 'mobile',
}: {
  mode?: 'mobile' | 'tablet'
} = {}) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function fn() {
      setIsMobile({ mobile: mobileCheck, tablet: mobileOrTabletCheck }[mode]())
    }

    fn()

    window.addEventListener('resize', fn)

    return () => {
      window.removeEventListener('resize', fn)
    }
  }, [mode])

  return isMobile
}
