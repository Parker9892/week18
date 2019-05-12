$('#scrape').on('click',function(){
    $.get('/scrape').then(function(res){
        alert(res)
    })
})