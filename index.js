// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(path) {

  const dosyaYolu=path.split("/");
  console.log("dosya yolu :",dosyaYolu);
  console.log("index:", dosyaYolu[dosyaYolu.length-1]);
  return `${dosyaYolu[dosyaYolu.length-1]}`
  
  
}

console.log("Görev 1 =>",dosyaAdiniBul("C:/Users/johnsmith/Music/Beethoven_5.mp3"))
console.log("Görev 1 '2.input =>",dosyaAdiniBul("Beethoven_5.mp3"))
console.log("Görev 1 '3.input =>",dosyaAdiniBul(""))
/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/
const number =[1,2,3,4,5]
function ortalamaBul(arr) {
  
  if(arr.length===0){
    return null;
  };
  const toplam =arr.reduce(function(deger1,deger2){
  
   return  deger1+deger2;
},0);
console.log("toplam",toplam);
return Math.ceil(toplam/arr.length);

}
console.log("Görev 2 benim verdiğim arrayde =>",ortalamaBul(number));
console.log("Görev 2 1.input =>",ortalamaBul([]));
console.log("Görev 2 2.input =>",ortalamaBul([4]));
console.log("Görev 2 3.input =>",ortalamaBul( [50, -26, 153, 7]));
console.log("Görev 2 4.input =>",ortalamaBul([109, 216, 288, 143, 71, 185, -278, 194, 5]));


/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/
const numbers=[5,10,15,20]

function ortalamadanBuyukleriBul(arr,fonksiyon) {
  if(arr.length===0){
    return null;
  }
  
  const ortalama=fonksiyon(arr);
  
  const ortalamadanBuyukler=arr.filter(function(Item){
    console.log("ıtem:",Item);
    
    return Item>=ortalama;
  })
  
  return ortalamadanBuyukler
}

//console.log("Görev 3 benim verdiğim array =>",ortalamadanBuyukleriBul(numbers,ortalamaBul))
console.log("Görev 3 1.input =>",ortalamadanBuyukleriBul([],ortalamaBul))
//console.log("Görev 3 2.input =>",ortalamadanBuyukleriBul([4],ortalamaBul))
//console.log("Görev 3 3.input =>",ortalamadanBuyukleriBul([50, -26, 153, 7],ortalamaBul))
//console.log("Görev 3 4.input =>",ortalamadanBuyukleriBul([109, 216, 288, 143, 71, 185, -278, 194, 5],ortalamaBul))
/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
