function collision(object1,obeject2){
 
    if ( object1.y-obeject2.y<obeject2.height/2+object1.height/2 &&
      obeject2.y-object1.y<obeject2.height/2+object1.height/2 && 
       obeject2.x-object1.x<obeject2.width/2+object1.width/2 &&
       object1.x-obeject2.x<obeject2.width/2+object1.width/2 ){
  return true;
    
    }
    else {
      return false;
    }
  }