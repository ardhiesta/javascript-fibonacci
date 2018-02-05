var i;
var fib = []; // inisialisasi array, array fib berisi bilangan fibonacci
var bilFibonacci = 0; // variabel bilFibonacci akan diisi bilangan fibonacci dari array fib

i = 0;

// contoh menampilkan deret bilangan fibonacci yang kurang dari 300
while(bilFibonacci < 300) { // looping dilakukan terus selama bilFibonacci < 300
    if(i === 0) {
		fib[i] = 1;
	} else if(i === 1) {
		fib[i] = 2;
	} else {
		// Next fibonacci number = previous + one before previous
		fib[i] = fib[i-2] + fib[i-1];
	}
	
    bilFibonacci = fib[i];
    
    if (bilFibonacci > 300) { // looping dihentikan ketika bilangan fibonacci sudah melebihi 300
		break;
    }
    
    console.log(bilFibonacci);
    i++;
}

/*
output :
1
2
3
5
8
13
21
34
55
89
144
233
*/
