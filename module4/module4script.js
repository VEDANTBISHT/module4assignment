var names=new Array();
names[0]="vedant";
names[1]="ankit";
names[2]="Jenny";
names[3]="aayush";
names[4]="payal";
names[5]="omar";
names[6]="laura";
names[7]="sourav";
names[8]="diljeet";
names[9]="jimmy";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}