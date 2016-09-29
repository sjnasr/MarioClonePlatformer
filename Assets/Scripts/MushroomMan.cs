using UnityEngine;
using System.Collections;


public class MushroomMan : MonoBehaviour {
	public float leftPoint = 12;
	public float rightPoint = 18;
	public int direction = 1;

	// Update is called once per frame
	void Update () {
		if (direction == 1) {
			transform.Translate (Vector3.right * 2 * Time.deltaTime, Space.World);
			direction = 1;
		}
		if (this.transform.position.x > rightPoint) {
			direction = 2;
		}

		if (direction == 2) {
			transform.Translate (Vector3.right * -2 * Time.deltaTime, Space.World);
		}

		if (this.transform.position.x < leftPoint) {
			direction = 1;
		}
	}
}
