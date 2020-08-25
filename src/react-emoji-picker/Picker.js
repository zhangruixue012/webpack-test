/* eslint-disable */
import React, { Component } from "react";
import styled from "styled-components";
import emojione from "emojione";
import PropTypes from "prop-types";

/* list of emoji's sourced from http://getemoji.com */
const PEOPLE_EMOJIS = [
	"😀",
	"😃",
	"😄",
	"😁",
	"😆",
	"😅",
	"😂",
	"😇",
	"🤣",
	"☺️",
	"😊",
	"🙂",
	"🙃",
	"😉",
	"😌",
	"😍",
	"😘",
	"😗",
	"😙",
	"😚",
	"😋",
	"😜",
	"😝",
	"😛",
	"🤑",
	"🤗",
	"🤓",
	"😎",
	"🤡",
	"🤠",
	"😏",
	"😒",
	"😞",
	"😔",
	"😟",
	"😕",
	"🙁",
	"☹️",
	"😣",
	"😖",
	"😫",
	"😩",
	"😤",
	"😠",
	"😡",
	"😶",
	"😐",
	"😑",
	"😯",
	"😦",
	"😧",
	"😮",
	"😲",
	"😵",
	"😳",
	"😱",
	"😨",
	"😰",
	"😢",
	"😥",
	"🤤",
	"😭",
	"😓",
	"😪",
	"😴",
	"🙄",
	"🤔",
	"🤥",
	"😬",
	"🤐",
	"🤢",
	"🤧",
	"😷",
	"🤒",
	"🤕",
	"😈",
	"👿",
	"👹",
	"👺",
	"💩",
	"👻",
	"💀",
	"☠️",
	"👽",
	"👾",
	"🤖",
	"🎃",
	"😺",
	"😸",
	"😹",
	"😻",
	"😼",
	"😽",
	"🙀",
	"😿",
	"😾",
	"👐",
	"🙌",
	"👏",
	"🙏",
	"🤝",
	"👍",
	"👎",
	"👊",
	"✊",
	"🤛",
	"🤜",
	"🤞",
	"✌️",
	"🤘",
	"👌",
	"👈",
	"👉",
	"👆",
	"👇",
	"☝️",
	"✋",
	"🤚",
	"🖐",
	"🖖",
	"👋",
	"🤙",
	"💪",
	"🖕",
	"✍️",
	"🤳",
	"💅",
	"🖖",
	"💄",
	"💋",
	"👄",
	"👅",
	"👂",
	"👃",
	"👣",
	"👁",
	"👀",
	"👗",
	"👠",
	"👞",
	"👟",
	"👒",
	"🎩",
	"🎓",
	"👑",
	"⛑",
	"🎒",
	"👝",
	"👛",
	"👜",
	"💼",
	"👓",
	"🕶",
	"☂️",
];
const ANIMALS_NATURE_EMOJIS = [
	"🐶",
	"🐱",
	"🐭",
	"🐹",
	"🐰",
	"🦊",
	"🐻",
	"🐼",
	"🐨",
	"🐯",
	"🦁",
	"🐮",
	"🐷",
	"🐽",
	"🐸",
	"🐵",
	"🙊",
	"🙉",
	"🙊",
	"🐒",
	"🐔",
	"🐧",
	"🐦",
	"🐤",
	"🐣",
	"🐥",
	"🦆",
	"🦅",
	"🦉",
	"🦇",
	"🐺",
	"🐗",
	"🐴",
	"🦄",
	"🐝",
	"🐛",
	"🦋",
	"🐌",
	"🐚",
	"🐞",
	"🐜",
	"🕷",
	"🕸",
	"🐢",
	"🐍",
	"🦎",
	"🦂",
	"🦀",
	"🦑",
	"🐙",
	"🦐",
	"🐠",
	"🐟",
	"🐡",
	"🐬",
	"🦈",
	"🐳",
	"🐋",
	"🐊",
	"🐆",
	"🐅",
	"🐃",
	"🐂",
	"🐄",
	"🦌",
	"🐪",
	"🐫",
	"🐘",
	"🦏",
	"🦍",
	"🐎",
	"🐖",
	"🐐",
	"🐏",
	"🐑",
	"🐕",
	"🐩",
	"🐈",
	"🐓",
	"🦃",
	"🕊",
	"🐇",
	"🐁",
	"🐀",
	"🐿",
	"🐾",
	"🐉",
	"🐲",
	"🌵",
	"🎄",
	"🌲",
	"🌳",
	"🌴",
	"🌱",
	"🌿",
	"☘️",
	"🍀",
	"🎍",
	"🎋",
	"🍃",
	"🍂",
	"🍁",
	"🍄",
	"🌾",
	"💐",
	"🌷",
	"🌹",
	"🥀",
	"🌻",
	"🌼",
	"🌸",
	"🌺",
	"🌎",
	"🌍",
	"🌏",
	"🌕",
	"🌖",
	"🌔",
	"🌚",
	"🌝",
	"🌞",
	"🌛",
	"🌜",
	"🌙",
	"💫",
	"⭐️",
	"🌟",
	"✨",
	"⚡️",
	"🔥",
	"💥",
	"☄️",
	"☀️",
	"🌤",
	"⛅️",
	"🌥",
	"🌦",
	"🌈",
	"☁️",
	"🌧",
	"⛈",
	"🌩",
	"🌨",
	"☃️",
	"⛄️",
	"❄️",
	"🌬",
	"💨",
	"🌪",
	"🌫",
	"🌊",
	"💧",
	"💦",
	"☔️",
];
const FOOD_SPORTS_EMOJIS = [
	"🍏",
	"🍎",
	"🍐",
	"🍊",
	"🍋",
	"🍌",
	"🍉",
	"🍇",
	"🍓",
	"🍈",
	"🍒",
	"🍑",
	"🍍",
	"🥝",
	"🥑",
	"🍅",
	"🍆",
	"🥒",
	"🥕",
	"🌽",
	"🌶",
	"🥔",
	"🍠",
	"🌰",
	"🥜",
	"🍯",
	"🥐",
	"🍞",
	"🥖",
	"🧀",
	"🥚",
	"🍳",
	"🥓",
	"🥞",
	"🍤",
	"🍗",
	"🍖",
	"🍕",
	"🌭",
	"🍔",
	"🍟",
	"🥙",
	"🌮",
	"🌯",
	"🥗",
	"🥘",
	"🍝",
	"🍜",
	"🍲",
	"🍥",
	"🍣",
	"🍱",
	"🍛",
	"🍚",
	"🍙",
	"🍘",
	"🍢",
	"🍡",
	"🍧",
	"🍨",
	"🍦",
	"🍰",
	"🎂",
	"🍮",
	"🍭",
	"🍬",
	"🍫",
	"🍿",
	"🍩",
	"🍪",
	"🥛",
	"🍼",
	"☕️",
	"🍵",
	"🍶",
	"🍺",
	"🍻",
	"🥂",
	"🍷",
	"🥃",
	"🍸",
	"🍹",
	"🍾",
	"🥄",
	"🍴",
	"🍽",
	"⚽️",
	"🏀",
	"🏈",
	"⚾️",
	"🎾",
	"🏐",
	"🏉",
	"🎱",
	"🏓",
	"🏸",
	"🥅",
	"🏒",
	"🏑",
	"🏏",
	"⛳️",
	"🏹",
	"🎣",
	"🥊",
	"🥋",
	"⛸",
	"🎿",
	"⛷",
	"🏂",
	"🏋",
	"🤺",
	"⛹️",
	"🏌",
	"🏄",
	"🏊",
	"🤽",
	"🚣",
	"🏇",
	"🚴",
	"🚵",
	"🎬",
	"🎤",
	"🎧",
	"🎼",
	"🎹",
	"🥁",
	"🎷",
	"🎺",
	"🎸",
	"🎻",
	"🎲",
	"🎯",
	"🎳",
	"🎮",
	"🏳",
	"🏴",
	"🏁",
	"🚩",
	"🎽",
	"🥇",
	"🥈",
	"🥉",
	"🏆",
];
const TRAVEL_PLACES_EMOJIS = [
	"🚗",
	"🚕",
	"🚙",
	"🚌",
	"🚎",
	"🏎",
	"🚓",
	"🚑",
	"🚒",
	"🚐",
	"🚚",
	"🚛",
	"🚜",
	"🛴",
	"🚲",
	"🛵",
	"🏍",
	"🚨",
	"🚔",
	"🚍",
	"🚘",
	"🚖",
	"🚡",
	"🚠",
	"🚟",
	"🚃",
	"🚋",
	"🚞",
	"🚝",
	"🚄",
	"🚅",
	"🚈",
	"🚂",
	"🚆",
	"🚇",
	"🚊",
	"🚉",
	"🚁",
	"🛩",
	"✈️",
	"🛫",
	"🛬",
	"🚀",
	"🛰",
	"💺",
	"🛶",
	"⛵️",
	"🛥",
	"🚤",
	"🛳",
	"⛴",
	"🚢",
	"⚓️",
	"🚧",
	"⛽️",
	"🚏",
	"🚦",
	"🚥",
	"🗺",
	"🗿",
	"🗽",
	"⛲️",
	"🗼",
	"🏰",
	"🏯",
	"🏟",
	"🎡",
	"🎢",
	"🎠",
	"⛱",
	"🏖",
	"🏝",
	"⛰",
	"🏔",
	"🗻",
	"🌋",
	"🏜",
	"🏕",
	"⛺️",
	"🛤",
	"🛣",
	"🏗",
	"🏭",
	"🏠",
	"🏡",
	"🏘",
	"🏚",
	"🏢",
	"🏬",
	"🏣",
	"🏤",
	"🏥",
	"🏦",
	"🏨",
	"🏪",
	"🏫",
	"🏩",
	"💒",
	"🏛",
	"⛪️",
	"🕌",
	"🕍",
	"🕋",
	"⛩",
	"🗾",
	"🎑",
	"🏞",
	"🌅",
	"🌄",
	"🌠",
	"🎇",
	"🎆",
	"🌇",
	"🌆",
	"🏙",
	"🌃",
	"🌌",
	"🌉",
	"🌁",
	"🎭",
	"🎨",
];
const OBJECTS_EMOJIS = [
	"🆓",
	"📗",
	"📕",
	"⌚️",
	"📱",
	"📲",
	"💻",
	"⌨️",
	"🖥",
	"🖨",
	"🖱",
	"🖲",
	"🕹",
	"🗜",
	"💽",
	"💾",
	"💿",
	"📀",
	"📼",
	"📷",
	"📸",
	"📹",
	"🎥",
	"📽",
	"🎞",
	"📞",
	"☎️",
	"📟",
	"📠",
	"📺",
	"📻",
	"🎙",
	"🎚",
	"🎛",
	"⏱",
	"⏲",
	"⏰",
	"🕰",
	"⌛️",
	"⏳",
	"📡",
	"🔋",
	"🔌",
	"💡",
	"🔦",
	"🕯",
	"🗑",
	"🛢",
	"💸",
	"💵",
	"💴",
	"💶",
	"💷",
	"💰",
	"💳",
	"💎",
	"⚖️",
	"🔧",
	"🔨",
	"⚒",
	"⛏",
	"⚙️",
	"💣",
	"🔪",
	"🗡",
	"⚔️",
	"🛡",
	"🚬",
	"⚰️",
	"⚱️",
	"🏺",
	"🔮",
	"📿",
	"💈",
	"⚗️",
	"🔭",
	"🔬",
	"🕳",
	"💊",
	"💉",
	"🌡",
	"🚽",
	"🚰",
	"🚿",
	"🛁",
	"🛀",
	"🛎",
	"🔑",
	"🗝",
	"🚪",
	"🛋",
	"🛏",
	"🖼",
	"🛍",
	"🛒",
	"🎁",
	"🎈",
	"🎏",
	"🎀",
	"🎊",
	"🎉",
	"🎎",
	"🏮",
	"🎐",
	"✉️",
	"📪",
	"📮",
	"📯",
	"📜",
	"📃",
	"📄",
	"📑",
	"📊",
	"📈",
	"📉",
	"🗒",
	"🗓",
	"📆",
	"📅",
	"📇",
	"🗃",
	"🗳",
	"🗄",
	"📋",
	"🗞",
	"📰",
	"📘",
	"📚",
	"📖",
	"🔖",
	"🔗",
	"📎",
	"📐",
	"📏",
	"📍",
	"📌",
	"🖊",
	"🖌",
	"🖍",
	"📝",
	"✏️",
	"🔍",
	"🔓",
];
const SYMBOLS_FLAGS_EMOJIS = [
	"❤️",
	"💛",
	"💚",
	"💙",
	"💜",
	"🖤",
	"💔",
	"❣️",
	"💕",
	"💞",
	"💓",
	"💗",
	"💖",
	"💘",
	"💝",
	"💟",
	"☮️",
	"✝️",
	"☪️",
	"🕉",
	"☸️",
	"✡️",
	"🔯",
	"🕎",
	"☯️",
	"☦️",
	"🛐",
	"⛎",
	"♈️",
	"♉️",
	"♊️",
	"♋️",
	"♌️",
	"♍️",
	"♎️",
	"♏️",
	"♐️",
	"♑️",
	"♒️",
	"♓️",
	"🆔",
	"⚛️",
	"🉑",
	"☢️",
	"☣️",
	"📴",
	"📳",
	"🈶",
	"🈚",
	"🈸",
	"🈺",
	"🈷",
	"✴️",
	"🆚",
	"💮",
	"🉐",
	"㊙️",
	"㊗️",
	"🈴",
	"🈵",
	"🈹",
	"🈲",
	"❌",
	"⭕️",
	"🛑",
	"⛔️",
	"📛",
	"🚫",
	"💯",
	"💢",
	"♨️",
	"🚷",
	"🚯",
	"🚳",
	"🚱",
	"🔞",
	"📵",
	"🚭",
	"❕",
	"❔",
	"‼️",
	"⁉️",
	"🔅",
	"🔆",
	"〽️",
	"⚠️",
	"🚸",
	"🔱",
	"⚜️",
	"🔰",
	"♻️",
	"✅",
	"🈯",
	"💹",
	"❇️",
	"✳️",
	"❎",
	"🌐",
	"💠",
	"Ⓜ️",
	"🌀",
	"💤",
	"🚺",
	"🚼",
	"🎵",
	"🎶",
	"➕",
	"➖",
	"➗",
	"✖️",
	"💲",
	"💱",
	"™️",
	"©️",
	"®️",
	"〰️",
	"➰",
	"➿",
	"🔚",
	"🔙",
	"🔛",
	"🔝",
	"✔️",
	"☑️",
	"🔈",
	"🔇",
	"🔉",
	"🔊",
	"🔔",
	"🔕",
	"📣",
	"📢",
	"🗨",
	"💬",
	"💭",
	"🗯",
	"♠️",
	"♣️",
	"♥️",
	"♦️",
	"🃏",
	"🎴",
	"🀄",
];

