import Layout from '../components/Layout'
import QuestionPage from '../components/QuestionPage'

export default function SecondQuestion() {
  return (
    <Layout>
      <QuestionPage word="Coordinate" prevPage="/1st" nextPage="/3rd" />
    </Layout>
  )
}

