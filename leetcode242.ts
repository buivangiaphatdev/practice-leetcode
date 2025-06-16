function isAnagram1(str1: string, str2: string): boolean {
  if (str1.length != str2.length) return false;

  const map = new Map<string, number>();

  for (let i = 0; i < str1.length; i++) {
    const charStr1: string = str1[i];
    const charStr2: string = str2[i];

    map.set(charStr1, (map.get(charStr1) || 0) + 1);
    map.set(charStr2, (map.get(charStr2) || 0) - 1);
  }
  for (let [key, value] of map) {
    if (value !== 0) return false;
  }
  return true;
}

function isAnagram2(str1: string, str2: string):boolean {
  if (str1.length != str2.length) return false;

  const fre: number[] = new Array(26).fill(0);

  for(let i=0; i<str1.length;i++){
    let index = str1.charCodeAt(i) - 'a'.charCodeAt(0);
    fre[index]++;
  }

  for(let i=0; i<str2.length;i++){
    let index = str2.charCodeAt(i)-'a'.charCodeAt(0);
    if(fre[index] ==0) return false;
    fre[index]--;
  }
  return true;
}
console.log(isAnagram2("anagram", "nagaram"));

function isAnagram3(str1: string, str2:string):boolean{
  str1= str1.split('').sort().join('');
  str2= str2.split('').sort().join('');

  if(str1.length != str2.length) return false;
  for(let i=0; i<str1.length;i++){
    if(str1[i] != str2[i]) return false;
  }
  return true;
}