import { createSlice } from '@reduxjs/toolkit';
import questions from '../../data/questions';

const quizSlice = createSlice({
	name: 'quiz',
	initialState: {
		questions: questions,
		current: 0,
		started: false,
		finished: false,
		title: 'One piece Quiz',
		description: `Test your knowledge of Eiichiro Oda’s legendary manga One Piece! This 10-question quiz covers major characters, story arcs, Devil Fruits, and deep lore from the manga. Each question is worth up to 10 points, for a total of 100 points. Whether you're a casual reader or a Grand Line veteran, this quiz will challenge how much you truly know about the world of pirates, ancient secrets, and the journey to Laugh Tale!`,
		total: 0,
		cover: 'https://api.triviacreator.com/v1/imgs/quiz/One%20Piece%20quiz%20Thumbnail%20(2)-fdc09b23-a995-4aee-8e32-aab4492f0918.png',
	},
	reducers: {
		startQuiz: (state) => {
			state.started = true;
		},
		nextQuestion: (state) => {
			if (state.current < state.questions.length - 1) {
				state.current++;
			} else {
				state.finished = true;
			}
		},
		prevQuestion: (state) => {
			if (state.current > 0) {
				state.current--;
			} /*  else {
				state.started = false;
			} */
		},
		selectAnswer: (state, action) => {
			const indexAnswer = action.payload;
			const currentQuestion = state.questions[state.current];
			if (currentQuestion.correctAnswer === indexAnswer) {
				state.total += currentQuestion.point;
			}
		},
	},
});
export const { startQuiz, nextQuestion, prevQuestion, selectAnswer } = quizSlice.actions;
export default quizSlice.reducer;
