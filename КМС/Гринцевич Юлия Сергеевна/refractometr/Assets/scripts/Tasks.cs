using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Tasks : MonoBehaviour
{
    public Text message;
    private int val = 0;
    private void Start()
    {
     
    }
    

    public void Task1()      
    {
        if (val==0)
        {

            message.text = "Отстегните застежку и откиньте осветительную призму";
            val = 1;

        }
    }
    public void Task2()
    {
        if (val == 1)
        {

            message.text = "Протрите призму";
            val++;
        }
    }
    public void Task3()
    {
        if (val == 2)
        {

            message.text = "Нанесите раствор на призму";
            val++;

        }
    }
    public void Task4()
    {
        if (val == 3)
        {

            message.text = "Закройте осветительную призму и застегните застежку";
            val++;

        }
    }
    public void Task5()
    {
        if (val == 4)
        {

            message.text = "Открыть окно осветительной призмы и зеркало";
            val++;

        }
    }
    public void Task6()
    {
        if (val == 5)
        {

            message.text = "Получить четкое изображение света и тени в акуляре";
            val++;

        }
    }
    public void Task7()
    {
        if (val == 6)
        {

            message.text = "Зафиксировать измерения в таблице";
            val++;

        }
    }
    public void Task8()
    {
        if (val == 7)
        {

            message.text = "Закрыть окно осветительной призмы и зеркало";
            val++;

        }
    }
    public void Task9()
    {
        if (val == 8)
        {

            message.text = "Повторить шаги для оставшихся растворов";
            val=0;

        }
    }

}
