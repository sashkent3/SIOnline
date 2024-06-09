import ButtonPressMode from './ButtonPressMode';
import TimeSettings from './TimeSettings';

export default interface AppSettings {
	readingSpeed: number;
	falseStart: boolean;
	hintShowman: boolean;
	partialText: boolean;
	partialImages: boolean;

	/** Play all questions in final round. */
	playAllQuestionsInFinalRound: boolean;

	/** Allow all players to play hidden stakes question. */
	allowEveryoneToPlayHiddenStakes: boolean;

	oral: boolean;

	/** Oral players actions game flag. */
	oralPlayersActions: boolean;

	ignoreWrong: boolean;

	/** Display package items sources. */
	displaySources: boolean;

	culture: string | null;
	managed: boolean;
	timeSettings: TimeSettings;
	usePingPenalty: boolean;

	/** Button press mode. */
	buttonPressMode: ButtonPressMode;

	preloadRoundContent: boolean;

	useApellations: boolean;

	displayAnswerOptionsOneByOne: boolean;

	displayAnswerOptionsLabels: boolean;
}

export const initialState: AppSettings = {
	culture: null,
	oral: false,
	oralPlayersActions: true,
	falseStart: true,
	hintShowman: false,
	partialText: false,
	partialImages: true,
	allowEveryoneToPlayHiddenStakes: true,
	playAllQuestionsInFinalRound: false,
	displaySources: false,
	readingSpeed: 20,
	managed: false,
	ignoreWrong: false,
	timeSettings: {
		timeForChoosingQuestion: 30,
		timeForThinkingOnQuestion: 5,
		timeForPrintingAnswer: 25,
		timeForGivingACat: 30,
		timeForMakingStake: 30,
		timeForThinkingOnSpecial: 25,
		timeOfRound: 660,
		timeForChoosingFinalTheme: 30,
		timeForFinalThinking: 45,
		timeForShowmanDecisions: 30,
		timeForRightAnswer: 2,
		timeForMediaDelay: 0,
		timeForBlockingButton: 3,
		partialImageTime: 3,
	},
	usePingPenalty: false,
	buttonPressMode: ButtonPressMode.RandomWithinInterval,
	preloadRoundContent: true,
	useApellations: true,
	displayAnswerOptionsLabels: true,
	displayAnswerOptionsOneByOne: true,
};
