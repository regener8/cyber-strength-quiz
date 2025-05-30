import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const questions = [
  {
    question: "How do you approach a new challenge?",
    options: ["Plan carefully", "Dive in headfirst", "Ask questions", "Gather a team"],
  },
  {
    question: "Which word describes you best?",
    options: ["Analytical", "Empathetic", "Creative", "Determined"],
  },
  {
    question: "In a group project, you’re most likely to...",
    options: ["Organize tasks", "Motivate others", "Spot risks early", "Offer new ideas"],
  },
  {
    question: "Your favorite school subject was...",
    options: ["Math or Science", "Literature or History", "Art or Design", "Technology or Computing"],
  },
  {
    question: "What’s your superpower?",
    options: ["Problem-solving", "Listening", "Thinking outside the box", "Staying calm under pressure"],
  },
  {
    question: "You prefer to work...",
    options: ["Independently", "Collaboratively", "Remotely", "On-site, hands-on"],
  },
  {
    question: "What motivates you?",
    options: ["Solving tough problems", "Helping people", "Innovation", "Recognition and growth"],
  },
  {
    question: "Pick a tech word that excites you:",
    options: ["Encryption", "User Experience", "Artificial Intelligence", "Digital Forensics"],
  },
  {
    question: "Your ideal role would involve...",
    options: ["Investigating cyber threats", "Teaching others safe practices", "Designing secure systems", "Managing a team"],
  },
  {
    question: "You’re most confident when...",
    options: ["Following a proven strategy", "Encouraging others", "Building something new", "Fixing what’s broken"],
  },
  {
    question: "Which fictional character inspires you?",
    options: ["Sherlock Holmes", "Hermione Granger", "Shuri (Black Panther)", "Captain Marvel"],
  },
  {
    question: "On weekends, you like to...",
    options: ["Solve puzzles", "Volunteer", "Create content", "Tinker with tech"],
  },
  {
    question: "Which phrase speaks to you?",
    options: ["Data is power", "Knowledge is freedom", "Innovation drives change", "Lead with integrity"],
  },
  {
    question: "You thrive in an environment that is...",
    options: ["Structured and logical", "Friendly and inclusive", "Fast-paced and inventive", "Clear and goal-oriented"],
  },
  {
    question: "One cyber value you live by is...",
    options: ["Accuracy", "Trust", "Creativity", "Accountability"],
  },
];

const results = [
  {
    type: "The Strategist",
    description: "You love order and logic. Perfect for roles in threat analysis, security architecture, or compliance.",
  },
  {
    type: "The Guardian",
    description: "You lead with empathy and community. Thrive in awareness training, governance, or customer protection roles.",
  },
  {
    type: "The Visionary",
    description: "You think big. Best suited to AI security, UX security design, or innovation labs.",
  },
  {
    type: "The Commander",
    description: "You're a natural leader. Project management, incident response, or CISO track could be your calling.",
  },
];

export default function CyberStrengthQuiz() {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (qIndex, oIndex) => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = oIndex;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const getResult = () => {
    const tally = [0, 0, 0, 0];
    answers.forEach((a) => {
      if (a !== null) tally[a]++;
    });
    const maxIndex = tally.indexOf(Math.max(...tally));
    return results[maxIndex];
  };

  if (submitted) {
    const result = getResult();
    return (
      <Card className="max-w-xl mx-auto mt-10 p-6">
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Your Cyber Strength</h2>
          <p className="text-xl font-semibold mb-2">{result.type}</p>
          <p>{result.description}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto mt-8">
      {questions.map((q, i) => (
        <Card key={i}>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">{i + 1}. {q.question}</h3>
            <div className="grid gap-2">
              {q.options.map((opt, j) => (
                <Button
                  key={j}
                  variant={answers[i] === j ? "default" : "outline"}
                  onClick={() => handleSelect(i, j)}
                >
                  {opt}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="text-center">
        <Button onClick={handleSubmit} disabled={answers.includes(null)}>
          Submit Quiz
        </Button>
      </div>
    </div>
  );
}
