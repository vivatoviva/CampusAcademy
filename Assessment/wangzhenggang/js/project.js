function switchli(tag)
			{
				for(var i=1;i<6;i++) 
				{
					if ("tag"+i==tag) 
						{
							document.getElementById(tag).className="border-show";
							// var a=document.getElementById(tag);
							// alert(a.id);
						}
						else
						{
							document.getElementById("tag"+i).className="";
						}
					
				}
			};
// var a=document.getElementById("project-table");
// document.getElementById("project-detail").style.height=a.style.height;
