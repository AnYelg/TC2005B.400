using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class RBMotion : MonoBehaviour
{

    [SerializeField] float speed = 0.5f;
    [SerializeField] Text speedQuantity;
    Vector3 move;

    void Update()
    {
        //Read the input from the keyboard or gamepad
        move.x = Input.GetAxis("Horizontal");
        move.y = Input.GetAxis("Vertical");
        
        

        transform.Translate(move * speed * Time.deltaTime);
    }
    void OnTriggerEnter2D(Collider2D col)
    {
        if(col.gameObject.tag == "jordans")
        {
            speed += 2f;
            Destroy(col.gameObject);
            speedQuantity.text = "Velocidad: "+speed;
        }
    
    }

}
