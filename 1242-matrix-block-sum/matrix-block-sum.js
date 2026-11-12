/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, k) {
    let rows = mat.length
    let cols = mat[0].length

    let prefix = Array.from(
        {length:rows},
        () => Array(cols).fill(0)
    )

    for(let i = 0;i<rows;i++){
        for(let j = 0;j<cols;j++){

            let top = i > 0 ? prefix[i-1][j] : 0

            let left = j > 0 ? prefix[i][j -1] : 0

            let leftTop = (i > 0 && j > 0) ?
                            prefix[i - 1][j - 1] : 0

             prefix[i][j] = mat[i][j] + top + left - leftTop
        }
    }

    function sumRegion(row1,col1,row2,col2){
        let total = prefix[row2][col2]

        let top = row1 > 0 ? prefix[row1 -1][col2] : 0

        let left = col1 > 0 ? prefix[row2][col1 - 1] : 0

        let topLeft = (row1 > 0 && col1 > 0) ? 
                        prefix[row1 - 1][col1 - 1] : 0

        
        return total - top - left + topLeft
    }

    let Answer = Array.from(
        {length: rows},
        () => Array(cols).fill(0)
    )

    for(let i = 0; i< rows;i++){
        for(let j = 0;j< cols;j++){
            let row1 = Math.max(0,i - k)
            let col1 = Math.max(0,j - k)

            let row2 = Math.min(rows - 1, i + k)
            let col2 = Math.min(cols - 1,  j + k)

            Answer[i][j] = sumRegion(row1,col1,row2,col2)
        }
    }

    return Answer
};