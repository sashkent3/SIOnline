import ChatMode from '../../model/enums/ChatMode';
import ChatMessage from '../../model/ChatMessage';
import Account from '../../model/Account';
import Persons from '../../model/Persons';
import PersonInfo from '../../model/PersonInfo';
import PlayerInfo from '../../model/PlayerInfo';
import Role from '../../client/contracts/Role';
import PlayerStates from '../../model/enums/PlayerStates';
import StakeTypes from '../../model/enums/StakeTypes';

export const enum RunActionTypes {
	RunChatModeChanged = 'RUN_CHAT_MODE_CHANGED',
	RunChatMessageChanged = 'RUN_CHAT_MESSAGE_CHANGED',
	RunChatVisibilityChanged = 'RUN_CHAT_VISIBILITY_CHANGED',
	RunShowPersons = 'RUN_SHOW_PERSONS',
	RunHidePersons = 'RUN_HIDE_PERSONS',
	RunShowTables = 'RUN_SHOW_TABLES',
	RunHideTables = 'RUN_HIDE_TABLES',
	RunShowBanned = 'RUN_SHOW_BANNED',
	RunHideBanned = 'RUN_HIDE_BANNED',
	RunShowGameInfo = 'RUN_SHOW_GAMEINFO',
	RunHideGameInfo = 'RUN_HIDE_GAMEINFO',
	RunShowManageGame = 'RUN_SHOW_MANAGE_GAME',
	RunHideManageGame = 'RUN_HIDE_MANAGE_GAME',
	ChatMessageAdded = 'CHAT_MESSAGE_ADDED',
	LastReplicChanged = 'LAST_REPLIC_CHANGED',
	ActivateChat = 'ACTIVATE_CHAT',
	ShowmanReplicChanged = 'SHOWMAN_REPLIC_CHANGED',
	PlayerReplicChanged = 'PLAYER_REPLIC_CHANGED',
	InfoChanged = 'INFO_CHANGED',
	ChatPersonSelected = 'CHAT_PERSON_SELECTED',
	TableSelected = 'TABLE_SELECTED',
	PersonAvatarChanged = 'PERSON_AVATAR_CHANGED',
	GameStarted = 'GAME_STARTED',
	StageChanged = 'STAGE_CHANGED',
	PlayersStateCleared = 'PLAYERS_STATE_CLEARED',
	GameStateCleared = 'GAME_STATE_CLEARED',
	SumsChanged = 'SUMS_CHANGED',
	AfterQuestionStateChanged = 'AFTER_QUESTION_STATE_CHANGED',
	CurrentPriceChanged = 'CURRENT_PRICE_CHANGED',
	PersonAdded = 'PERSON_ADDED',
	PersonRemoved = 'PERSON_REMOVED',
	ShowmanChanged = 'SHOWMAN_CHANGED',
	PlayerAdded = 'PLAYER_ADDED',
	PlayerChanged = 'PLAYER_CHANGED',
	PlayerDeleted = 'PLAYER_DELETED',
	PlayersSwap = 'PLAYERS_SWAP',
	RoleChanged = 'ROLE_CHANGED',
	PlayerStateChanged = 'PLAYER_STATE_CHANGED',
	PlayerLostStateDropped = 'PLAYER_LOST_STATE_DROPPED',
	IsPausedChanged = 'IS_PAUSED_CHANGED',
	PlayerStakeChanged = 'PLAYER_STAKE_CHANGED',
	DecisionNeededChanged = 'DECISION_NEEDED_CHANGED',
	ClearDecisions = 'CLEAR_DECISIONS',
	IsGameButtonEnabledChanged = 'IS_GAME_BUTTON_ENABLED',
	IsAnswering = 'IS_ANSWERING',
	AnswerChanged = 'ANSWER_CHANGED',
	Validate = 'VALIDATE',
	SetStakes = 'SET_STAKES',
	StakeChanged = 'STAKE_CHANGED',
	SelectionEnabled = 'SELECTION_ENABLED',
	AreSumsEditableChanged = 'ARE_SUMS_EDITABLE_CHANGED',
	ReadingSpeedChanged = 'READING_SPEED_CHANGED',
	RunTimer = 'RUN_TIMER',
	PauseTimer = 'PAUSE_TIMER',
	ResumeTimer = 'RESUME_TIMER',
	StopTimer = 'STOP_TIMER',
	TimerMaximumChanged = 'TIMER_MAXIMUM_CHANGED',
	ActivateShowmanDecision = 'ACTIVATE_SHOWMAN_DECISION',
	ActivatePlayerDecision = 'ACTIVATE_PLAYER_DECISION',
	ShowMainTimer = 'SHOW_MAIN_TIMER',
	ClearDecisionsAndMainTimer = 'CLEAR_DECISIONS_AND_MAIN_TIMER',
	HintChanged = 'HINT_CHANGED',
	OperationError = 'OPERATION_ERROR',
	HostNameChanged = 'HOST_NAME_CHANGED',
	ThemeNameChanged = 'THEME_NAME_CHANGED',
	IsReadyChanged = 'IS_READY_CHANGED',
	RoundsNamesChanged = 'ROUNDS_NAMES_CHANGED',
	ChooserChanged = 'CHOOSER_CHANGED',
	PlayerInGameChanged = 'PLAYER_IN_GAME_CHANGED',
	AreApellationsEnabledChanged = 'ARE_APELLATIONS_ENABLED_CHANGED',
	ButtonBlockingTimeChanged = 'BUTTON_BLOCKING_TIME_CHANGED',
	GameMetadataChanged = 'GAME_METADATA_CHANGED',
	BannedListChanged = 'BANNED_LIST_CHANGED',
	Banned = 'BANNED',
	Unbanned = 'UNBANNED',
	SelectBannedItem = 'SELECT_BANNED_ITEM',
	PlayerMediaLoaded = 'PLAYER_MEDIA_LOADED',
	EditTable = 'EDIT_TABLE',
}

