let player1 = +prompt(
  `Iltimos raqamlardan birini tanleng: \n0) qog'oz \n1) Qaychi \n2) Quduq`
);
let player2 = Math.floor(Math.random() * 2);
if (player2 === 0) {
  `${alert(" Kamputer qog'oz ni tanladi")}`;
} else if (player2 === 1) {
  `${alert(" Kamputer Qaychi ni tanladi")}`;
} else if (player2 === 2) {
  ` ${alert(" Kamputer Quduq ni tanladi")}`;
}
if (player1 === player2) {
  alert("Durrang hech kim g'alaba qozonmadi");
} else if (player1 === 0 && player2 === 1) {
  alert("kamputer g'alaba qildi");
} else if (player1 === 0 && player2 === 2){
  alert("siz g'alaba qildingiz");
} else if (player1 === 1 && player2 === 0){
  alert("siz g'alaba qildingiz");
} else if (player1 === 1 && player2 === 2){
  alert("kamputer g'alaba qildi");
} else if (player1 === 2 && player2 === 0){
  alert("kamputer g'alaba qildi");
} else if (player1 === 2 && player2 === 1){
  alert("siz g'alaba qildingiz");
}