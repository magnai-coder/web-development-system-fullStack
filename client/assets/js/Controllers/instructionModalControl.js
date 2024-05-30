var modal = document.getElementById("myModal");
var imgIns = document.getElementById("imgIns");
var span = document.getElementsByClassName("close")[0];
var textIns = document.getElementById("text");
var count = 0;


const sources = [
    "../assets/imgs/main/parts.PNG",
    "../assets/imgs/main/buttons.PNG",
    "../assets/imgs/main/addingComponent.PNG",
    "../assets/imgs/main/drag.PNG",
    "../assets/imgs/main/editing.PNG",
    "../assets/imgs/main/selectElement.PNG",
    "../assets/imgs/main/textEdit.PNG",
    "../assets/imgs/main/coding.PNG"
];
const text = [
    "Үндсэн хуудас 5 хэсгээс бүрдэх ба эдгээр хэсгүүд хоорондоо харилцан уялдаатай ажиллан.",
    "Шинэ - Шинээр хуудас үүсгэх, экспротлох - хийгдсэн хуудсыг татан авах, урьдчилан харах - хийгдсэн хуудсыг харах",
    "Тухайн байршуулсан бүрдлийн өмнө өөр бүрдэл хэсгийг чирэн ойртуулахад улаан тэмдэглэгээ харагдах ба тухайн байршилд байршуулж болно.",
    "Бүрдэл цэсээс хүссэн бүрдэл хэсгийг чирэн байршуулж болно. Мөн элементүүдийг ашиглан бүрдэл хэсгийг хүссэнээр зохиох боломжтой.",
    "Засвар өөрчлөлт оруулах хэсэгт шаардлагатай CSS хувиргалтын өөрчлөлтүүд хийх утгуудыг өгсөн байна.",
    "Тухайн элементийн дээр дарахад цэнхэр хүрээ үүснэ идэвхэжсэнийг илэрхийлнэ. Засвар хийхэд тухайн элементэд өөрчлөлт орно. Delete товчийг дарахад тухайн элемент устан. Тухайн элементийн эргэн тойронд ойртуулахад чиглүүлэгч сум сунгах чигт сум болон хувирах ба татан сунгахад элемент хэмжээнд өөрчлөлт орно. Элемент absolute горимд чирэхэд байршил өөрчлөх боломжтой болно.",
    "Тухайн текст элемент дээр хулганын зүүн товчоор хоёр дарахад тухайн тексэд өөрчлөлт хийх боломжтой болно. Дахин хоёр дарахад буцан хэвийн байдалд орно.",
    "Хуудсыг бүрдүүлж буй код хэсэг харах",
];



span.onclick = function() {
    if(sources[count] == null){
        modal.style.display = "none";
    }else{
        imgIns.src = sources[count];
        textIns.textContent = text[count];
        count++;
        
    }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}