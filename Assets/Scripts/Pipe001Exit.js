var PipeSound : AudioSource;
var FadeScreen : GameObject;
var MainCam : GameObject;
var SecondCam : GameObject;
var PipeEntry : GameObject;
var MainPlayer : GameObject;

function OnTriggerEnter (col : Collider) {
	PipeSound.Play();
	FadeScreen.SetActive(true);
	FadeScreen.GetComponent("Animator").enabled=true;
	yield WaitForSeconds(0.495);
	FadeScreen.GetComponent("Animator").enabled=false;
	MainCam.SetActive(true);
	SecondCam.SetActive(false);
	MainPlayer.transform.position = Vector3(29, 2, 0.5);
	PipeEntry.GetComponent("Animator").enabled=true;
	FadeScreen.GetComponent("Animator").enabled=true;
	yield WaitForSeconds(0.495);
	FadeScreen.GetComponent("Animator").enabled=false;
	yield WaitForSeconds(1);
	PipeEntry.GetComponent("Animator").enabled=false;
	FadeScreen.SetActive(false);
}