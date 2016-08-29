using UnityEngine;
using System.Collections;

public class Pipe001Entry : MonoBehaviour {
	public GameObject PipeEntry;
	public int StoodOn;



	void OnTriggerEnter(Collider col){
		StoodOn = 1;
	}

	void OnTriggerExit(Collider col){
		StoodOn = 0;
	}

	void Update(){
		if (Input.GetButtonDown ("GoDown")) {
			if (StoodOn == 1) {
				//GameObject.Find("FPSController").GetComponent<"FirstPersonController">().enabled = false;
				transform.position = new Vector3 (0, -1000, 0);
				WaitingForPipe ();
			}
		}
	}

	IEnumerator WaitingForPipe(){
		PipeEntry.GetComponent<Animator> ().enabled = true;
		yield return new WaitForSeconds(2);

		PipeEntry.GetComponent<Animator> ().enabled = false;
		//GameObject.Find("FPSController").GetComponent<"FirstPersonController">().enabled = true;
	}
}
