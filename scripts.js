var alphabet = "abcdefghijklmnopqrstuvwxyz";
var outputParagraph = document.getElementById("outputArea");

function encrypt()
{
  var input = document.getElementById("inputArea").value;
  var inputLength=input.length;
  var encrypted = "";
  var step = parseInt(document.getElementById("step").value);
  var indexOfCurrent;
  for(var i=0; i<inputLength; ++i)
  {
    //Conver current character to lower case and find its index in the alphabet
    indexOfCurrent = alphabet.indexOf(input[i].toLowerCase());

    //If current character is in the alphabet
    if(indexOfCurrent>-1)
    {
      var shifted = alphabet[(indexOfCurrent+step)%26];

      if(input[i]!==input[i].toLowerCase())
      {
        /*Check if the actual inputted character is in upper case:
        once the character is shifted and set the shifted character to upper case if needed*/
        shifted=shifted.toUpperCase();
      }

      //Finally add the shifted character to the encrypted message
      encrypted+=shifted;
    }
    else
    {
      //If the current character isn't in the alphabet just add it to the encrypted message
      encrypted+=input[i];
    }
  }
  //Set the output paragraph's text to the encrypted message
  outputParagraph.innerHTML = encrypted;
}

function decrypt()
{
  var input = document.getElementById("inputArea").value;
  var inputLength=input.length;
  var decrypted = "";
  var step = parseInt(document.getElementById("step").value);
  var indexOfCurrent;
  for(var i=0; i<inputLength; ++i)
  {
    //Conver current character to lower case and find its index in the alphabet
    indexOfCurrent = alphabet.indexOf(input[i].toLowerCase());

    //If current character is in the alphabet
    if(indexOfCurrent>-1)
    {
      var shifted = alphabet[(indexOfCurrent-step)%26];

      if(input[i]!==input[i].toLowerCase())
      {
        /*Check if the actual inputted character is in upper case:
        once the character is shifted and set the shifted character to upper case if needed*/
        shifted=shifted.toUpperCase();
      }

      //Finally add the shifted character to the decrypted message
      decrypted+=shifted;
    }
    else
    {
      //If the current character isn't in the alphabet just add it to the decrypted message
      decrypted+=input[i];
    }
  }
  //Set the output paragraph's text to the decrypted message
  outputParagraph.innerHTML = decrypted;
}
