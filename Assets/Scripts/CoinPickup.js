var coinAudio : AudioSource;

function OnTriggerEnter (col : Collider) {
	transform.position = Vector3(0, -1000, 0);
	coinAudio.Play();
	GlobalCoins.CoinCount += 1;
}