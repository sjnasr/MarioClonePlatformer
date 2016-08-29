//=========================================

//This destroys the block

var XPos : float = transform.position.x;
var YPos : float = transform.position.y;
var ZPos : float = transform.position.z;
var Waiting : float = 0.02;

function OnTriggerEnter (col : Collider) {

	if (col.gameObject.tag == "Player") {
		this.transform.position = Vector3(XPos, YPos+0.1, ZPos);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos+0.2, ZPos);
		yield WaitForSeconds(Waiting);
		transform.GetComponent.<Collider>().isTrigger = false;
		this.transform.position = Vector3(XPos, YPos+0.3, ZPos+0.5);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos+0.4, ZPos+1.0);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos-0.1, ZPos+1.5);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos-0.6, ZPos+2.0);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos-1.6, ZPos+2.0);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos-2.6, ZPos+2.0);
		yield WaitForSeconds(Waiting);
		this.transform.position = Vector3(XPos, YPos-4.0, ZPos+2.0);
		yield WaitForSeconds(0.25);
		transform.GetComponent.<Collider>().isTrigger = true;
		Destroy(gameObject);
	}
}