export default class extends Component {
	constructor(props) {
		super(props);
		this.state = {
			emojis: PEOPLE_EMOJIS,
			emojiCategory: "PEOPLE_EMOJIS",
		};
	}

	static get propTypes() {
		return {
			onEmojiSelected: PropTypes.func.isRequired,
			visible: PropTypes.bool,
			modal: PropTypes.bool,
		};
	}

	static get defaultProps() {
		return {
			visible: true,
			modal: false,
		};
	}

	toggleEmojis(emoji) {
		switch (emoji) {
			case "PEOPLE_EMOJIS":
				this.setState({
					emojis: PEOPLE_EMOJIS,
					emojiCategory: "PEOPLE_EMOJIS",
				});
				break;
			case "ANIMALS_NATURE_EMOJIS":
				this.setState({
					emojis: ANIMALS_NATURE_EMOJIS,
					emojiCategory: "ANIMALS_NATURE_EMOJIS",
				});
				break;
			case "FOOD_SPORTS_EMOJIS":
				this.setState({
					emojis: FOOD_SPORTS_EMOJIS,
					emojiCategory: "FOOD_SPORTS_EMOJIS",
				});
				break;
			case "TRAVEL_PLACES_EMOJIS":
				this.setState({
					emojis: TRAVEL_PLACES_EMOJIS,
					emojiCategory: "TRAVEL_PLACES_EMOJIS",
				});
				break;
			case "OBJECTS_EMOJIS":
				this.setState({
					emojis: OBJECTS_EMOJIS,
					emojiCategory: "OBJECTS_EMOJIS",
				});
				break;
			case "SYMBOLS_FLAGS_EMOJIS":
				this.setState({
					emojis: SYMBOLS_FLAGS_EMOJIS,
					emojiCategory: "SYMBOLS_FLAGS_EMOJIS",
				});
				break;
			default:
				this.setState({
					emojis: PEOPLE_EMOJIS,
					emojiCategory: "PEOPLE_EMOJIS",
				});
		}
	}

