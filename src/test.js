// var fnTimeCal = function(fn, args) {
//   var beginTime = new Date().getSeconds()
//   console.log(...args)
//   fn.apply(this, args)
//   var endTime = new Date().getSeconds()
//   console.warn(endTime - beginTime)
// }

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/* 1.暴力法
 * 292ms
 * 时间复杂度 O(n^2)
 * 空间复杂度 O(1)
 */

var twoSum = function(nums, target) {
  let result = []

  function checkPush(arr, tar) {
    if ([].indexOf.call(arr, tar) === -1) {
      arr.push(tar)
    }
  }

  for (let i = 0, len = nums.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        checkPush(result, i)
        checkPush(result, j)
      }
    }
  }

  return result
}

/* 2.两遍哈希表
 * 84ms
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */
var twoSum = function(nums, target) {
  var result = []
  var map = {}
  for (var i = 0, len = nums.length; i < len; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = [i]
    } else {
     map[nums[i]] = [...map[nums[i]], i]
    }
  }

  for (var i = 0, len = nums.length; i < len; i++) {
    var complement = target - nums[i]
    if (complement in map) {
      if (complement === nums[i]) {
        if (map[complement].length < 2) {
          continue
        }
      }
      result.push(i)
    }
  }
  return result
}

/* 3.一遍哈希表
 * 92ms
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 */

var twoSum = function(nums, target) {
  console.log('nums', nums)
  console.log('target', target)
  var map = new Map(), r = []

  nums.forEach(function(value, index){
    if (map.get(value) !== undefined) {
      r.push(map.get(value))
      r.push(index)
      return false
    } else {
      map.set(target - value, index)
    }
  })

  return r
}

var nums = [3,2,4,2], target = 6

var fnTimeCal = function() {
  var beginTime = new Date().getSeconds()
  let a = 1
  let b = a++
  var endTime = new Date().getSeconds()
  console.warn(endTime - beginTime)
}

console.info('test-result', fnTimeCal())
