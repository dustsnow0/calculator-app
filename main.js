// 数字ボタンを全部取得してイベントを付ける
document.querySelectorAll('.num').forEach(button => {
    button.addEventListener('click', function () {
        document.querySelector('input').value += button.value;
    });
});

//入力した内容を消去する
document.querySelector('.clr').addEventListener('click',function(){
    document.querySelector('input').value = '';
});
