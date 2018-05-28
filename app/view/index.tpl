<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="/public/css/bootstrap.min.css" />
  <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>

<table class="table">
{% for item in dataList %}
  <tr>
    <td>{{ item.content }}</td>
    <td>{{ item.title }}</td>
    <td>
      <button class="edit" type="button" class="btn btn-primary" data-id="{{item._id}}">编辑</button>
      <button class="del" type="button" class="btn btn-primary" data-id="{{item._id}}">删除</button>
    </td>
  </tr>
{% endfor %}
</table>
<script>
$(function(){
  $('.table').on('click',function(e){
    var node = $(e.target);
    if(node.hasClass('edit')){
      alert('编辑'+ node.attr('data-id'));
    }
    if(node.hasClass('del')){
      $.post('/del',{id: node.attr('data-id')},function(){
        console.log();
      });
    }
  });
});
</script>
</body>
</html>