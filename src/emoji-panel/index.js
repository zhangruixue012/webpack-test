import React, { Component } from "react";
import { observable } from "mobx";
import { observer } from "mobx-react";
import { QQfaceMap } from "./qqfaceMap";
import "./panelemoji.less";
import "./face.less";
import "./index.less";

@observer
class emojiPanel extends Component {
	fuhao = [
		"😁",
		"😷",
		"😂",
		"😝",
		"😳",
		"😱",
		"😔",
		"😒",
		"[嘿哈]",
		"[捂脸]",
		"[奸笑]",
		"[机智]",
		"[皱眉]",
		"[耶]",
		"👻",
		"🙏",
		"💪",
		"🎉",
		"🎁",
		"[红包]",
		"[鸡]",
		"😊",
		"😃",
		"☺",
		"😉",
		"😍",
		"😘",
		"😚",
		"😬",
		"😌",
		"😜",
		"😏",
		"😓",
		"😞",
		"😖",
		"😢",
		"😰",
		"😨",
		"😣",
		"😢",
		"😭",
		"😵",
		"😠",
		"😡",
		"😪",
		"👿",
		"👽",
		"❤",
		"💔",
		"💘",
		"✨",
		"⭐",
		"❗",
		"❓",
		"💤",
		"💦",
		"🎵",
		"🔥",
		"💩",
		"👍",
		"👎",
		"👊",
		"✌",
		"👆",
		"👇",
		"👉",
		"👈",
		"☝",
		"💏",
		"💑",
		"👦",
		"👧",
		"👩",
		"👨",
		"👼",
		"💀",
		"💋",
		"☀",
		"☔",
		"☁",
		"⛄",
		"🌙",
		"⚡",
		"🌊",
		"🐱",
		"🐶",
		"🐭",
		"🐹",
		"🐰",
		"🐺",
		"🐸",
		"🐯",
		"🐨",
		"🐻",
		"🐷",
		"🐮",
		"🐗",
		"🐵",
		"🐴",
		"🐍",
		"🐦",
		"🐔",
		"🐧",
		"🐛",
		"🐙",
		"🐠",
		"🐳",
		"🐬",
		"🌹",
		"🌺",
		"🌴",
		"🌵",
		"💝",
		"🎃",
		"🎅",
		"🎄",
		"🔔",
		"🎈",
		"💿",
		"📷",
		"🎥",
		"💻",
		"📺",
		"☎",
		"🔓",
		"🔒",
		"🔑",
		"🔨",
		"💡",
		"📫",
		"🛀",
		"💰",
		"💣",
		"🔫",
		"💊",
		"🏈",
		"🏀",
		"⚽",
		"⚾",
		"⛳",
		"🏆",
		"👾",
		"🎤",
		"🎸",
		"👙",
		"👑",
		"🌂",
		"👜",
		"💄",
		"💍",
		"💎",
		"☕",
		"🍺",
		"🍻",
		"🍸",
		"🍔",
		"🍟",
		"🍝",
		"🍣",
		"🍜",
		"🍳",
		"🍦",
		"🎂",
		"🍅",
		"✈",
		"🚀",
		"🚲",
		"🚄",
		"⚠",
		"🏁",
		"🚹",
		"🚺",
		"⭕",
		"✖",
		"©",
		"®",
		"™",
	];

	@observable
	activePanel = "qq";

	switchPanel = (key) => {
		this.activePanel = key;
	};

	// closeMe(e) {
	//     if (e.path && e.path.indexOf(document.getElementById('emoji-panel-pop')) >= 0) {
	//         return;
	//     }
	//     this.$emit('close')
	// }

	render() {
		const { switchPanel, activePanel, fuhao } = this;

		console.log("-----render-----:", fuhao);
		return (
			<div>
				<div className="emoji-panel">
					<div className="emoji-hd">
						<div className="hd-item">
							<a
								role="button"
								onClick={() => switchPanel("qq")}
								className={`hd-btn ${
									activePanel === "qq" ? "active" : ""
								}`}
							>
								QQ表情
							</a>
						</div>
						<div className="hd-item">
							<a
								role="button"
								onClick={() => switchPanel("emoji")}
								className={`hd-btn ${
									activePanel === "emoji" ? "active" : ""
								}`}
							>
								符号表情
							</a>
						</div>
					</div>
					<div className="emoji-bd">
						<div style={{ overflow: "hidden" }}>
							{activePanel === "qq" && (
								<div className="face-box">
									<div className="qq-face">
										{QQfaceMap.map((item) => {
											<a
												role="button"
												key={Math.random()}
												className={`face qq_face${
													item[Object.keys(item)[0]]
												}`}
											/>;
										})}
									</div>
								</div>
							)}

							{activePanel === "emoji" && (
								<div className="face-box">
									<div className="emoji-face">
										{fuhao.map((index) => (
											<a
												role="button"
												key={Math.random()}
												className={`panel_emoji panel_emoji${index}`}
											/>
										))}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default emojiPanel;
