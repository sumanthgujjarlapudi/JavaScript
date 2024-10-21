let n1=0;
let n2=1;
let arr=[];
for(let i=0;i<=50;i++)
{
  let n3=n1+n2;
  //console.log(" "+n3);
  arr.push(n3);
  n1=n2;
  n2=n3;

}
for(let k=arr.length-1;k>=0;k--)
{
  console.log(arr[k]);
}