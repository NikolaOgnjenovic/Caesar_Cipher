var alphabet = "abcdefghijklmnopqrstuvwxyz";
var outputParagraph = document.getElementById("outputArea");

function useCipher(shouldEncrypt)
{
  var input = document.getElementById("inputArea").value;
  var inputLength=input.length;
  var message = "";
  var step = parseInt(document.getElementById("step").value);
  step%=26;
  var indexOfCurrent;
  for(var i=0; i<inputLength; ++i)
  {
    //Conver current character to lower case and find its index in the alphabet
    indexOfCurrent = alphabet.indexOf(input[i].toLowerCase());

    //If current character is in the alphabet
    if(indexOfCurrent>-1)
    {
      var shifted;

      if(shouldEncrypt==true)
      {
        /*If the input is getting encrypted just move step characters forward through the alphabet
        (%26 because we can step over the length of the alphabet)*/
        shifted = alphabet[(indexOfCurrent+step)%26];
      }
      else
      {
        //If the input is getting decrypted go step characters back through the alphabet
        if(indexOfCurrent-step<0)
        {
          //If we drop below the index 0, just get the alphabet's character at index 26-(step-indexOfCurrent)
          shifted = alphabet[26-(step-indexOfCurrent)];
        }
        else
        {
          //If we stay above -1, get the curent character's index in the alphabet - step (characters we wnent back)%26
          shifted = alphabet[(indexOfCurrent-step)%26];
        }
      }

      /*Check if the actual inputted character is in upper case:
      once the character is shifted and set the shifted character to upper case if needed*/
      if(input[i]!==input[i].toLowerCase())
      {

        shifted=shifted.toUpperCase();
      }

      //Finally add the shifted character to the message
      message+=shifted;
    }
    else
    {
      //If the current character isn't in the alphabet just add it to the message
      message+=input[i];
    }
  }
  //Set the output paragraph's text to the message
  outputParagraph.innerHTML = message;
}
