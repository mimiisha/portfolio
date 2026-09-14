import React, { useState, useEffect } from 'react'
import { useReducedMotion } from 'framer-motion'

const PAUSE_BETWEEN_PARTS = 100

const TypeWriter = ({ textPart1, textPart2, speed = 100, breakBeforePart2 = false }) => {
    const fullText = textPart1 + textPart2
    const [progress, setProgress] = useState({ source: fullText, count: 0 })
    const shouldReduceMotion = useReducedMotion()

    const count = shouldReduceMotion
        ? fullText.length
        : progress.source === fullText ? progress.count : 0
    const displayedText1 = textPart1.slice(0, Math.min(count, textPart1.length))
    const displayedText2 = textPart2.slice(0, Math.max(0, count - textPart1.length))
    const isDone = count >= fullText.length

    useEffect(() => {
        if (count >= fullText.length) return

        const delay = count === textPart1.length ? speed * 2 + PAUSE_BETWEEN_PARTS : speed
        const timeoutId = setTimeout(() => {
            setProgress({ source: fullText, count: count + 1 })
        }, delay)

        return () => clearTimeout(timeoutId)
    }, [fullText, textPart1.length, count, speed])

    const caret = (
        <span
            className={`ml-[0.06em] inline-block h-[0.72em] w-[0.08em] rounded-full bg-highlight align-baseline ${isDone ? "opacity-0 motion-safe:animate-caret-blink" : "opacity-100"}`}
        ></span>
    )

    return (
        <>
            <span className="sr-only">{fullText}</span>
            <span aria-hidden="true">
                <span className="text-content">
                    {displayedText1}
                    {count <= textPart1.length && caret}
                </span>
                <span className={`text-highlight${breakBeforePart2 ? " block" : ""}`}>
                    {displayedText2}
                    {count > textPart1.length && caret}
                </span>
            </span>
        </>
    )
}

export default TypeWriter
