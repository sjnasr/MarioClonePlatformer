using UnityEngine;
using System.Collections;
using UnityEngine.UI;

public class GlobalCoins : MonoBehaviour {
	public Text CoinDisplay;
	public static int coinCount;
	int InternalCoin;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		InternalCoin = coinCount;
		CoinDisplay.text = "Coins: " + coinCount;
	
	}
}
