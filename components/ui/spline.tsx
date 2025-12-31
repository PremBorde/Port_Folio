'use client'

import { Suspense, lazy, useEffect, useRef, useState } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  interactive?: boolean // Option to disable interactivity
  fallback?: boolean // Use lightweight CSS fallback instead of 3D
}

export function SplineScene({ scene, className, interactive = false, fallback = false }: SplineSceneProps) {
  const splineRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [isTabActive, setIsTabActive] = useState(true)

  // Lightweight CSS fallback - zero performance impact
  if (fallback) {
    return (
      <div className={className} style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white/20 text-6xl font-bold">3D</div>
        </div>
      </div>
    )
  }

  // Pause when tab is not active
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden)
      if (splineRef.current) {
        try {
          if (document.hidden) {
            splineRef.current.setAttribute?.('paused', 'true')
          } else {
            splineRef.current.setAttribute?.('paused', 'false')
          }
        } catch (e) {
          // Ignore errors
        }
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
  }, [])

  // Intersection Observer - pause when not visible
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting)
          if (splineRef.current) {
            try {
              if (!entry.isIntersecting) {
                splineRef.current.setAttribute?.('paused', 'true')
              } else if (isTabActive) {
                splineRef.current.setAttribute?.('paused', 'false')
              }
            } catch (e) {
              // Ignore errors
            }
          }
        })
      },
      { threshold: 0.1 } // Trigger when 10% visible
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [isTabActive])

  // Optional: Very limited mouse interaction (disabled by default)
  useEffect(() => {
    if (!interactive || !splineRef.current) return

    let lastUpdate = 0
    const UPDATE_INTERVAL = 200 // Only update every 200ms (5 times per second)

    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now()
      if (now - lastUpdate < UPDATE_INTERVAL) return
      lastUpdate = now

      if (!containerRef.current || !isVisible || !isTabActive) return

      const rect = containerRef.current.getBoundingClientRect()
      const isHovering = (
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom
      )

      if (!isHovering) return

      requestAnimationFrame(() => {
        try {
          const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
          const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
          
          const robot = splineRef.current?.findObjectByName?.('Robot') || 
                       splineRef.current?.findObjectByName?.('robot')
          
          if (robot) {
            robot.position.x = x * 0.8  // Very minimal movement
            robot.position.y = y * 0.5
          }
        } catch (error) {
          // Ignore errors
        }
      })
    }

    document.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => document.removeEventListener('mousemove', handleMouseMove)
  }, [interactive, isVisible, isTabActive])

  return (
    <div 
      ref={containerRef} 
      className={className}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)', // Force GPU acceleration
        backfaceVisibility: 'hidden',
        perspective: '1000px',
      }}
    >
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-gray-400">Loading 3D Scene...</p>
            </div>
          </div>
        }
      >
        <Spline
          ref={splineRef}
          scene={scene}
          className="w-full h-full"
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
          }}
          onLoad={() => {
            console.log('Spline scene loaded successfully')
            // Try to reduce quality for better performance
            if (splineRef.current) {
              try {
                // Attempt to set lower quality if API supports it
                const canvas = containerRef.current?.querySelector('canvas')
                if (canvas) {
                  // Reduce pixel ratio for better performance
                  const context = canvas.getContext('webgl2') || canvas.getContext('webgl')
                  if (context) {
                    // Lower pixel ratio = better performance
                    const devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
                    canvas.width = canvas.clientWidth * devicePixelRatio
                    canvas.height = canvas.clientHeight * devicePixelRatio
                  }
                }
              } catch (e) {
                // Ignore errors
              }
            }
          }}
          onError={(error) => console.error('Spline scene error:', error)}
        />
      </Suspense>
    </div>
  )
}