	onEmojiSelect(e) {
		if (e.target.alt === undefined) {
			return;
		}

		const emoji = {
			image: e.target,
			unicode: e.target.alt,
			shortname: e.target.title,
		};
		this.props.onEmojiSelected(emoji);
	}

	renderTabs() {
		const { emojiCategory } = this.state;
		return (
			<Tabs>
				<Title
					selected={emojiCategory === "PEOPLE_EMOJIS"}
					onClick={() => {
						this.toggleEmojis("PEOPLE_EMOJIS");
					}}
					dangerouslySetInnerHTML={{
						__html: emojione.unicodeToImage("😀"),
					}}
				/>

				<Title
					selected={emojiCategory === "ANIMALS_NATURE_EMOJIS"}
					onClick={() => {
						this.toggleEmojis("ANIMALS_NATURE_EMOJIS");
					}}
					dangerouslySetInnerHTML={{
						__html: emojione.unicodeToImage("🦊"),
					}}
				/>
				<Title
					selected={emojiCategory === "FOOD_SPORTS_EMOJIS"}
					onClick={() => {
						this.toggleEmojis("FOOD_SPORTS_EMOJIS");
					}}
					dangerouslySetInnerHTML={{
						__html: emojione.unicodeToImage("🍏"),
					}}
				/>
				<Title
					selected={emojiCategory === "TRAVEL_PLACES_EMOJIS"}
					onClick={() => {
						this.toggleEmojis("TRAVEL_PLACES_EMOJIS");
					}}
					dangerouslySetInnerHTML={{
						__html: emojione.unicodeToImage("🚗"),
					}}
				/>
				<Title
					selected={emojiCategory === "OBJECTS_EMOJIS"}
					onClick={() => {
						this.toggleEmojis("OBJECTS_EMOJIS");
					}}
					dangerouslySetInnerHTML={{
						__html: emojione.unicodeToImage("💎"),
					}}
				/>
				<Title
					selected={emojiCategory === "SYMBOLS_FLAGS_EMOJIS"}
					onClick={() => {
						this.toggleEmojis("SYMBOLS_FLAGS_EMOJIS");
					}}
					dangerouslySetInnerHTML={{
						__html: emojione.unicodeToImage("❤️"),
					}}
				/>
			</Tabs>
		);
	}

