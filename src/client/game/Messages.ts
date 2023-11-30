/** Defines OUTGOING SIGame messages. */
const enum Messages {
	/** Answer version. Denotes a preliminary answer printed by player. */
	AnswerVersion = 'ANSWER_VERSION',

	/** Validates player answer. */
	IsRight = 'ISRIGHT',

	/** Notifies that media has been successfully loaded. */
	MediaLoaded = 'MEDIALOADED',

	/** Gives turn to player. */
	SetChooser = 'SETCHOOSER',

	/** Sets person as host. */
	SetHost = 'SETHOST',

	/** Sets game join mode. */
	SetJoinMode = 'SETJOINMODE',

	/** Toggles (removes or restores a question). */
	Toggle = 'TOGGLE',

	/** Unbans the person. */
	Unban = 'UNBAN',
}

export default Messages;