var MushroomMan : GameObject;

function OnTriggerEnter (col : Collider) {
	this.GetComponent("BoxCollider").enabled = false;
	MushroomMan.GetComponent("MushroomMan").enabled = false;
	MushroomMan.transform.localScale -= new Vector3(0, 0.8, 0);
	MushroomMan.transform.localPosition -= new Vector3(0, 0.4, 0);
	yield WaitForSeconds(1);
	MushroomMan.transform.position = Vector3(0, -1000, 0);
}