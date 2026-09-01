import { useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY)

function ResumeTailor() {
  const [jobDescription, setJobDescription] = useState("")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setResult("")
    const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" })
    const prompt = `You are a CV expert. Based on this job description, generate 5 strong resume bullet points a candidate should include to match this role. Be specific and use action verbs and metrics where possible.

Job Description:
${jobDescription}`
    const response = await model.generateContent(prompt)
    setResult(response.response.text())
    setLoading(false)
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">AI Resume Tailor</h1>
        <p className="text-gray-500 mt-1">Paste a job description and get tailored resume bullet points instantly.</p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <textarea
          rows={8}
          placeholder="Paste job description here..."
          onChange={e => setJobDescription(e.target.value)}
          className="border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white shadow-sm"
        />
        <button type="submit" disabled={loading} className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 font-medium disabled:opacity-50">
          {loading ? "Generating..." : "✨ Generate Bullet Points"}
        </button>
      </form>
      {result && (
        <div className="mt-6 bg-white shadow-sm border border-gray-100 rounded-xl p-6">
          <h2 className="font-bold text-lg mb-4 text-gray-900">Suggested Bullet Points</h2>
          <p className="text-gray-700 whitespace-pre-wrap text-sm leading-relaxed">{result}</p>
        </div>
      )}
    </div>
  )
}

export default ResumeTailor