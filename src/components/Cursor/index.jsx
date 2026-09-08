import { useState, useEffect, useRef, memo } from 'react'
import './Cursor.css'

function RainbowCanvas() {
  const canvasRef = useRef(null)
  const particlesRef = useRef([])
  const animationRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    class Particle {
      constructor(x, y, vx, vy) {
        this.x = x
        this.y = y
        this.vx = vx * 0.3 + (Math.random() - 0.5) * 1
        this.vy = vy * 0.3 + (Math.random() - 0.5) * 1
        this.radius = Math.random() * 20 + 8
        this.hue = Math.random() * 360
        this.alpha = 0.8
        this.decay = Math.random() * 0.02 + 0.01
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.vx *= 0.97
        this.vy *= 0.97
        this.alpha -= this.decay
        this.hue = (this.hue + 2) % 360
      }

      draw(ctx) {
        ctx.beginPath()
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius)
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 65%, ${this.alpha})`)
        gradient.addColorStop(0.4, `hsla(${this.hue + 40}, 100%, 55%, ${this.alpha * 0.6})`)
        gradient.addColorStop(0.7, `hsla(${this.hue + 80}, 100%, 45%, ${this.alpha * 0.3})`)
        gradient.addColorStop(1, `hsla(${this.hue + 120}, 100%, 35%, 0)`)
        ctx.fillStyle = gradient
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particlesRef.current = particlesRef.current.filter(p => p.alpha > 0)
      particlesRef.current.forEach(p => { p.update(); p.draw(ctx) })
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    window.addTrail = (x, y, vx, vy) => {
      for (let i = 0; i < 3; i++) {
        particlesRef.current.push(new Particle(x, y, vx, vy))
      }
    }

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className="cursor-canvas" />
}

function Cursor() {
  const cursorRef = useRef(null)
  const prevPos = useRef({ x: null, y: null })
  const [isVisible, setIsVisible] = useState(false)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    const handleMove = (e) => {
      // Check if hovering over a clickable element
      const hoverable = !!e.target.closest('a, button, [role="button"], input, select, textarea');
      if (hoverable !== cursor.classList.contains('cursor-hover')) {
          cursor.classList.toggle('cursor-hover', hoverable);
      }

      if (prevPos.current.x === null || prevPos.current.y === null) {
        prevPos.current.x = e.clientX
        prevPos.current.y = e.clientY
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
        if (!isVisible) setIsVisible(true)
        if (leaving) setLeaving(false)
        return
      }

      const vx = e.clientX - prevPos.current.x
      const vy = e.clientY - prevPos.current.y

      if (window.addTrail && (Math.abs(vx) > 1 || Math.abs(vy) > 1)) {
        window.addTrail(e.clientX, e.clientY, vx, vy)
      }

      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`
      
      prevPos.current.x = e.clientX
      prevPos.current.y = e.clientY

      if (!isVisible) setIsVisible(true)
      if (leaving) setLeaving(false)
    }

    const handleLeave = () => { setLeaving(true); if (cursor) cursor.style.opacity = '0' }
    const handleEnter = () => { setLeaving(false); if (cursor) cursor.style.opacity = '1' }

    document.addEventListener('mousemove', handleMove)
    document.addEventListener('mouseleave', handleLeave)
    document.addEventListener('mouseenter', handleEnter)

    return () => {
      document.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', handleLeave)
      document.removeEventListener('mouseenter', handleEnter)
    }
  }, [isVisible, leaving])

  if (typeof window === 'undefined') return null

  return (
    <>
      <RainbowCanvas />
      <div ref={cursorRef} className="cursor" style={{ opacity: leaving || !isVisible ? 0 : 1 }} />
    </>
  )
}

export default memo(Cursor)
