// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function (e) {
//             document.getElementById('photo').setAttribute('src', e.target.result);
//         };

//         reader.readAsDataURL(input.files[0]);
//     }
// }

let imgPreview = function (input) {
    if (input.files) {
        let allFiles = input.files.length;
        for (i = 0; i < allFiles; i++) {
            let reader = new FileReader();
            reader.onload = function (event) {
                let div = document.createElement('div')
                div.className = "overflow-hidden pb-[80%] relative";
                let hello = document.createElement('img');
                hello.setAttribute('src', event.target.result);
                hello.className = "flex-auto p-1 absolute top-0 left-0 right-0 h-full object-cover min-w-full object-top object-top"
                div.append(hello);
                document.getElementById('previewImages').append(div);
            }
            reader.readAsDataURL(input.files[i]);
        }
    }
}