function firstUniqChar(s) {
  const charCount = new Map();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount.get(char) === 1) {
      return i;
    }
  }

  return -1; 
}

//Example-1

const s1 = "leetcode";
console.log(firstUniqChar(s1));
// Output: 0


//Example-2

const s2 = "loveleetcode";
console.log(firstUniqChar(s2));
// Output: 2

//Example-3
const s3 = "aabb";
console.log(firstUniqChar(s3));

// Output: -1