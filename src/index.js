/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    var i,n;
    var a,d,c,d;
    var arr = [];
    n = 0;
    for (i = 0; i <= preferences.length; i++) {
      a = i+1;
      if (arr[a] !=1  ) {
        b = preferences[i];
        c = preferences[b-1];
        d = preferences[c-1];
          if ( c != a) {
            if ( d == a) {
            arr[a] = 1;
            arr[b] = 1;
            arr[c] = 1;
            n++;
          };
        } else {
          arr[a] = 1;
          arr[a] = 1;
          };
      }
    };
    return n;
  };
