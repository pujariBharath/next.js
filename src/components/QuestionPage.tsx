'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface QuestionPageProps {
  word: string
  prevPage: string
  nextPage: string
}

export default function QuestionPage({ word, prevPage, nextPage }: QuestionPageProps) {
  const router = useRouter()

  const choice = (choice: string) => {
    // You can store the choice here if needed
    // For example: localStorage.setItem(`choice_${word}`, choice);
    router.push(nextPage)
  }

  function handleButtonClick(arg0: string): void {
    throw new Error('Function not implemented.')
  }

  return (
    <div className="container">
      <div className="header">
        <Link href={prevPage} className="start-link">←</Link>
      </div>
      <div className="question">
        <p>Would the following word describe you?</p>
        <h1 className="word">{word}</h1>
      </div>
      <div className="buttons">
        <button
          className="response-btn"
          onClick={() => handleButtonClick('Yes')}
        >
          Yes
        </button>
        <button
          className="response-btn"
          onClick={() => handleButtonClick('No')}
        >
          No
        </button>
      </div>
    </div>
  )
}

