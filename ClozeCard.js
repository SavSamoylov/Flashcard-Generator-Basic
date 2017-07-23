module.exports = ClozeCard;

function ClozeCard(text, cloze){
	this.cloze = cloze;
	this.fullText = text;
	this.partial = getPartial();

	function getPartial(){
		return text.replace(cloze, "...");
	}

	if (!text.includes(cloze)){
		console.log("ERROR: '" + cloze + "'' doesn't appear in '" + text + "'.");
	}

}