	render() {
		const { emojis } = this.state;
		const { visible, modal } = this.props;
		return (
			<Wrapper>
				<EmojiPickerWrapper visible={visible} modal={modal}>
					<EmojiWrapper>
						{emojis.map((emoji, index) => (
							<Emoji
								className="ld-emoji"
								key={index}
								role="presentation"
								onClick={this.onEmojiSelect.bind(this)}
								dangerouslySetInnerHTML={{
									__html: emojione.unicodeToImage(emoji),
								}}
							/>
						))}
					</EmojiWrapper>
					{this.renderTabs()}
				</EmojiPickerWrapper>
			</Wrapper>
		);
	}
}

const Wrapper = styled.div`
	position: relative;
`;

const EmojiPickerWrapper = styled.div`
	position: ${(props) => (props.modal ? "absolute" : "static")};
	opacity: ${(props) => (props.visible ? 1 : 0)};
	transition: opacity 300ms linear;
	margin-top: 1rem;
	border: 1px solid #f1f1f1;
	border-radius: 2px;
	background: white;
	box-shadow: 3px 3px 5px #bfbdbd;
	width: 340px;
	height: 350px;
	overflow-y: scroll;
	z-index: 100;
`;

const EmojiPicker = styled.div`
	cursor: pointer;
	border: 1px solid #eee;
	padding: 0.4rem 0.8rem;
	margin: 0;
	border-radius: 2px;

	&:hover {
		background: rgba(0, 0, 0, 0.1);
	}
`;

const EmojiWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0.8rem;
	padding-right: 0;
	border-radius: 2px;
	align-items: baseline;
`;

const Emoji = styled.span`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.21rem;
	img {
		height: 26px !important;
		width: 26px !important;
	}
`;

const Tabs = styled.div`
	display: flex;
	flex-direction: row;
	border-right: 1px solid rgba(0, 0, 0, 0.1);
`;

const Title = styled.p`
  padding-left: 0.35rem;
  padding: 0.8rem
  margin: 0;
  cursor: pointer;

  img {
    opacity: ${(props) => (props.selected ? "1" : "0.5")};
    height: 24px !important;
    width: 24px !important;
  }
`;
