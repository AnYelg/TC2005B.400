using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Points : MonoBehaviour
{
    [SerializeField] int point;
    [SerializeField] Text pointsText;
    [SerializeField] Text gameOver;
    

    void OnTriggerEnter2D(Collider2D col)
    {
        if(col.gameObject.tag == "premio")
        {
            Destroy(col.gameObject);
            point +=30;
            pointsText.text = "Score: " + point;
            gameOver.text = "Game Over!";
        }
        if(col.gameObject.tag == "pulga")
        {
            Destroy(col.gameObject);
            point -=2;
            pointsText.text = "Score: " + point;
        }
        if(col.gameObject.tag == "snack")
        {
            Destroy(col.gameObject);
            point +=1;
            pointsText.text = "Score: " + point;
        }
    }
}
