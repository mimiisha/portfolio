import React, { useState, useEffect } from 'react'

const TypeWriter = ({ textPart1, textPart2, speed = 100 }) => {
    const [displayedText1, setDisplayedText1] = useState('')
    const [displayedText2, setDisplayedText2] = useState('')
    const [showCaret, setShowCaret] = useState(true)
    const [isTypingPart1, setIsTypingPart1] = useState(true)

    useEffect(() => {
        let i = 0
        let typingInterval

        if (isTypingPart1) {
            typingInterval = setInterval(() => {
                if (i < textPart1.length) {
                    setDisplayedText1(textPart1.substring(0, i + 1))
                    i++
                } else {
                    clearInterval(typingInterval)
                    setIsTypingPart1(false)
                    i = 0

                    setTimeout(() => {
                        const typingPart2 = setInterval(() => {
                            if (i < textPart2.length) {
                                setDisplayedText2(textPart2.substring(0, i + 1))
                                i++
                            } else {
                                clearInterval(typingPart2)
                            }
                        }, speed)
                    }, 100)
                }
            }, speed)
        }

        return () => clearInterval(typingInterval)
    }, [textPart1, textPart2, speed, isTypingPart1])

    useEffect(() => {
        const caretBlink = setInterval(() => {
            setShowCaret(prev => !prev)
        }, 500)

        return () => clearInterval(caretBlink)
    }, [])

    return (
        <span className="relative inline-block">
            <span className="text-white">{displayedText1}</span>
            <span className="text-details">{displayedText2}</span>
            <span
                className={`absolute -right-1 bottom-1 w-1 h-12 bg-details rounded-full ${showCaret ? 'opacity-100' : 'opacity-0'}`}
            ></span>
        </span>
    )
}

export default TypeWriter