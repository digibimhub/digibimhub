'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const questions = [
  {
    question: 'What is your current experience level?',
    options: ['No experience (Fresher)', '0-2 years', '2-5 years', '5-10 years', '10+ years'],
    score: [1, 2, 3, 4, 5],
  },
  {
    question: 'Have you worked on Gulf projects?',
    options: ['Never heard', 'Heard about', '1-2 projects', '3-5 projects', 'Regular work'],
    score: [1, 2, 3, 4, 5],
  },
  {
    question: 'Revit experience level?',
    options: ['None', 'Beginner', 'Intermediate', 'Advanced', 'Expert'],
    score: [1, 2, 3, 4, 5],
  },
  {
    question: 'Leadership experience?',
    options: ['None', 'Little', 'Some team lead', 'Project lead', 'Senior management'],
    score: [1, 2, 3, 4, 5],
  },
  {
    question: 'MEP knowledge level?',
    options: ['No knowledge', 'Basic', 'Good', 'Very good', 'Expert'],
    score: [1, 2, 3, 4, 5],
  },
]

const courseRecommendations = [
  { score: 5, course: 'Junior BIM Modeler', desc: 'Perfect for freshers to start BIM journey' },
  { score: 10, course: 'BIM Modeler – MEP', desc: 'Intermediate level with practical skills' },
  { score: 15, course: 'BIM Coordinator – MEP', desc: 'Advanced coordination and teamwork' },
  { score: 20, course: 'Senior BIM Modeler – MEP', desc: 'Expert-level modeling and standards' },
  { score: 25, course: 'BIM Manager – MEP', desc: 'Leadership and strategic planning' },
]

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState<number[]>([])
  const [finished, setFinished] = useState(false)

  const handleAnswer = (score: number) => {
    const newScores = [...scores, score]
    setScores(newScores)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setFinished(true)
    }
  }

  const totalScore = scores.reduce((a, b) => a + b, 0)
  const recommendation = courseRecommendations.find(r => r.score >= totalScore) || courseRecommendations[4]

  return (
    <>
      <Navbar />
      <div className="section-padding bg-white">
        <div className="container-max max-w-2xl">
          {!finished ? (
            <div>
              <h1 className="heading-md mb-4 text-center">Find Your Right BIM Course</h1>
              <p className="text-gray-600 text-center mb-8">Answer {questions.length} quick questions to get personalized recommendation</p>

              <div className="mb-6">
                <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-brand-600 h-full transition-all"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">Question {currentQuestion + 1} of {questions.length}</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="heading-sm mb-8">{questions[currentQuestion].question}</h2>
                <div className="space-y-3">
                  {questions[currentQuestion].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(questions[currentQuestion].score[idx])}
                      className="w-full text-left p-4 border-2 border-gray-200 rounded-lg hover:border-brand-600 hover:bg-brand-50 transition-colors"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="heading-lg mb-6">Your Recommended Course</h1>
              <div className="bg-brand-600 text-white p-12 rounded-lg mb-8">
                <p className="text-lg opacity-90 mb-2">Based on your answers:</p>
                <h2 className="heading-md mb-4">{recommendation.course}</h2>
                <p className="text-lg">{recommendation.desc}</p>
              </div>
              <button className="btn-primary">ENROLL NOW</button>
              <button onClick={() => { setCurrentQuestion(0); setScores([]); setFinished(false); }} className="btn-secondary ml-4">
                RETAKE QUIZ
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
