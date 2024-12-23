'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from './layout';





export default function Home() {
  const [email, setEmail] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (emailPattern.test(email)) {
      router.push('/1st')
    } else {
      alert('Please enter a valid email address.')
    }
  }

  return (
    <Layout>
      <div className="container">
        <h1 className="title">CULTURE PRO</h1>
        <hr />
        <div className="instructions-box">
          <p><strong>Instructions:</strong></p>
          <p>Answer each question honestly and to the best of your ability.</p>
          <p>Choose only one answer for each question by marking either 'Yes' or 'No'.</p>
          <p>If you feel neither answer accurately reflects your response, please select the option that most closely aligns with your perspective.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="email-label">
            Enter E-mail below <span className="required">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="email-input"
            placeholder="Enter your e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </Layout>
  )
}

