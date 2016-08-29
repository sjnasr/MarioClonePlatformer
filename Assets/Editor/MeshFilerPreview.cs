using UnityEngine;
using System.Collections;
using UnityEditor;

[CustomEditor(typeof(MeshFilter))]
public class MeshFilerPreview : Editor{
	public override bool HasPreviewGUI()
	{
		return true;
	}
}
