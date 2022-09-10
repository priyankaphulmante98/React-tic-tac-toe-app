export const findWinner  = (matrix) => {
    for(let p=0; p<3; p++){
        if(matrix[p][0]== matrix[p][1] && matrix[p][1]==matrix[p][2] && matrix[p][0]!=0){
            return matrix[p][0];

        }
    }
    for(let p=0; p<3; p++){
        if(matrix[0][p]==matrix[1][p] && matrix[1][p] == matrix[2][p] && matrix[0][p]!=0){
            console.log("priya", matrix)
            return matrix[0][p];
          }
        }
      
        if (matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]) {
          return matrix[0][0];
        }
      
        if (matrix[0][2] == matrix[1][1] && matrix[1][1] == matrix[2][0]) {
          return matrix[0][2];
        }
      
        let count = 0;
        for (let p = 0; p < 3; p++) {
          for (let q = 0; q < 3; q++) {
            if (matrix[p][q] != 0) {
              count++;
            }
          }
        }
      
        if (count == 9) return -1;
      
        return 0;
      };
    
