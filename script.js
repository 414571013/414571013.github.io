$(document).ready(function(){
  // 1. jQuery 折疊/展開特效
  $('#toggle-bio-btn').click(function(){
    $('#bio-detail').slideToggle(300);
  });

  // 2. Ajax 抓取 JSON API
  $('#api-btn').click(function(){
    $('#api-result').slideDown();
    $('#api-status').text('請求中...').css('color', 'orange');

    // 隨機取得 1 ~ 10 號測試資料
    const randomId = Math.floor(Math.random() * 10) + 1;

    $.ajax({
      url: `https://jsonplaceholder.typicode.com/todos/${randomId}`,
      type: 'GET',
      dataType: 'json',
      success: function(data){
        $('#api-status').text('200 OK (成功取得資料)').css('color', 'green');
        $('#api-title').text(data.title);
        $('#api-id').text(data.id);
      },
      error: function(){
        $('#api-status').text('取得資料失敗！').css('color', 'red');
      }
    });
  });
});