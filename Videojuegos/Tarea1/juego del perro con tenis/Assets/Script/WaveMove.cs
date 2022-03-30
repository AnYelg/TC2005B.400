using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WaveMove : MonoBehaviour
{
    // Start is called before the first frame update
    
    [SerializeField] Vector3 move;
    // Update is called once per frame
    void Update()
    {
        transform.Translate(move * Time.deltaTime);
    }

    void OnTriggerEnter2D(Collider2D other) 
    {
        move = -move;  
    }

}

