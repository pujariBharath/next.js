'use client'

import { useRouter } from 'next/navigation'
import Layout from '../components/Layout'
import '../styles/success.css'

export default function Success() {
  const router = useRouter()

  const handleProcess = () => {
    alert('Processing...')
    router.push('/')
  }

  return (
    <Layout>
      <div className="container">
        <div className="checkmark-circle">
          <div className="checkmark"></div>
        </div>
        <h1>Thank You!</h1>
        <p>Your responses have been recorded</p>
        <button onClick={handleProcess} className="process-button">Process</button>
      </div>
    </Layout>
  )
}