export type RunChatModeChangedAction = { type: RunActionTypes.RunChatModeChanged, chatMode: ChatMode };
export type RunChatMessageChangedAction = { type: RunActionTypes.RunChatMessageChanged, message: string };
export type RunChatVisibilityChangedAction = { type: RunActionTypes.RunChatVisibilityChanged, isOpen: boolean };
export type RunShowPersonsAction = { type: RunActionTypes.RunShowPersons };
export type RunHidePersonsAction = { type: RunActionTypes.RunHidePersons };
export type RunShowTablesAction = { type: RunActionTypes.RunShowTables };
export type RunHideTablesAction = { type: RunActionTypes.RunHideTables };
export type RunShowBannedAction = { type: RunActionTypes.RunShowBanned };
export type RunHideBannedAction = { type: RunActionTypes.RunHideBanned };
export type RunShowGameInfoAction = { type: RunActionTypes.RunShowGameInfo };
export type RunHideGameInfoAction = { type: RunActionTypes.RunHideGameInfo };
export type RunShowManageGameAction = { type: RunActionTypes.RunShowManageGame };
export type RunHideManageGameAction = { type: RunActionTypes.RunHideManageGame };
export type ChatMessageAddedAction = { type: RunActionTypes.ChatMessageAdded, chatMessage: ChatMessage };
export type LastReplicChangedAction = { type: RunActionTypes.LastReplicChanged, chatMessage: ChatMessage | null };
export type ActivateChatAction = { type: RunActionTypes.ActivateChat };
export type ShowmanReplicChangedAction = { type: RunActionTypes.ShowmanReplicChanged, replic: string };
export type PlayerReplicChangedAction = { type: RunActionTypes.PlayerReplicChanged, playerIndex: number, replic: string };
export type InfoChangedAction = { type: RunActionTypes.InfoChanged, all: Persons, showman: PersonInfo, players: PlayerInfo[] };
export type ChatPersonSelectedAction = { type: RunActionTypes.ChatPersonSelected, personName: string };
export type TableSelectedAction = { type: RunActionTypes.TableSelected, tableIndex: number };
export type PersonAvatarChangedAction = { type: RunActionTypes.PersonAvatarChanged, personName: string, avatarUri: string };
export type GameStartedAction = { type: RunActionTypes.GameStarted };
export type StageChangedAction = { type: RunActionTypes.StageChanged, stageName: string, roundIndex: number };
export type PlayersStateClearedAction = { type: RunActionTypes.PlayersStateCleared };
export type GameStateClearedAction = { type: RunActionTypes.GameStateCleared };
export type SumsChangedAction = { type: RunActionTypes.SumsChanged, sums: number[] };
export type AfterQuestionStateChangedAction = { type: RunActionTypes.AfterQuestionStateChanged, isAfterQuestion: boolean };
export type CurrentPriceChangedAction = { type: RunActionTypes.CurrentPriceChanged, currentPrice: number };
export type PersonAddedAction = { type: RunActionTypes.PersonAdded, person: Account };
export type PersonRemovedAction = { type: RunActionTypes.PersonRemoved, name: string };
export type ShowmanChangedAction = { type: RunActionTypes.ShowmanChanged, name: string, isHuman?: boolean, isReady?: boolean };
export type PlayerAddedAction = { type: RunActionTypes.PlayerAdded };
export type PlayerChangedAction = { type: RunActionTypes.PlayerChanged, index: number, name: string, isHuman?: boolean, isReady?: boolean };
export type PlayerDeletedAction = { type: RunActionTypes.PlayerDeleted, index: number };
export type PlayersSwapAction = { type: RunActionTypes.PlayersSwap, index1: number, index2: number };
export type RoleChangedAction = { type: RunActionTypes.RoleChanged, role: Role };
export type PlayerStateChangedAction = { type: RunActionTypes.PlayerStateChanged, index: number, state: PlayerStates };
export type PlayerLostStateDroppedAction = { type: RunActionTypes.PlayerLostStateDropped, index: number };
export type IsPausedChangedAction = { type: RunActionTypes.IsPausedChanged, isPaused: boolean };
export type PlayerStakeChangedAction = { type: RunActionTypes.PlayerStakeChanged, index: number, stake: number };
export type DecisionNeededChangedAction = { type: RunActionTypes.DecisionNeededChanged, decisionNeeded: boolean };
export type ClearDecisionsAction = { type: RunActionTypes.ClearDecisions };
export type IsGameButtonEnabledChangedAction = { type: RunActionTypes.IsGameButtonEnabledChanged, isGameButtonEnabled: boolean };
export type IsAnsweringAction = { type: RunActionTypes.IsAnswering };
export type AnswerChangedAction = { type: RunActionTypes.AnswerChanged, answer: string };

