using UnityEngine;
using System.Collections;
using UnityEditor;

public class PreviewTwoMat : EditorWindow {
	[SerializeField]
	private Material material1;
	[SerializeField]
	private Material material2;
	bool isEnabled;
	Editor gameObjectEditor;
	Editor gameObjectEditor2;

	[MenuItem("Tools/GameObject Editor")]
	static void ShowWindow() {
		GetWindow<PreviewTwoMat>("GameObject Editor");
	}
		

	void OnGUI() {
		EditorGUI.BeginChangeCheck ();
		material1 = (Material) EditorGUILayout.ObjectField(material1, typeof(Material), true);
		material2 = (Material) EditorGUILayout.ObjectField(material2, typeof(Material), true);

		if (EditorGUI.EndChangeCheck ()) {
			gameObjectEditor = Editor.CreateEditor (material1);
			gameObjectEditor2 = Editor.CreateEditor (material2);
		}
			
		if (isEnabled && material1 != null && material2 != null) {
			gameObjectEditor.OnPreviewGUI (GUILayoutUtility.GetRect (100, 100), EditorStyles.whiteLabel);
			gameObjectEditor2.OnPreviewGUI (GUILayoutUtility.GetRect (100, 100), EditorStyles.whiteLabel);
		}
		if(GUILayout.Button("Show materials")){
			isEnabled = !isEnabled;

		}
	}

	void OnEnabled(){
		material1 = null;
		material2 = null;
		gameObjectEditor = null;
		gameObjectEditor2 = null;
	}


}