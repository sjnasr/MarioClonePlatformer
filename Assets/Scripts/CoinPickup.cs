using UnityEngine;
using System.Collections;

public class CoinPickup : MonoBehaviour {

	void OnTriggerEvent(Collider col){
		transform.position = new Vector3 (0, -1000, 0);
		GlobalCoins.coinCount += 1;

	}
}
