function bookSearch(){
  var search = document.getElementById('search').value
  $(".book").empty()
  
  console.log(search)

  $.ajax({
    url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
    dataType: "json",

    success: function(data){
        for(i = 0; i < data.items.length; i++) {
          if (i < 4) {
            book1.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
            book1.innerHTML += "<img src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + ">"
          }

          if (i >3 && i<8) {
            book2.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
            book2.innerHTML += "<img src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + ">"
          }
          if (i > 6 && i < 11 ) {
            book3.innerHTML += "<h2>" + data.items[i].volumeInfo.title + "</h2>"
            book3.innerHTML += "<img src=" + data.items[i].volumeInfo.imageLinks.smallThumbnail + ">"
          
          }
        }
    },

    type: 'GET'
  });
  $("#book1").show();
  $("#book2").hide();
  $("#book3").hide();

}

document.getElementById('buscar').addEventListener('click',bookSearch,false)
