fetch(`/o/klabin-online-private-my-orders/quality-report/pdf?p_auth=${Liferay.authToken}`, 
{
    method: 'post',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(
        {
            "primeiraChamadaPedidos": {
                "ordemVenda": "0058909725",
                "item": "000010"
            }
        }
    )
} 

)
.then(res =>res.blob())
.then(blob => {
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = "filename.pdf";
    document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
    a.click();    
    a.remove();
})