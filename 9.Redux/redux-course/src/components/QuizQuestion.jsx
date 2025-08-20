import { useDispatch } from 'react-redux';
import { nextQuestion, prevQuestion } from '../store/slices/quiz';

export default function QuizQuestion({
	question,
	suggestions,
	correctAnswer,
	index,
	numberOfQuestions,
}) {
	const dispatch = useDispatch();
	return (
		<>
			<div className="card bg-base-200 w-96 shadow-sm">
				<figure className="px-10 pt-10">
					<h3>
						Question {index + 1}/{numberOfQuestions}
					</h3>
				</figure>
				<div className="card-body items-center text-center">
					<h2 className="card-title">{question}</h2>
					<div className="card-actions w-full">
						{suggestions.map((s, i) => (
							<button key={i} className="btn w-full btn-outline">
								{s}
							</button>
						))}
					</div>
				</div>
			</div>
			<div className="flex justify-between w-full">
				<button
					className="btn btn-secondary"
					onClick={() => {
						dispatch(prevQuestion());
					}}
					disabled={index <= 0}
				>
					Previous
				</button>
				<button
					className="btn btn-primary"
					onClick={() => {
						dispatch(nextQuestion());
					}}
					disabled={index >= numberOfQuestions}
				>
					Next
				</button>
			</div>
		</>
	);
}
