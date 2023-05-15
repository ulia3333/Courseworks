﻿using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
public class miror : MonoBehaviour, IPointerClickHandler
{
    public void OnPointerClick(PointerEventData eventData)
    {
        if (state == "Stop")
        {
            if (delta == 0) { state = "Moving"; }
            else { state = "MovingBack"; delta = 0; }
        }
    }
    string state = "Stop";
    Quaternion startRotation;
    Quaternion needRotation = Quaternion.Euler(-80, 40, -90);
    float delta = 0;
    // Start is called before the first frame update
    void Start()
    {
        startRotation = transform.rotation;
    }
    void Update()
    {
        if (state == "Moving")
        {
            transform.rotation = Quaternion.Slerp(startRotation, needRotation, delta);
            delta += 0.01f;
            if (delta >= 1)
            {
                delta = 1;
                state = "Stop";
            }
        }
        if (state == "MovingBack")
        {
            transform.rotation = Quaternion.Slerp(needRotation, startRotation, delta);
            delta += 0.01f;
            if (delta >= 1)
            {
                delta = 0;
                state = "Stop";
            }
        }

    }
}

