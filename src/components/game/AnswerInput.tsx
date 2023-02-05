import { connect } from 'react-redux';
import * as React from 'react';
import { Dispatch, Action } from 'redux';
import roomActionCreators from '../../state/room/roomActionCreators';
import State from '../../state/State';
import Constants from '../../model/enums/Constants';

interface AnswerInputProps {
	isConnected: boolean;
	id: string;
	isAnswering: boolean;
	answer: string;
	onAnswerChanged: (answer: string) => void;
	sendAnswer: () => void;
}

const mapStateToProps = (state: State) => ({
	isConnected: state.common.isConnected,
	isAnswering: state.room.stage.isAnswering,
	answer: state.room.answer || ''
});

const mapDispatchToProps = (dispatch: Dispatch<Action>) => ({
	onAnswerChanged: (answer: string) => {
		dispatch(roomActionCreators.onAnswerChanged(answer) as unknown as Action);
	},
	sendAnswer: () => {
		dispatch(roomActionCreators.sendAnswer() as unknown as Action);
	}
});

export function AnswerInput(props: AnswerInputProps): JSX.Element | null {
	const onAnswerChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		props.onAnswerChanged(e.target.value);
	};

	const onAnswerKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === Constants.KEY_ENTER_NEW) {
			if (props.isConnected) {
				props.sendAnswer();
			}

			e.preventDefault();
		}
	};

	return props.isAnswering ? (
		<input
			id={props.id}
			autoFocus
			className="gameInputBox"
			value={props.answer}
			onChange={onAnswerChanged}
			onKeyPress={onAnswerKeyPress}
			maxLength={250}
		/>
	) : null;
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerInput);
