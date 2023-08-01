import React, { useState, useEffect, PropsWithChildren } from 'react'

export function ClientOnly({ children }: PropsWithChildren) {
  // State / Props
  const [hasMounted, setHasMounted] = useState(false)

  // Hooks
  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Render
  if (!hasMounted) return null

  return <>{children}</>
}
