import UnityEngine.UI;

var CoinDisplay : GameObject;
static var CoinCount : int;
var InternalCoin : int;

function Update () {
	InternalCoin = CoinCount;
	CoinDisplay.GetComponent.<Text>().text = "Coins: " + CoinCount;
}