export type ValidateAction = {
	type: RunActionTypes.Validate,
	name: string,
	answer: string,
	rightAnswers: string[],
	wrongAnswers: string[],
	header: string,
	message: string
};

export type SetStakesAction = {
	type: RunActionTypes.SetStakes,
	allowedStakeTypes: Record<StakeTypes, boolean>,
	minimum: number,
	maximum: number,
	stake: number,
	step: number,
	message: string,
	areSimple: boolean
};

export type StakeChangedAction = { type: RunActionTypes.StakeChanged, stake: number };
export type SelectionEnabledAction = { type: RunActionTypes.SelectionEnabled, allowedIndices: number[], message: string };
export type AreSumsEditableChangedAction = { type: RunActionTypes.AreSumsEditableChanged, areSumsEditable: boolean };
export type ReadingSpeedChangedAction = { type: RunActionTypes.ReadingSpeedChanged, readingSpeed: number };
export type RunTimerAction = { type: RunActionTypes.RunTimer, timerIndex: number, maximumTime: number, runByUser: boolean };
export type PauseTimerAction = { type: RunActionTypes.PauseTimer, timerIndex: number, currentTime: number, pausedByUser: boolean };
export type ResumeTimerAction = { type: RunActionTypes.ResumeTimer, timerIndex: number, runByUser: boolean };
export type StopTimerAction = { type: RunActionTypes.StopTimer, timerIndex: number };
export type TimerMaximumChangedAction = { type: RunActionTypes.TimerMaximumChanged, timerIndex: number, maximumTime: number };
export type ActivateShowmanDecisionAction = { type: RunActionTypes.ActivateShowmanDecision };
export type ActivatePlayerDecisionAction = { type: RunActionTypes.ActivatePlayerDecision, playerIndex: number };
export type ShowMainTimerAction = { type: RunActionTypes.ShowMainTimer };
export type ClearDecisionsAndMainTimerAction = { type: RunActionTypes.ClearDecisionsAndMainTimer };
export type HintChangedAction = { type: RunActionTypes.HintChanged, hint: string | null };
export type OperationErrorAction = { type: RunActionTypes.OperationError, error: string };
export type HostNameChangedAction = { type: RunActionTypes.HostNameChanged, hostName: string | null };
export type ThemeNameChangedAction = { type: RunActionTypes.ThemeNameChanged, themeName: string };
export type IsReadyChangedAction = { type: RunActionTypes.IsReadyChanged, personIndex: number, isReady: boolean };
export type RoundsNamesChangedAction = { type: RunActionTypes.RoundsNamesChanged, roundsNames: string[] };
export type ChooserChangedAction = { type: RunActionTypes.ChooserChanged, chooserIndex: number };
export type PlayerInGameChangedAction = { type: RunActionTypes.PlayerInGameChanged, playerIndex: number, inGame: boolean };
export type AreApellationsEnabledChangedAction = { type: RunActionTypes.AreApellationsEnabledChanged, areApellationsEnabled: boolean };
export type ButtonBlockingChangedAction = { type: RunActionTypes.ButtonBlockingTimeChanged, buttonBlockingTime: number };
export type GameMetadataChangedAction = { type: RunActionTypes.GameMetadataChanged, gameName: string, packageName: string, contactUri: string };
export type BannedListChangedAction = { type: RunActionTypes.BannedListChanged, bannedList: Record<string, string> };
export type BannedAction = { type: RunActionTypes.Banned, ip: string, name: string };
export type UnbannedAction = { type: RunActionTypes.Unbanned, ip: string };
export type SelectBannedItemAction = { type: RunActionTypes.SelectBannedItem, ip: string };
export type PlayerMediaLoadedAction = { type: RunActionTypes.PlayerMediaLoaded, playerIndex: number };
export type EditTableAction = { type: RunActionTypes.EditTable };

