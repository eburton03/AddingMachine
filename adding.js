var sum = 0;
var count = 0;


function input(x)
{
  sum = sum + x;
  count = count + 1
  printInfo();
}

function printInfo()
{
  document.getElementById("output").innerHTML = "The sum is " + sum + "<br>" + "the count is " + count;
}

function clearIt()
{
document.getElementById("output").innerHTML = "<p> </p>";
sum = 0;
count = 0;

}
