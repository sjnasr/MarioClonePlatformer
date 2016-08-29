using UnityEngine;
using System.Collections;

public class CameraFollow : MonoBehaviour {

	public Transform player;
	public float distanceFromPlayer = 5;
	public float staticCameraY = 3;
	
	// Update is called once per frame
	void Update () {
		Vector3 positionZ = transform.position;
		positionZ.z = player.position.z - distanceFromPlayer;
		transform.position = positionZ;

		Vector3 positionX = transform.position;
		positionX.x = player.position.x;
		transform.position = positionX;
	}

	void LateUpdate(){
		Vector3 position = Camera.main.transform.position;
		position.y = staticCameraY;
		Camera.main.transform.position = position;
	}
}
