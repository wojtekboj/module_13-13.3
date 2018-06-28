process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if(input !== null) {
            var instruction = input.toString().trim();
            switch (instruction) {
                case '/exit':
                    process.stdout.write('Quitting app!\n');
                    process.exit();
                    break;
                default:
                    process.stderr.write('Wrong instruction!\n');
            }
    }
});

console.log('Your Node version is ' + process.versions.node);
console.log('Your Languague is ' + process.env.LANG);