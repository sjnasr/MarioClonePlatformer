using UnityEngine;
using UnityEditor;
using System.Collections;

public class CreateAssetBundles : MonoBehaviour {

	[MenuItem ("Assets/Build AssetBundles")]
	static void BuildAllAssetBundles(){
		BuildPipeline.BuildAssetBundles ("Assets/AssetBundles", BuildAssetBundleOptions.None, BuildTarget.StandaloneOSXUniversal);
	}
}
