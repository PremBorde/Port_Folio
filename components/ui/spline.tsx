'use client'

import { Suspense, lazy, useEffect, useRef } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<any>(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (splineRef.current) {
        // Get mouse position relative to the entire viewport
        const x = (event.clientX / window.innerWidth) * 2 - 1
        const y = -(event.clientY / window.innerHeight) * 2 + 1
        
        try {
          // Try to find and move the robot object
          const robot = splineRef.current.findObjectByName('Robot') || 
                       splineRef.current.findObjectByName('robot') ||
                       splineRef.current.findObjectByName('Character') ||
                       splineRef.current.findObjectByName('character') ||
                       splineRef.current.findObjectByName('Cube') ||
                       splineRef.current.findObjectByName('cube')
          
          if (robot) {
            // Move robot based on cursor position across entire screen
            // Map cursor position to robot movement range
            robot.position.x = x * 3  // Increased range for more movement
            robot.position.y = y * 2  // Vertical movement
            robot.position.z = Math.sin(Date.now() * 0.001) * 0.5  // Subtle depth movement
            
            // Optional: Add rotation based on cursor position
            if (robot.rotation) {
              robot.rotation.y = x * 0.5
              robot.rotation.x = y * 0.3
            }
          }
        } catch (error) {
          // Silently handle errors if object not found
          console.log('Robot object not found or not accessible')
        }
      }
    }

    // Add mouse move listener to the entire document
    document.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
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
        className={className}
        onLoad={() => console.log('Spline scene loaded successfully')}
        onError={(error) => console.error('Spline scene error:', error)}
      />
    </Suspense>
  )
}
