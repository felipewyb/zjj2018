var bgColor;      //���汻��ɫ
function MouseMoveIn(res)
{

    bgColor = res.style.backgroundColor;
    //res.style.cursor="hand";
    res.style.backgroundColor="#BDDFFF";
  
}

function MouseMoveOut(res)
{
  
    //res.style.cursor="Default";
    res.style.backgroundColor=bgColor;
  
}