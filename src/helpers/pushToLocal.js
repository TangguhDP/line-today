export default function PushToLocal(data) {
  if (localStorage.getItem("bookmarked")) {
    var bookmarked = JSON.parse(localStorage.getItem("bookmarked"));
    if (bookmarked.find((e) => e.id === data.id)) {
      console.log("Dah ada");
      return;
    } else {
      bookmarked.push(data);
      localStorage.setItem("bookmarked", JSON.stringify([...bookmarked]));
    }
  } else {
    localStorage.setItem("bookmarked", JSON.stringify([data]));
  }
}

export function PopToLocal(data) {
  var bookmarked = JSON.parse(localStorage.getItem("bookmarked"));
  var newBookmarked = bookmarked.filter((e) => {
    return e.id !== data.id;
  });
  localStorage.setItem("bookmarked", JSON.stringify([...newBookmarked]));
}
