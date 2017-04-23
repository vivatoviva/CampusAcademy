var i=0;
function yousubmit()
{
	if(document.getElementById('join').value=="")
	{
	alert("请输入内容");
	}
	else
	{
	alert("Input Success:"+document.getElementById('join').value);
	}
	document.getElementById('join').value="";
}