

var twoSum = function(nums, target) {
    for(let i=0; i<nums.length-1; i++){
        for(let j=i+1; j<nums.length; j++){
            if(nums[i]+ nums[j] ==target){
                return [i, j]
            }
        }
    }
}

const a = twoSum([3,3], 6);
console.log(a)