document.querySelector('button').addEventListener('click', getApi)

async function getApi() {
          let inputVal = document.querySelector("input").value;

          try{
                    let output = await fetch(`https://nigeriawesternstates.herokuapp.com/api/${inputVal}`)
                    let finalOutput = await output.json()
          
                    document.querySelector('h2').innerText = finalOutput.governor
          }catch(err) {
                    console.error(err);
          }
}



