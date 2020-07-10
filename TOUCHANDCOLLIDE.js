function ifTouching(object1,object2){
    if(object2.x - object1.x <= (object1.width + object2.width)/2
    && object1.x - object2.x <= (object1.width + object2.width)/2
    && object2.y - object1.y <= (object1.height + object2.height)/2
    && object1.y - object2.y <= (object1.height + object2.height)/2)
    {
      return true;
    }
    
    return false;
    
}
function goCollide(object1,object2){
  if(object2.x - object1.x <= (object1.width + object2.width)/2
  && object1.x - object2.x <= (object1.width + object2.width)/2
  && object2.y - object1.y <= (object1.height + object2.height)/2
  && object1.y - object2.y <= (object1.height + object2.height)/2
  )
  {
    object1.velocityX = 0;
    object1.velocityY = 0;
  }
}