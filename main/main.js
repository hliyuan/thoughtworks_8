module.exports = function main(s) {
    var example1 = ['._.','...','._.','._.','...','._.','._.','._.','._.','._.'];
    var example2 = ['|.|','..|','._|','._|','|_|','|_.','|_.','..|','|_|','|_|'];
    var example3 = ['|_|','..|','|_.','._|','..|','._|','|_|','..|','|_|','..|']
	var result1 = [];
	var result2 = [];
	var result3 = [];
	for (var i = 0; i < s.length; i++) {
		var number = parseInt(s.charAt(i));
		result1.push(example1[number]);
		result2.push(example2[number]);
		result3.push(example3[number]);
	}
	var result = result1.join(' ')+"\n"+ 
	result2.join(' ')+"\n"+
	result3.join(' ')+"\n";
	return result;
};