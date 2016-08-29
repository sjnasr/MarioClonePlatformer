
function OnTriggerEnter (col : Collider) {
	transform.position = Vector3(0, -1000, 0);
	GlobalCoins.CoinCount += 1;
}