export type KnownRunAction =
	RunChatModeChangedAction
	| RunChatMessageChangedAction
	| RunChatVisibilityChangedAction
	| RunShowPersonsAction
	| RunHidePersonsAction
	| RunShowTablesAction
	| RunHideTablesAction
	| RunShowBannedAction
	| RunHideBannedAction
	| RunShowGameInfoAction
	| RunHideGameInfoAction
	| RunShowManageGameAction
	| RunHideManageGameAction
	| ChatMessageAddedAction
	| LastReplicChangedAction
	| ActivateChatAction
	| ShowmanReplicChangedAction
	| PlayerReplicChangedAction
	| InfoChangedAction
	| ChatPersonSelectedAction
	| TableSelectedAction
	| PersonAvatarChangedAction
	| GameStartedAction
	| StageChangedAction
	| PlayersStateClearedAction
	| GameStateClearedAction
	| SumsChangedAction
	| AfterQuestionStateChangedAction
	| CurrentPriceChangedAction
	| PersonAddedAction
	| PersonRemovedAction
	| ShowmanChangedAction
	| PlayerAddedAction
	| PlayerChangedAction
	| PlayerDeletedAction
	| PlayersSwapAction
	| RoleChangedAction
	| PlayerStateChangedAction
	| PlayerLostStateDroppedAction
	| IsPausedChangedAction
	| PlayerStakeChangedAction
	| DecisionNeededChangedAction
	| ClearDecisionsAction
	| IsGameButtonEnabledChangedAction
	| IsAnsweringAction
	| AnswerChangedAction
	| ValidateAction
	| SetStakesAction
	| StakeChangedAction
	| SelectionEnabledAction
	| AreSumsEditableChangedAction
	| ReadingSpeedChangedAction
	| RunTimerAction
	| PauseTimerAction
	| ResumeTimerAction
	| StopTimerAction
	| TimerMaximumChangedAction
	| ActivateShowmanDecisionAction
	| ActivatePlayerDecisionAction
	| ShowMainTimerAction
	| ClearDecisionsAndMainTimerAction
	| HintChangedAction
	| OperationErrorAction
	| HostNameChangedAction
	| ThemeNameChangedAction
	| IsReadyChangedAction
	| RoundsNamesChangedAction
	| ChooserChangedAction
	| PlayerInGameChangedAction
	| AreApellationsEnabledChangedAction
	| ButtonBlockingChangedAction
	| GameMetadataChangedAction
	| BannedListChangedAction
	| BannedAction
	| UnbannedAction
	| SelectBannedItemAction
	| PlayerMediaLoadedAction
	| EditTableAction;
