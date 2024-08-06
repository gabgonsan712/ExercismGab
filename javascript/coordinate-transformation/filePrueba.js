

function composeTransform(f, g) {
    function moveCoordinatesRight2Px(x, y) {
      return translate2d(2, 0)(x,y);
    }
    function doubleCoordinates(x, y) {
      return scale2d(2, 2)(x,y);
    }
  
    function composedTransformations(x, y) {
      const a = moveCoordinatesRight2Px(x,y);
      let cx = a[0];
      let cy = a[1];
      return doubleCoordinates(cx, cy);
    }
    return composedTransformations;
  }
  

  scale2d(2, 4)(1,2);
  translate2d(2,2)(1,3);