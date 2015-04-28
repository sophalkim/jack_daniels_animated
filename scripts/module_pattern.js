function $(id) {
	return document.getElementById(id);
}

function changeText() {
	$("textOne").innerHTML = "awesome";
}

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

document.getElementById('size-12').onclick = size12;
document.getElementById('size-14').onclick = size14;
document.getElementById('size-16').onclick = size16;

var createPet = function(name) {
	var sex;

	return {
		setName: function(newName) {
			name = newName;
		},

		getName: function() {
			return name;
		},

		getSex: function() {
			return sex;
		},

		setSex: function(newSex) {
			if(typeof newSex == "string" && (newSex.toLowerCase() == "male" || newSex.toLowerCase() == "female")) {
				sex = newSex;
			}
		}
	}
}

function changePet() {
	var pet = createPet("Vivie");
	$("petText").innerHTML = pet.getName();
}

function showDOM() {
	var x = $("compositeText");
	var y = x.getElementsByTagName("p");
	alert(y[0].innerHTML);
}

var makeSentence = function() {
	var sentence = "The default sentence";
	function addWord(word) {
		sentence += word;
	}
	return {
		add: function(word) {
			addWord(word);
		},
		subtract: function(word) {
			alert('Subtracting');
		},
		get: function() {
			return sentence;
		}
	}
};

var moduleButton = $('moduleButton');
var sentence1 = makeSentence();
sentence1.add("Hello");
moduleButton.onclick = sentence1.subtract;