
var PipeEntry : GameObject;
var StoodOn : int;


var MainCam : GameObject;
var SecondCam : GameObject;
var MainPlayer : GameObject;

var FadeScreen : GameObject;

var PipeSound : AudioSource;

function OnTriggerEnter (col : Collider) {
	StoodOn = 1;
}

function OnTriggerExit (col : Collider) {
	StoodOn = 0;
}


function Update () {
	if (Input.GetButtonDown("GoDown")) {
		if (StoodOn == 1) {
			//GameObject.Find("FPSController").GetComponent("FirstPersonController").enabled=false;
			transform.position = Vector3(0, -1000, 0);
			WaitingForPipe();
		}
	}
}

function WaitingForPipe () {
	PipeSound.Play();
	FadeScreen.SetActive(true);
	PipeEntry.GetComponent("Animator").enabled=true;
	yield WaitForSeconds(1.5);
	FadeScreen.GetComponent("Animator").enabled=true;
	yield WaitForSeconds(0.495);
	FadeScreen.GetComponent("Animator").enabled=false;
	PipeEntry.GetComponent("Animator").enabled=false;
	SecondCam.SetActive(true);
	MainCam.SetActive(false);
	MainPlayer.transform.position = Vector3(-2.09, -16.75, 13.5);
	FadeScreen.GetComponent("Animator").enabled=true;
	yield WaitForSeconds(0.495);
	FadeScreen.GetComponent("Animator").enabled=false;
	FadeScreen.SetActive(false);
	//GameObject.Find("FPSController").GetComponent("FirstPersonController").enabled=true;
}