import React from 'react';
import { useSelector } from 'react-redux';
import StartingQuiz from './StartingQuiz';
import FinishingQuiz from './FinishingQuiz';
import QuizQuestion from './QuizQuestion';

export default function Quiz() {
	const quiz = useSelector((store) => store.quiz);
	const currentQuestion = quiz.questions[quiz.current];
	return (
		<div className="flex-1 flex justify-center items-center flex-col gap-4 p-4">
			{!quiz.started ? (
				<StartingQuiz />
			) : !quiz.finished ? (
				<QuizQuestion
					index={quiz.current}
					question={currentQuestion.question}
					suggestions={currentQuestion.suggestions}
					correctAnswer={currentQuestion.correctAnswer}
					numberOfQuestions={quiz.questions.length}
				/>
			) : (
				<FinishingQuiz />
			)}
		</div>
	);
}
