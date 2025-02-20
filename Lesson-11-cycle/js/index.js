let arr = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];

for(let i = 0; i < arr.length; i++) {
    if(arr[i]%2 != 0) continue;
    console.log(arr[i]);
}