$("#category-bar").append(
  '<ul id="category-bar__container" class="category-bar__container"></ul>'
);
for (var i = 0; i < data.length; i++) {
  let category = data[i];
  $("#category-bar__container").append(
    '<li class="category-bar__list">' +
      "<a" +
      ' class="category-bar__list--title"' +
      'href="../test/community/actor.html"' +
      'rel="actor">' +
      category.categoryKr +
      "</a>" +
      '<ul id="categort-bar__content' +
      i +
      '" class="categort-bar__content"></ul>'
  );

  for (let j = 0; j < category.contents.length; j++) {
    let contents = category.contents[j];
    console.log(contents.postLink);
    console.log(contents.postNameKr);

    $("#categort-bar__content" + i).append(
      '<li class="category-bar__content--item">' +
        "<a href=" +
        contents.postLink +
        ">" +
        contents.postNameKr +
        "</a>" +
        "</li>"
    );
  }
}
