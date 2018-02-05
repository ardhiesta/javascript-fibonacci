var i;
var fib = []; // inisialisasi array, array fib berisi bilangan fibonacci
var bilFibonacci = 0; // variabel bilFibonacci akan diisi bilangan fibonacci dari array fib
var jml = 0; // variabel jml untuk menyimpan hasil penjumlahan bilangan fibonacci yang genap
i = 0;

// contoh deret bilangan fibonacci yang kurang dari 1000
while(bilFibonacci < 1000) { // looping dilakukan terus selama bilFibonacci < 1000
    if(i === 0) {
		fib[i] = 1;
	} else if(i === 1) {
		fib[i] = 2;
	} else {
		// Next fibonacci number = previous + one before previous
		fib[i] = fib[i-2] + fib[i-1];
	}
	
    bilFibonacci = fib[i];
    
    if (bilFibonacci > 1000) { // looping dihentikan ketika bilangan fibonacci sudah melebihi 1000
		break;
    }
    
    if(bilFibonacci % 2 === 0){ // yang ditampilkan hanya bilangan fibonacci yang genap
		console.log(bilFibonacci);
		jml = jml + bilFibonacci;
	}
	
    i++;
}

console.log('jumlah bilangan fibonacci yang genap : '+jml);

/*
output :
2
8
34
144
610
jumlah bilangan fibonacci yang genap : 798
*/
