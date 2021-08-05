
let search = document.querySelector('#input_txt')

search.addEventListener('keypress', async function (e) {
    if (e.key === 'Enter') {
        Search();
  }
          
});
async function Search() {
  let res = document.getElementById("input_txt").value;
  if (res.length <= 0) {
    return false;
  } else {
    let result = await fetch(
      `http://api.serpstack.com/search?query=${res}&access_key=46d5f21a876cced4929a75139777c128`
    );
    let data = await result.json();
      console.log(data.request.search_url);
      window.location.href = `${data.request.search_url}`;
  }
}



