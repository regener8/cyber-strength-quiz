import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const questions = [
	{
		question: "How do you approach a new challenge?",
		options: [
			"Plan carefully",
			"Dive in headfirst",
			"Ask questions",
			"Gather a team",
		],
	},
	{
		question: "Which word describes you best?",
		options: ["Analytical", "Empathetic", "Creative", "Determined"],
	},
	{
		question: "In a group project, you’re most likely to...",
		options: [
			"Organize tasks",
			"Motivate others",
			"Spot risks early",
			"Offer new ideas",
		],
	},
	{
		question: "Your favorite school subject was...",
		options: [
			"Math or Science",
			"Literature or History",
			"Art or Design",
			"Technology or Computing",
		],
	},
	{
		question: "What’s your superpower?",
		options: [
			"Problem-solving",
			"Listening",
			"Thinking outside the box",
			"Staying calm under pressure",
		],
	},
	{
		question: "You prefer to work...",
		options: [
			"Independently",
			"Collaboratively",
			"Remotely",
			"On-site, hands-on",
		],
	},
	{
		question: "What motivates you?",
		options: [
			"Solving tough problems",
			"Helping people",
			"Innovation",
			"Recognition and growth",
		],
	},
	{
		question: "Pick a tech word that excites you:",
		options: [
			"Encryption",
			"User Experience",
			"Artificial Intelligence",
			"Digital Forensics",
		],
	},
	{
		question: "Your ideal role would involve...",
		options: [
			"Investigating cyber threats",
			"Teaching others safe practices",
			"Designing secure systems",
			"Managing a team",
		],
	},
	{
		question: "You’re most confident when...",
		options: [
			"Following a proven strategy",
			"Encouraging others",
			"Building something new",
			"Fixing what’s broken",
		],
	},
	{
		question: "Which fictional character inspires you?",
		options: [
			"Sherlock Holmes",
			"Hermione Granger",
			"Shuri (Black Panther)",
			"Captain Marvel",
		],
	},
	{
		question: "On weekends, you like to...",
		options: ["Solve puzzles", "Volunteer", "Create content", "Tinker with tech"],
	},
	{
		question: "Which phrase speaks to you?",
		options: [
			"Data is power",
			"Knowledge is freedom",
			"Innovation drives change",
			"Lead with integrity",
		],
	},
	{
		question: "You thrive in an environment that is...",
		options: [
			"Structured and logical",
			"Friendly and inclusive",
			"Fast-paced and inventive",
			"Clear and goal-oriented",
		],
	},
	{
		question: "One cyber value you live by is...",
		options: ["Accuracy", "Trust", "Creativity", "Accountability"],
	},
];

const results = [
	{
		type: "The Analyst",
		description:
			"You are logical, detail-oriented, and love solving problems. You excel at analyzing situations and finding the best solutions.",
	},
	{
		type: "The Communicator",
		description:
			"You are empathetic and a great team player. You thrive on helping others and making sure everyone is on the same page.",
	},
	{
		type: "The Innovator",
		description:
			"You are creative and love thinking outside the box. You enjoy coming up with new ideas and approaches.",
	},
	{
		type: "The Leader",
		description:
			"You are determined and goal-oriented. You inspire others and excel at organizing and motivating teams.",
	},
];

export default function CyberStrengthQuiz() {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [answers, setAnswers] = useState(Array(questions.length).fill(null));
	const [submitted, setSubmitted] = useState(false);

	const handleOptionSelect = (optionIdx) => {
		const updatedAnswers = [...answers];
		updatedAnswers[currentQuestion] = optionIdx;
		setAnswers(updatedAnswers);
	};

	const handleNext = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1);
		}
	};

	const handlePrev = () => {
		if (currentQuestion > 0) {
			setCurrentQuestion(currentQuestion - 1);
		}
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
		<Card className="max-w-xl mx-auto mt-10 p-6">
			<CardContent>
				<h2 className="text-2xl font-bold mb-4">
					{questions[currentQuestion].question}
				</h2>
				<div className="flex flex-col gap-2 mb-4">
					{questions[currentQuestion].options.map((option, idx) => (
						<Button
							key={idx}
							onClick={() => handleOptionSelect(idx)}
							className={
								answers[currentQuestion] === idx ? "bg-blue-800 text-white" : ""
							}
						>
							{option}
						</Button>
					))}
				</div>
				<div className="flex justify-between">
					<Button onClick={handlePrev} disabled={currentQuestion === 0}>
						Previous
					</Button>
					{currentQuestion < questions.length - 1 ? (
						<Button
							onClick={handleNext}
							disabled={answers[currentQuestion] === null}
						>
							Next
						</Button>
					) : (
						<Button
							onClick={handleSubmit}
							disabled={answers[currentQuestion] === null}
						>
							Submit
						</Button>
					)}
				</div>
				<div className="mt-4 text-sm text-gray-500">
					Question {currentQuestion + 1} of {questions.length}
				</div>
			</CardContent>
		</Card>
	);
}
