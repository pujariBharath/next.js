import Layout from '../components/Layout'
import QuestionPage from '../components/QuestionPage'

export default function FirstQuestion() {
  return (
    <Layout>
      <QuestionPage word="Venturesome" prevPage="/" nextPage="/2nd" />
    </Layout>
  )
}

